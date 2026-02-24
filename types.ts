import { LucideIcon } from 'lucide-react';

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  stars: number;
}

export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Recipe {
  id: number;
  title: string;
  imageUrl: string;
}

export interface Deliverable {
  id: number;
  text: string;
}
