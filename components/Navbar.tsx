import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'The Opportunity', id: 'home' },
    { name: 'Market Insights', id: 'insights' },
    { name: 'GTM Strategy', id: 'strategy' },
    { name: 'Tech Foundation', id: 'technology' },
    { name: 'Localization', id: 'operations' },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-midnight-900/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className="flex items-center space-x-2">
           <span className="font-serif text-sm md:text-lg text-slate-200 tracking-wider">
             DEEPAK CHOPRA <span className="text-gold-500 mx-1 md:mx-2">|</span> CHINA STRATEGY
           </span>
        </div>
        <button 
          onClick={() => setIsOpen(true)}
          className="p-2 text-gold-400 hover:text-gold-300 transition-colors bg-white/5 rounded-full hover:bg-white/10"
        >
          <Menu size={24} />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
            />
            
            {/* Drawer */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-midnight-900 border-l border-gold-500/20 z-50 p-8 flex flex-col shadow-2xl shadow-gold-900/20"
            >
              <div className="flex justify-end mb-12">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-400 hover:text-white bg-white/5 rounded-full"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-6">
                <div className="mb-6 pl-4">
                   <h3 className="text-gold-500 text-xs font-bold uppercase tracking-[0.2em] mb-2">Table of Contents</h3>
                   <div className="h-0.5 w-12 bg-gradient-to-r from-gold-500 to-transparent"></div>
                </div>
                
                {navItems.map((item, idx) => (
                  <motion.button
                    key={item.id}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => scrollTo(item.id)}
                    className="flex items-center justify-between w-full group text-left px-4 py-3 rounded-lg hover:bg-white/5 transition-all"
                  >
                    <span className="font-serif text-lg text-slate-300 group-hover:text-gold-400 transition-colors">
                      {item.name}
                    </span>
                    <ChevronRight size={16} className="text-slate-600 group-hover:text-gold-400 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                  </motion.button>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-white/5 text-center">
                 <p className="text-xs text-slate-600 leading-relaxed font-serif">
                   Strategic Vision Report<br/>
                   Confidential
                 </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};