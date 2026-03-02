import React from 'react';
import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import MarketInsights from './components/MarketInsights';
import StrategyRoadmap from './components/StrategyRoadmap';
import TechFoundation from './components/TechFoundation';
import LocalizationOps from './components/LocalizationOps';

const App: React.FC = () => {
  return (
    <div className="bg-midnight-900 min-h-screen text-slate-200 selection:bg-gold-500/30 selection:text-gold-100">
      <Navbar />
      <main>
        <Hero />
        <MarketInsights />
        <StrategyRoadmap />
        <TechFoundation />
        <LocalizationOps />
      </main>
      
      <footer className="py-12 bg-black text-center border-t border-slate-900">
        <p className="font-serif text-slate-500 text-sm">
          © {new Date().getFullYear()} Strategic Vision Report. Confidential.
        </p>
      </footer>
    </div>
  );
};

export default App;