import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { STRATEGY_STAGES } from '../constants';
import { CheckCircle2, Target, User, Lightbulb, ChevronDown, ArrowRight } from 'lucide-react';
import { StarField } from './StarField';

const FlowingArrowPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
      {/* Multiple layers of flowing arrows for a continuous, organic feel */}
      {[0, 1.5, 3].map((delay, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 -translate-y-1/2 h-[200%] w-64 bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"
          style={{
            clipPath: 'polygon(20% 0%, 100% 50%, 20% 100%, 0% 50%)', // Chevron shape
            filter: 'blur(20px)', // Reduced blur for better visibility
          }}
          initial={{ left: '-100%', opacity: 0 }}
          animate={{ left: '200%', opacity: [0, 0.8, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

const StrategyStageItem: React.FC<{ stage: typeof STRATEGY_STAGES[0], index: number }> = ({ stage, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      id={`strategy-stage-${index}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="relative group"
    >
      {/* Connecting Line (Desktop) */}
      {index !== STRATEGY_STAGES.length - 1 && (
        <div className="absolute left-1/2 bottom-0 w-px h-24 bg-gradient-to-b from-slate-700/50 to-transparent translate-y-full hidden md:block" />
      )}

      {/* Main Container - Editorial Style */}
      <div 
        className={`
          relative overflow-hidden transition-all duration-700 ease-out
          ${isOpen ? 'bg-slate-900/40 pb-12' : 'bg-transparent hover:bg-slate-900/20'}
          border-t border-white/10
        `}
      >
        {/* Background Glow (Active State) */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none transition-opacity duration-700 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />

        <div className="relative z-10 px-4 md:px-12 py-12">
          {/* Header Section (Always Visible) */}
          <div 
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-8">
              {/* Left: Number & Title */}
              <div className="flex items-baseline gap-6">
                <span className="text-5xl md:text-7xl font-serif font-bold text-slate-800/50 group-hover:text-gold-500/10 transition-colors duration-500 select-none">
                  0{stage.id}
                </span>
                <div className="pt-3">
                  <div className="text-gold-500/80 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                    {stage.subtitle}
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl text-slate-100 group-hover:text-gold-100 transition-colors duration-300">
                    {stage.title}
                  </h3>
                </div>
              </div>

              {/* Right: Toggle Icon */}
              <div className="relative">
                {/* Pulse Animation Hint - Diffuse Light */}
                {!isOpen && (
                  <>
                    {/* Core Glow */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: [0, 0.6, 0], scale: [0.8, 1.5, 2] }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 2.5, repeat: 2, ease: "easeOut", delay: 0.2 }}
                      className="absolute inset-0 rounded-full bg-gold-500/30 blur-md pointer-events-none"
                    />
                    {/* Outer Diffuse Halo */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: [0, 0.3, 0], scale: [1, 2, 3] }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 2.5, repeat: 2, ease: "easeOut", delay: 0.4 }}
                      className="absolute inset-0 rounded-full bg-gold-400/20 blur-xl pointer-events-none"
                    />
                  </>
                )}

                <div className={`
                  w-10 h-10 rounded-full border border-white/10 flex items-center justify-center
                  text-gold-400 transition-all duration-500 relative z-10
                  ${isOpen ? 'rotate-45 bg-gold-500/10 border-gold-500/30' : 'group-hover:border-gold-500/50 group-hover:scale-110'}
                `}>
                  <div className="relative w-3 h-3">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-current -translate-y-1/2" />
                    <div className="absolute top-0 left-1/2 w-0.5 h-full bg-current -translate-x-1/2" />
                  </div>
                </div>
              </div>
            </div>

            {/* Core Goal (The Hook) */}
            <div className="max-w-4xl">
              <p className="font-playfair italic text-lg md:text-2xl text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300 normal-case">
                <span className="text-gold-500 not-italic font-serif mr-2">Goal:</span>
                {stage.coreGoal}
              </p>
            </div>
          </div>

          {/* Expanded Content */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-12 mt-10 border-t border-white/5 grid grid-cols-1 lg:grid-cols-2 gap-12">
                  
                  {/* Column 1: Persona */}
                  <div>
                    <h4 className="text-xs font-bold tracking-widest text-slate-600 uppercase mb-4">Target Persona</h4>
                    <p className="text-slate-400 leading-relaxed font-light text-base">
                      {stage.detailedPersona}
                    </p>
                  </div>

                  {/* Column 2: Content Strategy */}
                  <div>
                    <h4 className="text-xs font-bold tracking-widest text-slate-600 uppercase mb-4">Content Strategy</h4>
                    
                    {/* Strategy Concept */}
                    <p className="text-slate-300 leading-relaxed font-light text-base mb-6">
                      {stage.concept}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-3">
                      {stage.contentExamples.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-400 font-light text-sm">
                          <span className="w-1 h-1 rounded-full bg-slate-600 mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const StrategyRoadmap: React.FC = () => {
  const handleCardClick = (index: number) => {
    const element = document.getElementById(`strategy-stage-${index}`);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="strategy" className="py-32 px-4 bg-midnight-900 relative overflow-hidden">
       <StarField density={40} />
       {/* Background textural element */}
       <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-800/10 to-transparent pointer-events-none" />
       
       {/* Diffuse Golden Glow Background */}
       <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-gold-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-slate-100 mb-6"
          >
            GTM Strategy: <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600 italic">The 3-Stage Ascent</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg font-light"
          >
            From functional tools to a spiritual lifestyle. A roadmap designed to build trust, connection, and authority.
          </motion.p>
        </div>

        {/* 3 Cards Overview - Navigation Anchors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {[
            { id: '01', title: 'Trust', subtitle: 'Scientific Utility', desc: 'Establish authority through science-backed tools.' },
            { id: '02', title: 'Connect', subtitle: 'Deep Community', desc: 'Foster vulnerability and peer support.' },
            { id: '03', title: 'Lead', subtitle: 'Eastern Lifestyle', desc: 'Integrate wisdom into daily habits.' }
          ].map((card, index) => (
            <motion.div 
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => handleCardClick(index)}
              className="relative cursor-pointer h-[320px] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm group transition-all duration-500 hover:border-gold-500/50 hover:shadow-[0_0_50px_-12px_rgba(212,175,55,0.25)]"
            >
              {/* Flowing Arrow Pattern */}
              <FlowingArrowPattern />

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Watermark Number */}
              <div className="absolute -right-4 -top-8 text-[10rem] font-serif font-bold text-slate-800/50 group-hover:text-gold-500/5 transition-colors duration-500 select-none pointer-events-none leading-none">
                {card.id}
              </div>

              <div className="relative z-10 flex flex-col h-full justify-end p-8">
                <div className="mb-auto pt-4">
                   <div className="w-12 h-1 bg-gold-500/30 group-hover:bg-gold-500 transition-colors duration-300 rounded-full mb-6" />
                </div>

                {/* Subtitle */}
                <p className="text-gold-500/80 text-xs font-bold uppercase tracking-[0.2em] mb-3 group-hover:text-gold-400 transition-colors">
                  {card.subtitle}
                </p>
                
                {/* Main Title */}
                <h3 className="text-5xl font-serif text-slate-100 mb-4 group-hover:text-gold-300 transition-colors duration-300 tracking-tight">
                  {card.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed font-light group-hover:text-slate-200 transition-colors duration-300 max-w-[90%]">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Stages - Sequential Layout */}
        <div className="space-y-24">
          {STRATEGY_STAGES.map((stage, index) => (
            <StrategyStageItem key={stage.id} stage={stage} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategyRoadmap;