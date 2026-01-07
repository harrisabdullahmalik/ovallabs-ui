
import React from 'react';
import { COLORS } from '../constants';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        {/* Badge */}
        <div className="mb-8 flex justify-center">
          <div 
            className="flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-sm"
            style={{ backgroundColor: 'rgba(74, 107, 80, 0.1)', color: COLORS.forestGreen }}
          >
            <Sparkles size={14} />
            Your Intelligent Systems Partner
          </div>
        </div>

        {/* Headline */}
        <h1 
          className="font-varela mx-auto mb-6 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl"
          style={{ color: COLORS.deepLichen }}
        >
          Automate, Simplify & Accelerate Your Business Operations
        </h1>

        {/* Sub-headline */}
        <p 
          className="mx-auto mb-10 max-w-2xl text-lg md:text-xl"
          style={{ color: COLORS.stoneGreen }}
        >
          Transform the way you work with Oval Labs—your intelligent AI business assistant for emails, meetings, and reports. Radical efficiency starts here.
        </p>

        {/* Primary CTA */}
        <div className="mb-16 flex justify-center">
          <button 
            className="font-varela flex items-center gap-2 rounded-full px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 active:scale-95"
            style={{ backgroundColor: COLORS.deepLichen }}
          >
            Get Started Free
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Illustration Placeholders - Following the Reference Image layout */}
        <div className="relative mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          
          {/* Left Illustration Placeholder (UI Card) */}
          <div className="hidden flex-col items-center justify-center md:flex">
            <div className="h-64 w-full rounded-3xl border border-gray-200 bg-white shadow-sm p-4 relative overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                    <div className="h-3 w-3 rounded-full bg-red-200" />
                    <div className="h-3 w-3 rounded-full bg-yellow-200" />
                    <div className="h-3 w-3 rounded-full bg-green-200" />
                </div>
                <div className="space-y-3">
                    <div className="h-4 w-3/4 rounded-full bg-gray-100" />
                    <div className="h-4 w-full rounded-full bg-gray-50" />
                    <div className="h-4 w-1/2 rounded-full bg-gray-100" />
                </div>
                <div className="absolute bottom-4 right-4 h-12 w-12 rounded-full" style={{ backgroundColor: COLORS.forestGreen + '20' }} />
                <div className="mt-8 text-xs font-bold text-gray-300">ILLUSTRATION PLACEHOLDER</div>
            </div>
          </div>

          {/* Center Illustration Placeholder (Workflow) */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex h-64 w-full items-center justify-center rounded-3xl border border-dashed border-gray-300 relative">
               {/* Visualizing connectivity */}
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-2xl shadow-md" style={{ backgroundColor: COLORS.deepLichen }} />
                  <div className="absolute top-1/2 left-4 h-12 w-12 rounded-lg bg-white border border-gray-100" />
                  <div className="absolute top-1/2 right-4 h-12 w-12 rounded-lg bg-white border border-gray-100" />
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 h-12 w-12 rounded-lg bg-white border border-gray-100" />
               </div>
               <span className="text-xs font-bold tracking-widest text-gray-400">CONNECTIVITY DIAGRAM</span>
            </div>
          </div>

          {/* Right Illustration Placeholder (Team Members) */}
          <div className="hidden flex-col items-center justify-center md:flex">
            <div className="h-64 w-full rounded-3xl border border-gray-200 bg-white shadow-sm p-6 space-y-4">
                {[1,2,3].map(i => (
                    <div key={i} className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-gray-100" />
                        <div className="flex-1 space-y-1">
                            <div className="h-3 w-20 rounded bg-gray-200" />
                            <div className="h-2 w-16 rounded bg-gray-100" />
                        </div>
                    </div>
                ))}
                <div className="mt-4 pt-4 border-t border-gray-50 flex justify-center">
                    <div className="h-8 w-24 rounded-full bg-gray-50" />
                </div>
                <div className="text-xs font-bold text-gray-300">USER INTERFACE MOCKUP</div>
            </div>
          </div>

        </div>

        {/* Subtle background floating dots (as seen in image) */}
        <div className="absolute top-1/4 left-10 h-3 w-3 rounded-full opacity-20" style={{ backgroundColor: COLORS.forestGreen }} />
        <div className="absolute top-1/2 right-10 h-4 w-4 rounded-full opacity-20" style={{ backgroundColor: COLORS.stoneGreen }} />
        <div className="absolute bottom-1/4 left-1/4 h-2 w-2 rounded-full opacity-10" style={{ backgroundColor: COLORS.deepLichen }} />
      </div>
    </section>
  );
};
