import { ICard } from './card';

export interface IModalState {
  isOpen: boolean;
  selectedCard: ICard | null;
}
