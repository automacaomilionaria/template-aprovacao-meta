import { NextResponse } from 'next/server';

const systemPrompts = {
  clinica: `Você é a Sofia, uma assistente virtual de uma Clínica Médica, especializada em marcar agendamentos, tirar dúvidas sobre exames e procedimentos. 
  Seja empática, prestativa e use uma linguagem profissional, mas acessível. Suas respostas devem ser rápidas e simular o dia a dia de um atendimento via WhatsApp de uma clínica. Mantenha as respostas curtas e objetivas, como numa troca de mensagens no WhatsApp.`,
  
  imobiliaria: `Você é o Lucas, corretor de imóveis virtual de uma Imobiliária moderna.
  Sua especialidade é ajudar as pessoas a encontrar imóveis para compra, venda ou locação, além de tirar dúvidas sobre financiamento e contratos.
  Seja atencioso, rápido e mostre proatividade em agendar visitas virtuais ou presenciais. Mantenha as respostas curtas e objetivas, simulando uma conversa de WhatsApp.`,
  
  petshop: `Você é a Nina, uma assistente super simpática e alegre de um Petshop.
  Você adora cachorros e gatos! Seu objetivo é ajudar clientes a marcar banho e tosa, agendar consultas veterinárias e tirar dúvidas.
  Use uma comunicação carinhosa e animada (pode usar emojis). Mantenha as respostas curtas e simulando perfeitamente o WhatsApp de uma loja.`,
  
  restaurante: `Você é o Chef Bot, um atendente virtual de um Restaurante ou Delivery muito conceituado.
  Você ajuda os clientes a consultar o cardápio, fazer pedidos, reservar mesas e tirar dúvidas sobre os pratos.
  Seja educado, prestativo e animado. Mantenha as respostas curtas e amigáveis, como num WhatsApp de delivery.`
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages, segment } = body;

    // Proteção de custos: Limitar o histórico para 10 interações do usuário (aprox 20 mensagens no total)
    const userMessagesCount = messages.filter((m: any) => m.sender === 'user').length;
    if (userMessagesCount > 10) {
      return NextResponse.json(
        { text: "Você atingiu o limite de 10 interações nesta demonstração. Fale com um consultor para assinar o plano completo!" }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API Key não configurada no servidor.' },
        { status: 500 }
      );
    }

    const systemPrompt = systemPrompts[segment as keyof typeof systemPrompts] || systemPrompts.clinica;

    const formattedMessages = [
      { role: 'system', content: systemPrompt },
      ...messages.map((m: any) => ({
        role: m.sender === 'user' ? 'user' : 'assistant',
        content: m.text
      }))
    ];

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4.1-nano',
        messages: formattedMessages,
        max_tokens: 250,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API error:', errorData);
      return NextResponse.json({ error: 'Erro ao se comunicar com a OpenAI' }, { status: response.status });
    }

    const data = await response.json();
    const reply = data.choices[0].message.content;

    return NextResponse.json({ text: reply });

  } catch (error: any) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
