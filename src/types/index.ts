export interface Project {
  id: string;
  title: string;
  description: string;
  shortOutcome: string;
  category: string;
  tags: string[];
  links: {
    live?: string;
    github?: string;
    caseStudy?: string;
  };
  details: {
    overview: string;
    problem: string;
    solution: string;
    keyFeatures: string[];
    techStack: string[];
    architecture: string;
    securityPerformance: string;
    screenshots: string[];
  };
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Skill {
  category: string;
  skills: string[];
}

export interface Credential {
  company: string;
  role?: string;
  description: string;
  tech?: string;
}
