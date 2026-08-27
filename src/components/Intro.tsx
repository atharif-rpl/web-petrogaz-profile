'use client';

import { useEffect, useState } from 'react';

export default function Intro() {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 150);
    const t2 = setTimeout(() => setStep(2), 550);

    const duration = 2000;
    const interval = 25;
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      setProgress(Math.min(100, Math.round((current / steps) * 100)));
      if (current >= steps) clearInterval(timer);
    }, interval);

    const hideTimer = setTimeout(() => setIsLoading(false), 2600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearInterval(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const t = setTimeout(() => setIsMounted(false), 900);
      return () => clearTimeout(t);
    }
  }, [isLoading]);

  if (!isMounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#050911] flex items-center justify-center overflow-hidden transition-transform duration-900 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isLoading ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:44px_44px] pointer-events-none" />
      <div className="absolute w-[420px] h-[420px] rounded-full bg-amber-500/[0.08] blur-[130px] animate-[breathe_4s_ease-in-out_infinite] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">

        {/* Pumpjack line-art — beam mengangguk terus-menerus */}
        <svg
          viewBox="0 0 160 120"
          className={`w-24 h-20 md:w-28 md:h-24 mb-6 transition-opacity duration-500 ${
            step >= 1 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Rangka statis */}
          <line x1="70" y1="108" x2="95" y2="40" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
          <line x1="120" y1="108" x2="95" y2="40" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
          <line x1="30" y1="108" x2="140" y2="108" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
          {/* Wellhead */}
          <line x1="60" y1="108" x2="60" y2="98" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
          <rect x="54" y="92" width="12" height="8" rx="1" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" fill="none" />

          {/* Beam bergerak — pivot di titik (95,40) */}
          <g className="origin-[95px_40px] animate-[pump_2.6s_ease-in-out_infinite]">
            <line x1="55" y1="40" x2="118" y2="40" stroke="#fb923c" strokeWidth="3" strokeLinecap="round" />
            <circle cx="95" cy="40" r="3" fill="rgba(255,255,255,0.4)" />
            <circle cx="115" cy="40" r="5" fill="rgba(255,255,255,0.15)" />
            {/* Horse head arm turun ke wellhead */}
            <path d="M 55 40 Q 45 40 42 52" stroke="#fb923c" strokeWidth="3" strokeLinecap="round" fill="none" />
            <line x1="42" y1="52" x2="60" y2="98" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" />
          </g>
        </svg>

        {/* Wordmark */}
        <div
          className={`flex items-baseline transition-all duration-700 ease-out ${
            step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <span className="font-black text-4xl md:text-5xl tracking-tight text-white">
            PETROGAZ
          </span>
          <span className="font-black text-4xl md:text-5xl text-amber-400">.</span>
        </div>

        <span
          className={`font-mono text-[11px] tracking-[0.3em] uppercase text-slate-500 mt-2 transition-all duration-700 ease-out delay-100 ${
            step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          Bilingual School
        </span>

        {/* Pipa progres — sambungan rivet + fluida mengalir di dalam */}
        <div
          className={`flex items-center gap-3 mt-10 transition-opacity duration-500 ${
            step >= 2 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative w-44 h-3 rounded-full bg-white/[0.06] border border-white/10 overflow-hidden">
            {/* Rivet / sambungan pipa tiap 10% */}
            <div className="absolute inset-0 flex justify-between px-1 items-center pointer-events-none">
              {Array.from({ length: 9 }).map((_, i) => (
                <span key={i} className="w-px h-1.5 bg-white/10" />
              ))}
            </div>
            {/* Fill dengan tekstur alir */}
            <div
              className="absolute inset-y-0 left-0 rounded-full overflow-hidden"
              style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-300" />
              <div className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.5)_0px,rgba(255,255,255,0.5)_3px,transparent_3px,transparent_9px)] animate-[flow_1s_linear_infinite]" />
            </div>
          </div>
          <span className="font-mono text-[11px] text-slate-500 tabular-nums w-8">
            {progress}%
          </span>
        </div>
      </div>

      <style>{`
        @keyframes breathe {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        @keyframes pump {
          0%, 100% { transform: rotate(-9deg); }
          50% { transform: rotate(9deg); }
        }
        @keyframes flow {
          from { background-position: 0 0; }
          to { background-position: 12px 0; }
        }
      `}</style>
    </div>
  );
}