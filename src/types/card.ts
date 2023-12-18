export interface ICard {
  key: number;
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  onClick?: () => void;
}

export interface ICardsState {
  cards: ICard[];
}
