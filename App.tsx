
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { COLORS } from './constants';

const App: React.FC = () => {
  return (
    <div 
      className="min-h-screen selection:bg-green-100 selection:text-green-900"
      style={{ backgroundColor: COLORS.mintVapor }}
    >
      {/* Decorative background shape to match the "soft/organic" feel */}
      <div 
        className="absolute top-0 left-0 -z-10 h-[800px] w-full opacity-30 blur-3xl"
        style={{ 
          background: `radial-gradient(circle at 50% 0%, ${COLORS.forestGreen}20 0%, transparent 70%)` 
        }} 
      />

      <Header />
      
      <main>
        <Hero />
        
        {/* Wireframe Placeholder for next sections of sitemap */}
        <section className="mx-auto max-w-7xl px-6 py-20 opacity-30 text-center italic">
          <p className="border-t border-dashed border-gray-300 pt-20">
            Next sections in sitemap: Automation Revolution, Numbers, The Problem...
          </p>
        </section>
      </main>

      <footer className="mt-auto border-t border-gray-100 py-12 px-6 text-center">
        <p className="text-sm font-semibold opacity-40" style={{ color: COLORS.deepLichen }}>
          &copy; {new Date().getFullYear()} Oval Labs. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
