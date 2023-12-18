import { ICard } from './card';

export interface ICategoryState {
  categories: string[];
  selectedCategory: string | null;
  cards: ICard[];
  isOpen: boolean;
}
