import { LucideIcon } from 'lucide-react';

export interface MarketStat {
  year: string;
  value: number;
  label: string;
}

export interface StrategyStage {
  id: number;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  target: string;
  concept: string;
  coreGoal: string;
  detailedPersona: string;
  contentExamples: string[];
  color: string;
}

export interface Capability {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface LocalizationPoint {
  title: string;
  description: string;
  subtext: string;
}