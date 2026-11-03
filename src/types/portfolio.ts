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
    gpa: string;
    toefl: string;
    conference: string;
    yearsExperience?: string;
    projectsCompleted?: string;
    happyClients?: string;
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
  details?: string;
  thesis?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  type?: string;
}

export interface PublicationItem {
  title: string;
  authors: string;
  conference: string;
  location: string;
  date: string;
  affiliation: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  detail?: string;
  image?: string;
  credentialId?: string;
  category?: string;
  skills?: string[];
}

export interface WorkProcessStep {
  step: string;
  title: string;
  description: string;
  iconName: "Search" | "Lightbulb" | "PenTool" | "Code2" | "Send" | "Sparkles";
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
  githubUrl: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  projects: ProjectItem[];
  education: EducationItem[];
  experience: ExperienceItem[];
  publication: PublicationItem;
  certifications: CertificationItem[];
  skills: string[];
  process: WorkProcessStep[];
  quote: {
    text: string;
    author: string;
    subtext: string;
  };
  contact: ContactInfo;
}
