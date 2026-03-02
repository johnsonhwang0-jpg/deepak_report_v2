import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section 
      ref={ref}
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-center px-4 bg-midnight-900"
    >
      {/* Background Ambience & Image */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        {/* Sunrise Image - Reduced opacity */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1495616811223-4d98c6e9d869?q=80&w=2688&auto=format&fit=crop')" 
          }}
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-900/90 via-midnight-900/50 to-midnight-900" />
        
        {/* Enhanced Golden Ring Diffusion Effect */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           {/* Core Glow */}
           <motion.div 
             animate={{ opacity: [0.5, 0.8, 0.5], scale: [0.8, 1, 0.8] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="w-[300px] h-[300px] bg-gold-500/30 rounded-full blur-[80px] mix-blend-screen"
           />
           
           {/* Expanding Rings */}
           {[...Array(3)].map((_, i) => (
             <motion.div
               key={i}
               className="absolute border border-gold-500/30 rounded-full"
               initial={{ width: "100px", height: "100px", opacity: 0 }}
               animate={{ 
                 width: ["100px", "800px"], 
                 height: ["100px", "800px"],
                 opacity: [0.8, 0],
                 borderWidth: ["2px", "0px"]
               }}
               transition={{ 
                 duration: 4, 
                 repeat: Infinity, 
                 delay: i * 1.5,
                 ease: "easeOut" 
               }}
             />
           ))}

           {/* Diffusion Waves */}
           {[...Array(2)].map((_, i) => (
             <motion.div
               key={`wave-${i}`}
               className="absolute bg-gold-500/10 rounded-full blur-3xl"
               initial={{ width: "200px", height: "200px", opacity: 0 }}
               animate={{ 
                 width: ["200px", "1000px"], 
                 height: ["200px", "1000px"],
                 opacity: [0.4, 0]
               }}
               transition={{ 
                 duration: 6, 
                 repeat: Infinity, 
                 delay: i * 3,
                 ease: "easeOut" 
               }}
             />
           ))}
        </div>
      </motion.div>

      <div className="relative z-10 max-w-5xl pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-gold-400 tracking-[0.3em] uppercase text-xs md:text-sm mb-8 font-semibold bg-black/40 backdrop-blur-md px-6 py-2 rounded-full border border-gold-500/20 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            Strategic Market Entry
          </span>
        </motion.div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-slate-100 mb-8 leading-[0.9] drop-shadow-2xl tracking-tight">
          <motion.span 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            A Golden
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-100 to-gold-500 pb-2"
          >
            Opportunity
          </motion.span>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-sans text-slate-300 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed drop-shadow-lg font-light tracking-wide"
        >
          Bridging ancient wisdom with modern science to capture the 2.1 trillion USD wellness opportunity.
        </motion.p>
      </div>

      <motion.div 
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-slate-500">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-6 h-6 text-gold-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;