import React from 'react';
import { Instagram, Facebook, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';

export const ClinicFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#0B1E19] text-neutral-300 border-t border-emerald-950 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-emerald-900/60">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-emerald-500/30 bg-emerald-900/40 flex items-center justify-center text-emerald-300">
              <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
                <path d="M7 3C4 5 3 9 4 13C4.8 16 6 21 8 21C10 21 10.5 17 12 17C13.5 17 14 21 16 21C18 21 19.2 16 20 13C21 9 20 5 17 3C14 1 13 4 12 4C11 4 10 1 7 3Z" />
              </svg>
            </div>
            <div>
              <span className="font-clinic-serif text-xl font-bold tracking-wider text-white uppercase block leading-none">
                EVERMILES
              </span>
              <span className="text-[8px] uppercase tracking-[0.25em] text-emerald-400 font-mono">
                DENTAL CLINIC
              </span>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs font-clinic-sans text-neutral-300">
            <a href="#home" className="hover:text-emerald-300 transition-colors">Home</a>
            <a href="#about" className="hover:text-emerald-300 transition-colors">About</a>
            <a href="#services" className="hover:text-emerald-300 transition-colors">Services</a>
            <a href="#team" className="hover:text-emerald-300 transition-colors">Our Team</a>
            <a href="#gallery" className="hover:text-emerald-300 transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-emerald-300 transition-colors">Contact</a>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a href="#contact" className="w-9 h-9 rounded-full border border-emerald-800/80 bg-emerald-950/40 flex items-center justify-center text-neutral-300 hover:text-white hover:border-emerald-500 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#contact" className="w-9 h-9 rounded-full border border-emerald-800/80 bg-emerald-950/40 flex items-center justify-center text-neutral-300 hover:text-white hover:border-emerald-500 transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#contact" className="w-9 h-9 rounded-full border border-emerald-800/80 bg-emerald-950/40 flex items-center justify-center text-neutral-300 hover:text-white hover:border-emerald-500 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#contact" className="w-9 h-9 rounded-full border border-emerald-800/80 bg-emerald-950/40 flex items-center justify-center text-neutral-300 hover:text-white hover:border-emerald-500 transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Details & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-clinic-sans text-neutral-500">
          <div>
            © 2026 Evermiles Dental Clinic. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Modern Precision Dental Architecture</span>
            <span>·</span>
            <span>Emergency Line: (800) 449-SMILE</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
