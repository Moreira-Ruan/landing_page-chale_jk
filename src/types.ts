export type Phase = 'phase1' | 'phase2';

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  date: string;
}

export interface AmenityItem {
  id: string;
  title: string;
  description: string;
  iconName: 'jacuzzi' | 'bed' | 'kitchen' | 'wifi' | 'fire' | 'pet' | 'compass';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  phase: 'both' | 'phase1' | 'phase2';
}

export interface Milestone {
  id: string;
  title: string;
  status: 'completed' | 'in-progress' | 'pending';
  percentage: number;
  description: string;
}

export interface Attraction {
  name: string;
  distance: string;
  description: string;
  type: 'historical' | 'nature' | 'practical';
}


