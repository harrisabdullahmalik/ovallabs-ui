
import React from 'react';
import { NAV_LINKS, COLORS } from '../constants';
import { User } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full px-6 py-4 md:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo Placeholder - Secondary Logo style (saves height) */}
        <div className="flex items-center gap-2">
          <div 
            className="flex h-10 w-10 items-center justify-center rounded-xl"
            style={{ backgroundColor: COLORS.forestGreen }}
          >
            <div className="h-5 w-5 rounded-full border-2 border-white opacity-90" />
          </div>
          <span className="font-varela text-xl font-bold tracking-tight" style={{ color: COLORS.deepLichen }}>
            OVAL LABS
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold transition-colors hover:opacity-70"
              style={{ color: COLORS.stoneGreen }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Sign In CTA */}
        <button 
          className="flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold text-white shadow-sm transition-transform active:scale-95"
          style={{ backgroundColor: COLORS.deepLichen }}
        >
          <User size={16} />
          Sign In
        </button>
      </div>
    </header>
  );
};
