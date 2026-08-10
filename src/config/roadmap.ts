export type RoadmapStatus = 'planned' | 'learning' | 'completed';

export interface RoadmapItem {
  title: string;
  status: RoadmapStatus;
}

export interface RoadmapSection {
  title: string;
  items: RoadmapItem[];
}

export const ROADMAP: RoadmapSection[] = [
  {
    title: 'FOUNDATIONS',
    items: [
      { title: 'Networking', status: 'completed' },
      { title: 'Linux', status: 'completed' },
      { title: 'Operating Systems', status: 'learning' },
      { title: 'Basic Security', status: 'planned' },
    ],
  },
  {
    title: 'WEB SECURITY',
    items: [
      { title: 'HTTP', status: 'completed' },
      { title: 'Authentication', status: 'learning' },
      { title: 'SQL Injection', status: 'learning' },
      { title: 'XSS', status: 'planned' },
      { title: 'CSRF', status: 'planned' },
      { title: 'SSRF', status: 'planned' },
    ],
  },
  {
    title: 'OFFENSIVE SECURITY',
    items: [
      { title: 'Recon', status: 'planned' },
      { title: 'Enumeration', status: 'planned' },
      { title: 'Web Pentesting', status: 'planned' },
      { title: 'Privilege Escalation', status: 'planned' },
      { title: 'CTF', status: 'planned' },
    ],
  },
  {
    title: 'DEFENSIVE SECURITY',
    items: [
      { title: 'Logging', status: 'planned' },
      { title: 'SIEM', status: 'planned' },
      { title: 'Detection', status: 'planned' },
      { title: 'Incident Response', status: 'planned' },
    ],
  }
];
