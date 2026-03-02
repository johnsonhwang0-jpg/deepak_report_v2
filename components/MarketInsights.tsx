import React from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MARKET_DATA } from '../constants';
import { StarField } from './StarField';
import { Brain, Scroll, Sparkles } from 'lucide-react';

const CountUp: React.FC<{ value: number; suffix?: string; duration?: number }> = ({ value, suffix = '', duration = 2 }) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = React.useRef(false);
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView.current) {
          isInView.current = true;
          let start = 0;
          const end = value;
          const totalFrames = Math.round(duration * 60);
          let frame = 0;

          const counter = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const current = Math.round(start + (end - start) * progress);
            
            if (ref.current) {
              ref.current.textContent = `${current}${suffix}`;
            }

            if (frame === totalFrames) {
              clearInterval(counter);
            }
          }, 1000 / 60);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, suffix, duration]);

  return <span ref={ref} className="tabular-nums">0{suffix}</span>;
};

const MarketInsights: React.FC = () => {
  return (
    <section id="insights" className="bg-midnight-900 relative overflow-hidden">
      <StarField density={30} />
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-800/10 to-transparent pointer-events-none" />
      
      {/* Screen 1: Market Overview */}
      <div className="flex flex-col justify-center pt-20 pb-32 px-4 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Narrative */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 text-left"
            >
              <div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="font-serif text-5xl md:text-7xl text-slate-100 mb-6 leading-tight"
                >
                  Spiritual <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600 italic">Awakening</span>
                </motion.h2>
                <div className="w-20 h-1 bg-gold-500 rounded-full mb-8"></div>
              </div>

              <div className="space-y-6">
                <p className="text-xl text-slate-300 font-light leading-relaxed">
                  From material possession to spiritual growth. The Chinese health market is experiencing explosive growth, driven by a fundamental shift in consumer consciousness.
                </p>
                
                <ul className="space-y-4 mt-6">
                  <li className="flex items-start gap-4">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-gold-400 shrink-0" />
                    <span className="text-slate-400 text-lg">Shift from material possession to quality of life</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-gold-400 shrink-0" />
                    <span className="text-slate-400 text-lg">Focus on inner spiritual growth amidst economic cycles</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right: Data */}
            <div className="space-y-8">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-md p-8 rounded-3xl border border-slate-700/50 text-center"
              >
                <h3 className="text-7xl font-bold text-white mb-2 tracking-tighter">
                  <CountUp value={94} suffix="%" />
                </h3>
                <p className="text-gold-400 font-medium mb-2 uppercase tracking-widest text-sm">Health Priority</p>
                <p className="text-slate-400 text-sm">
                  of Chinese consumers rate health as "Most Important", significantly higher than the US (84%) and UK (79%).
                </p>
                <p className="text-xs text-slate-600 mt-4">McKinsey Future of Wellness 2025</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, rotateX: 10 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-slate-900/50 p-6 rounded-3xl border border-slate-800 shadow-2xl"
              >
                <div className="flex justify-between items-end mb-6 px-2">
                  <div>
                    <h4 className="text-slate-200 font-serif text-lg">Market Growth</h4>
                    <p className="text-slate-500 text-xs">2023 - 2030 Projection (USD Trillion)</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-gold-400">8-10%</span>
                    <p className="text-slate-500 text-xs">CAGR</p>
                  </div>
                </div>
                
                <div className="h-[200px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={MARKET_DATA}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#FBC02D" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#FBC02D" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} opacity={0.3} />
                      <XAxis 
                        dataKey="year" 
                        stroke="#64748b" 
                        tick={{fill: '#64748b', fontSize: 10}}
                        axisLine={false}
                        tickLine={false}
                        dy={10}
                      />
                      <YAxis 
                        stroke="#64748b" 
                        tick={{fill: '#64748b', fontSize: 10}}
                        axisLine={false}
                        tickLine={false}
                        domain={[0, 2.5]}
                        dx={-10}
                      />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#0f0f16', borderColor: '#334155', color: '#f1f5f9', borderRadius: '8px' }}
                        itemStyle={{ color: '#FBC02D' }}
                        cursor={{ stroke: '#FBC02D', strokeWidth: 1, strokeDasharray: '5 5' }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#FBC02D" 
                        strokeWidth={2}
                        fillOpacity={1} 
                        fill="url(#colorValue)" 
                        animationDuration={2000}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Screen 2: Science + Life Meaning */}
      <div className="pt-32 pb-20 px-4 relative z-10">
        {/* Diffuse Golden Glow Background - Enhanced */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[600px] bg-gold-500/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold-400/10 blur-[80px] rounded-full pointer-events-none mix-blend-screen" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-6xl text-slate-100 mb-6 leading-tight"
            >
              Science + <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600 italic">Life Meaning</span>
            </motion.h2>
            <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">
              Bridging the gap between the mystical and the measurable.
            </p>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Left: Eastern Wisdom */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 bg-gradient-to-b from-slate-800/80 to-slate-900/20 p-8 rounded-t-2xl border-t border-slate-700/50 relative group"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent opacity-50" />
              <div className="h-full flex flex-col justify-start pt-4">
                <h3 className="text-2xl font-serif text-slate-200 mb-4">Eastern Wisdom Roots</h3>
                <p className="text-slate-400 leading-relaxed font-light text-lg">
                  A return to identity. Seeking solace in the "Eastern Wisdom Community" (Buddhism, Taoism) to answer "Who are we?" when Western materialism falls short.
                </p>
              </div>
            </motion.div>

            {/* Center: The Synthesis (Deepak) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1 flex flex-col justify-center items-center text-center relative py-8 px-6"
            >
              {/* Connecting Lines (Desktop only) */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-12 h-px bg-gradient-to-r from-transparent to-gold-500/30 -translate-x-full" />
              <div className="hidden lg:block absolute top-1/2 right-0 w-12 h-px bg-gradient-to-l from-transparent to-gold-500/30 translate-x-full" />
              
              <h3 className="text-sm font-sans tracking-[0.2em] text-white uppercase mb-6 opacity-80">
                The Perfect Synthesis
              </h3>
              
              <div className="space-y-6">
                <p className="text-2xl md:text-3xl font-serif text-gold-400 leading-tight">
                  "Deepak is the Scientific Sage China has been waiting for."
                </p>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
                  A world-renowned pioneer who speaks the language of both modern science and ancient wisdom.
                </p>
              </div>
            </motion.div>

            {/* Right: Scientific Validation */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-1 bg-gradient-to-b from-slate-800/80 to-slate-900/20 p-8 rounded-t-2xl border-t border-slate-700/50 relative group"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-50" />
              <div className="h-full flex flex-col justify-start pt-4">
                <h3 className="text-2xl font-serif text-slate-200 mb-4">Scientific Validation</h3>
                <p className="text-slate-400 leading-relaxed font-light text-lg">
                  A craving for evidence. Decades of scientific education demand that wisdom be validated by neuroscience and data—not just faith.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketInsights;