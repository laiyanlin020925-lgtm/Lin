export interface Project {
  id: string;
  title: string;
  role: string;
  date: string;
  description: string;
  features: string[];
  tags: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  date: string;
  description: string;
  highlights: string[];
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  major: string;
  date: string;
  description: string;
  highlights: string[];
}
