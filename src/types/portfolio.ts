export interface PersonalInfo {
  name: string;
  role: string;
  subRole: string;
  greeting: string;
  bio: string;
  availability: {
    freelance: boolean;
    locationStatus: string;
    notice: string;
  };
  portraitImage: {
    src: string;
    alt: string;
  };
  stats: {
    yearsExperience: string;
    projectsCompleted: string;
    happyClients: string;
  };
  tagline: string;
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  category: string;
  image: string;
  description?: string;
  tags?: string[];
  link?: string;
  featured?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
}

export interface WorkProcessStep {
  step: string;
  title: string;
  description: string;
  iconName: 'Search' | 'Lightbulb' | 'PenTool' | 'Code2' | 'Send' | 'Sparkles';
}

export interface ContactInfo {
  email: string;
  website: string;
  websiteUrl: string;
  phone: string;
  location: string;
  workTogetherHeading: string;
  workTogetherDescription: string;
  freelanceButtonText: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  projects: ProjectItem[];
  education: EducationItem[];
  skills: string[];
  process: WorkProcessStep[];
  quote: {
    text: string;
    author: string;
    subtext: string;
  };
  contact: ContactInfo;
}
