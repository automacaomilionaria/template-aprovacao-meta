"use client";

import { FC, ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface ComponentProps {
  title: string;
  description: string[];
  icon?: ReactNode;
}

export const HighlightCard: FC<ComponentProps> = ({ title, description, icon }) => {
  return (
    <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
      <Card className="text-white rounded-2xl border border-white/10 bg-gradient-to-br from-[#010101] via-[#0f0a05] to-[#010101] shadow-2xl relative backdrop-blur-xl overflow-hidden hover:border-orange-500/30 hover:shadow-orange-500/10 hover:shadow-[0_0_40px_rgba(249,115,22,0.15)] w-full h-full">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 to-white/5 opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
          <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-orange-500/20 to-transparent blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700 animate-bounce"></div>
          <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-orange-400/5 blur-xl animate-ping"></div>
          <div className="absolute bottom-16 right-16 w-12 h-12 rounded-full bg-white/5 blur-lg animate-ping"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
        </div>

        <div className="p-8 relative z-10 flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full border-2 border-orange-500/20 animate-ping"></div>
            <div className="absolute inset-0 rounded-full border border-orange-500/10 animate-pulse"></div>

            <div className="p-6 rounded-full backdrop-blur-lg border border-white/10 bg-gradient-to-br from-black/80 to-[#1a0f05] shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]">
              <div className="transform group-hover:rotate-180 transition-transform duration-700">
                {icon}
              </div>
            </div>
          </div>

          <h3 className="mb-4 text-2xl font-bold bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent animate-pulse transform group-hover:scale-105 transition-transform duration-300">
            {title}
          </h3>

          <div className="space-y-1 max-w-sm">
            {description.map((line, idx) => (
              <p
                key={idx}
                className="text-gray-400 text-sm leading-relaxed transform group-hover:text-gray-300 transition-colors duration-300"
              >
                {line}
              </p>
            ))}
          </div>

          <div className="mt-6 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full transform group-hover:w-1/2 group-hover:h-1 transition-all duration-500 animate-pulse"></div>

          <div className="flex space-x-2 mt-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-orange-500/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </Card>
    </div>
  );
};
