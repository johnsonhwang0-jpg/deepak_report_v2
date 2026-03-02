import React from 'react';
import { motion } from 'framer-motion';
import { CAPABILITIES } from '../constants';
import { LucideIcon } from 'lucide-react';
import { StarField } from './StarField';

const TechCard: React.FC<{
  cap: { title: string; description: string };
}> = ({ cap }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-slate-900/40 backdrop-blur-sm rounded-2xl p-8 flex flex-col h-full overflow-hidden transition-all duration-500 hover:bg-slate-900/60"
    >
      {/* Diffuse Border Effect */}
      <div className="absolute inset-0 rounded-2xl border border-white/5 group-hover:border-gold-500/20 transition-colors duration-500" />
      
      {/* Inner Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <h3 className="text-2xl font-serif text-slate-100 mb-4 group-hover:text-gold-200 transition-colors duration-300 relative z-10">
        {cap.title}
      </h3>
      
      <p className="text-slate-400 text-base leading-relaxed font-light group-hover:text-slate-300 transition-colors duration-300 relative z-10">
        {cap.description}
      </p>
    </motion.div>
  );
};

const TechFoundation: React.FC = () => {
  return (
    <section id="technology" className="py-24 px-4 bg-midnight-900 relative overflow-hidden">
      <StarField density={30} />
      
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900/0 via-slate-900/50 to-slate-900/0 pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-6xl text-slate-100 mb-8"
          >
            The Foundation: <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600 italic">Tech & Content</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg font-light"
          >
            Leveraging a decade of expertise to translate ancient wisdom into modern digital experiences.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto mb-20">
          {/* Diffuse Blurred Connecting Ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] pointer-events-none">
             {/* Large Diffuse Ring - Base Layer */}
             <motion.div 
               animate={{ scale: [1, 1.05, 1] }}
               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
               className="absolute inset-0 rounded-full border-[30px] border-gold-500/10 blur-3xl" 
             />
             
             {/* Rotating Diffuse Highlights - Clockwise */}
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute inset-0 rounded-full"
             >
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-gold-500/20 blur-[80px] rounded-full" />
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-gold-500/20 blur-[80px] rounded-full" />
             </motion.div>

             {/* Rotating Diffuse Highlights - Counter-Clockwise (Inner) */}
             <motion.div 
               animate={{ rotate: -360 }}
               transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
               className="absolute inset-12 rounded-full"
             >
               <div className="absolute left-0 top-1/2 -translate-y-1/2 w-40 h-40 bg-gold-400/20 blur-[60px] rounded-full" />
               <div className="absolute right-0 top-1/2 -translate-y-1/2 w-40 h-40 bg-gold-400/20 blur-[60px] rounded-full" />
             </motion.div>

             {/* Connecting Cross/Hub - Pulsing */}
             <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.9, 1.1, 0.9] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0"
             >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-48 bg-gold-500/10 blur-3xl rotate-45" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-48 bg-gold-500/10 blur-3xl -rotate-45" />
             </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {CAPABILITIES.map((cap, index) => (
              <TechCard key={index} cap={cap} />
            ))}
          </div>
        </div>

        {/* Concluding Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <div className="w-16 h-px bg-gold-500/30 mx-auto mb-8" />
          <p className="text-xl md:text-2xl font-serif text-slate-200 leading-relaxed italic">
            "These four capabilities form our unique <span className="text-gold-400">Delivery Matrix</span>."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechFoundation;