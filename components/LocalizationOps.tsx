import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LOCALIZATION } from '../constants';
import { Globe, ShieldCheck } from 'lucide-react';
import { StarField } from './StarField';

const LocalizationOps: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="operations" ref={containerRef} className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-midnight-900 to-black">
      <StarField density={40} />
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-slate-100 mb-6"
          >
            Operational Backbone: <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600 italic">Localization</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg"
          >
            Harmonizing Global Wisdom with Local Soil
          </motion.p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line on the Left */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800 hidden md:block">
            <motion.div 
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-gold-500 via-gold-300 to-gold-500 opacity-50 shadow-[0_0_10px_rgba(212,175,55,0.5)]"
            />
          </div>

          <div className="space-y-24">
            {LOCALIZATION.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative md:pl-16 text-left"
              >
                {/* Dot Marker on the Left */}
                <div className="absolute left-0 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-midnight-900 border-2 border-gold-500 z-10 shadow-[0_0_10px_rgba(212,175,55,0.5)] hidden md:block" />

                {/* Mobile Line Marker (Left) - Kept for mobile consistency */}
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-slate-800">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold-500" />
                </div>

                <div className="pl-8 md:pl-0">
                  <h3 className="text-2xl font-serif text-slate-100 mb-4">{point.title}</h3>
                  <p className="text-gold-400/80 font-medium mb-3 text-sm tracking-wide uppercase">{point.description}</p>
                  <p className="text-slate-400 leading-relaxed max-w-xl">{point.subtext}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-32 text-center relative"
        >
          <div className="absolute inset-0 bg-gold-500/5 blur-3xl rounded-full" />
          <div className="relative p-10 bg-midnight-900/50 backdrop-blur-sm rounded-2xl border border-gold-500/10 max-w-3xl mx-auto">
            <p className="font-serif text-2xl text-gold-100 italic">
              "We are not just translating words; we are translating contexts. A reunion of wisdoms."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocalizationOps;