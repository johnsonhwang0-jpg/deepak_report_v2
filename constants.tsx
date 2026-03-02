import { 
  Brain, 
  Users, 
  Sparkles, 
  Wrench, 
  Video, 
  Palette, 
  Activity,
  Globe,
  ShieldCheck
} from 'lucide-react';
import { StrategyStage, Capability, LocalizationPoint } from './types';

export const MARKET_DATA = [
  { year: '2023', value: 1.1, label: '$1.1 Trillion' },
  { year: '2025', value: 1.35, label: 'Forecast' },
  { year: '2027', value: 1.65, label: 'Forecast' },
  { year: '2030', value: 2.1, label: '$2.1 Trillion' },
];

export const STRATEGY_STAGES: StrategyStage[] = [
  {
    id: 1,
    title: "Scientific Utility",
    subtitle: "Trust",
    icon: Brain,
    target: "High-Pressure Urban Professionals (30-45)",
    coreGoal: "Rapidly establish Deepak as a 'Scientific Sage'. Build trust through verifiable, science-backed tools for stress, sleep, and burnout. Address the '996' burnout culture with systematic energy management.",
    detailedPersona: "Primary focus on Tier 1-2 city professionals (30-45yo) facing the '996' burnout culture. They are high-functioning but internally depleted, struggling with insomnia, anxiety, and chronic fatigue. They are skeptical of vague 'New Age' spirituality and demand efficient, data-driven solutions. They view wellness as a performance optimization tool and need immediate, tangible results to build trust.",
    concept: "Deploy highly structured, 'plug-and-play' digital toolkits designed for specific pain points like insomnia and acute anxiety, acting as a mental 'first-aid kit'.",
    contentExamples: [
      "The Science of Breath (4-7-8 Techniques)",
      "Neuroplasticity & Focus Training",
      "Body Wisdom: Somatic Stress Release",
      "Scientific Decoding of Ancient Wisdom"
    ],
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: 2,
    title: "Deep Community",
    subtitle: "Connect",
    icon: Users,
    target: "Growth-Oriented Women (30-55)",
    coreGoal: "Shift from 'using tools' to 'spiritual identity'. Create a high-stickiness community for those seeking 'Who am I?' beyond social roles. A sanctuary for inner strength and relationship alchemy.",
    detailedPersona: "Targeting growth-oriented women (30-55yo) in Tier 3-4 cities, often part of the 'sandwich generation'. While financially stable, they feel trapped in roles as mothers, wives, or employees. They yearn for self-discovery, emotional nourishment, and a supportive 'sisterhood' where they can be vulnerable. They seek a guide who understands their emotional landscape and offers a path to inner sovereignty.",
    concept: "Establish a safe, sincere 'high-energy field' for deep connection, transforming the relationship from 'expert-user' to 'guide-traveler' through shared vulnerability.",
    contentExamples: [
      "Beyond Roles: Identity & Awareness",
      "Alchemy of Relationships",
      "Life Purpose & Dharma Workshops",
      "Heart Wisdom to Abundance"
    ],
    color: "from-purple-500 to-pink-400"
  },
  {
    id: 3,
    title: "Eastern Lifestyle",
    subtitle: "Lead",
    icon: Sparkles,
    target: "Gen Z Pioneers & High-Net-Worth Investors",
    coreGoal: "Define a new cultural standard. From content provider to cultural leader. Blending 'Modern Spirituality' for the youth with 'Scientific Longevity' for the elite.",
    detailedPersona: "A dual-pronged approach: 1) Gen Z 'Conscious Pioneers' (18-30) who reject traditional dogma but seek 'cool', shareable, and aesthetic spirituality as a lifestyle statement. 2) High-Net-Worth 'Deep Investors' (35-50+) interested in biohacking, longevity, and exclusive spiritual circles. Both groups value authenticity, high aesthetics, and the fusion of ancient wisdom with modern science.",
    concept: "Elevate the brand into a cultural icon by blending art, technology, and exclusive experiences to create a 'Wisdom Lifestyle' that is aspirational and scientifically grounded.",
    contentExamples: [
      "Modern Spirituality (Sound Healing, Art)",
      "Scientific Longevity (Epigenetics, Summits)",
      "Sustainable Living & Inner Ecology",
      "Exclusive 'Peak Health' White Papers"
    ],
    color: "from-amber-400 to-yellow-600"
  }
];

export const CAPABILITIES: Capability[] = [
  {
    title: "Scientific Utility & Productization",
    description: "Standardized 'Digital Toolkits' (4-6 breathing, So-Hum meditation) acting as a mental 'first-aid kit' for immediate stress relief.",
    icon: Wrench
  },
  {
    title: "High-End Cinematic Storytelling",
    description: "Immersive 'Sage's Narrative' using cinematic montage and visual metaphors to build deep subconscious trust beyond simple lectures.",
    icon: Video
  },
  {
    title: "Artistic & Interactive Experiences",
    description: "Poetic, metaphorical interactions—like breath-synced generative art—that bypass rational debate to touch intuition directly.",
    icon: Palette
  },
  {
    title: "Long-Term Operation System",
    description: "A data-driven platform for courses and community that transforms users from 'visitors' to 'residents' through intelligent connection.",
    icon: Activity
  }
];

export const LOCALIZATION: LocalizationPoint[] = [
  {
    title: "Compliance as Foundation",
    description: "Navigating the regulatory landscape with precision.",
    subtext: "Establishing local review mechanisms to ensure spiritual exploration remains within safe, compliant, and respectful boundaries."
  },
  {
    title: "Cultural Transcreation",
    description: "Resonating with the Chinese soul.",
    subtext: "Bridging Deepak's holistic principles with Daoist 'flow', Confucian 'self-cultivation', and TCM balance. It is not just translation; it is a reunion of wisdoms."
  }
];