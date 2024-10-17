'use client';

import React, { useState, useEffect } from 'react';

export function BfcacheAnimationReset({ children }: { children: React.ReactNode }) {
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    // Localhost / dev: bfcache nunca ocorre (HMR WebSocket impede).
    // A página carrega fresca, mas o React não faz remount das animações.
    // performance.navigation.type === 'back_forward' detecta isso no mount
    // e força o remount via key — sem reload, sem flash.
    const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
    if (nav?.type === 'back_forward') {
      setResetKey(k => k + 1);
      return;
    }

    // Produção: bfcache congela o JS, useEffect não re-executa no restore.
    // O listener registrado no mount inicial sobrevive ao congelamento e
    // dispara setResetKey quando pageshow(persisted: true) ocorre —
    // sem reload, sem flash.
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) setResetKey(k => k + 1);
    };
    window.addEventListener('pageshow', onPageShow);
    return () => window.removeEventListener('pageshow', onPageShow);
  }, []);

  // React.Fragment com key: quando resetKey muda, React desmonta e remonta
  // toda a subárvore — Framer Motion reinicia do initial, WebGL recria contexto.
  return <React.Fragment key={resetKey}>{children}</React.Fragment>;
}
