import React, { useState } from 'react';
import { Scissors, Phone, MapPin, Mail, Instagram, Facebook, Twitter, Check } from 'lucide-react';
import { useDemo } from '../../context/DemoContext';

export const SalonFooter: React.FC = () => {
  const { showNotification } = useDemo();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    showNotification(`Subscribed ${email} to Barbercrop newsletter!`);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  return (
    <footer id="contacts" className="bg-black text-neutral-400 border-t border-neutral-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-900">
          
          {/* Col 1: Brand */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center text-white transform -rotate-12">
                <Scissors className="w-5 h-5" />
              </div>
              <span className="font-salon-display text-2xl font-bold tracking-widest text-white">
                BARBERCROP
              </span>
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed max-w-sm">
              Authentic barbershop heritage established in Richardson, California. Specializing in master scissor cuts, traditional Italian hot lather shaves, and sculpted beard contouring.
            </p>
          </div>

          {/* Col 2: Contact Info */}
          <div className="md:col-span-4 space-y-3 text-xs font-mono">
            <div className="flex items-center gap-2 text-white font-bold text-base mb-2">
              <Phone className="w-4 h-4 text-red-500" />
              <a href="tel:+1234567890" className="hover:text-red-400 transition-colors">
                +1 234 567 890
              </a>
            </div>
            <div className="flex items-start gap-2 text-neutral-400">
              <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>3891 Ranchview Dr. Richardson, California 62639</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <Mail className="w-4 h-4 text-red-500 shrink-0" />
              <a href="mailto:barbercrop@example.com" className="hover:text-white transition-colors">
                barbercrop@example.com
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 pt-3">
              <a href="#contacts" className="p-2 bg-neutral-900 hover:bg-red-600 hover:text-white transition-colors rounded-none text-neutral-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#contacts" className="p-2 bg-neutral-900 hover:bg-red-600 hover:text-white transition-colors rounded-none text-neutral-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#contacts" className="p-2 bg-neutral-900 hover:bg-red-600 hover:text-white transition-colors rounded-none text-neutral-300">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Newsletter */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-salon-display text-lg font-bold text-white tracking-wider">
              SUBSCRIBE OUR NEWSLETTER
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              Receive exclusive grooming offers, seasonal hair care tips, and master barber availability.
            </p>

            <form onSubmit={handleSubscribe} className="flex items-stretch">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-red-600 transition-colors"
              />
              <button
                type="submit"
                className="px-5 bg-red-600 hover:bg-red-700 text-white font-salon-display text-xs tracking-wider font-semibold transition-colors shrink-0"
              >
                {subscribed ? <Check className="w-4 h-4" /> : 'SUBSCRIBE'}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-600">
          <div>BARBERCROP ©. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-neutral-400">Privacy Policy</a>
            <a href="#terms" className="hover:text-neutral-400">Terms of Service</a>
            <a href="#cookies" className="hover:text-neutral-400">Cookie Preferences</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
