export interface Topic {
  slug: string;
  name: string;
  description: string;
  icon?: string;
  order: number;
}

export const TOPICS: Topic[] = [
  {
    slug: 'networking',
    name: 'Networking',
    description: 'OSI Model, TCP/IP, Routing, and Network Protocols.',
    order: 1,
  },
  {
    slug: 'linux',
    name: 'Linux',
    description: 'File systems, permissions, bash scripting, and administration.',
    order: 2,
  },
  {
    slug: 'web-security',
    name: 'Web Security',
    description: 'OWASP Top 10, Authentication, Injection, and web vulnerabilities.',
    order: 3,
  },
  {
    slug: 'cryptography',
    name: 'Cryptography',
    description: 'Encryption, hashing, PKI, and secure communication.',
    order: 4,
  },
  {
    slug: 'pentesting',
    name: 'Pentesting',
    description: 'Reconnaissance, enumeration, exploitation, and reporting.',
    order: 5,
  },
  {
    slug: 'ctf',
    name: 'CTF',
    description: 'Capture The Flag writeups, challenges, and methodologies.',
    order: 6,
  },
  {
    slug: 'blue-team',
    name: 'Blue Team',
    description: 'Defensive security, SIEM, logging, and incident response.',
    order: 7,
  },
  {
    slug: 'other',
    name: 'Other',
    description: 'Miscellaneous topics, tools, and general knowledge.',
    order: 8,
  }
];

export const getTopicBySlug = (slug: string): Topic | undefined => {
  return TOPICS.find((t) => t.slug === slug);
};
