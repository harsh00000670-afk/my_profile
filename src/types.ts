export interface Project {
  id: string;
  indexNumber: string;
  title: string;
  tagline: string;
  description: string;
  liveUrl: string;
  displayUrl: string;
  platform: 'Vercel' | 'Netlify';
  category: string;
  status: 'Live & Operational' | 'Active Production';
  techStack: string[];
  keyHighlights: string[];
  metrics: { label: string; value: string }[];
  overview: string;
  hasDeepDive?: boolean;
  deepDiveSlug?: string;
}

export interface DeveloperProfile {
  name: string;
  role: string;
  education: string;
  philosophy: string;
  email: string;
  liveSitesCount: number;
  availableForHire: boolean;
}
