export enum ViewState {
  HOME = 'HOME',
  PROGRAMS = 'PROGRAMS',
  STORIES = 'STORIES',
  LEGAL_DOCS = 'LEGAL_DOCS',
  DONATE = 'DONATE',
}

export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  raised: number;
  goal: number;
}

export interface VeteranStory {
  id: string;
  name: string;
  rank: string;
  location: string;
  content: string;
  image: string;
}

export interface DonorInfo {
  name: string;
  amount: string;
  program: string;
  email?: string;
}