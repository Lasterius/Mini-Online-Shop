import { createPortal } from 'react-dom';
import { useAppSelector } from '../types/hooks';
import { Card } from './Card';

export const CartsByCategory = () => {
  const cards = useAppSelector((state) => state.category.cards);
  const search = useAppSelector((state) => state.search.query);

  const portalContainer = document.getElementById('portal-container');

  return portalContainer
    ? createPortal(
        <>
          {cards
            .filter((card) => {
              return search.toLowerCase() === ''
                ? card
                : card.title.toLowerCase().includes(search);
            })
            .map((card) => (
              <Card
                key={card.id}
                id={card.id}
                image={card.image}
                title={card.title}
                description={card.description}
                category={card.category}
                price={card.price}
                rating={card.rating}
              />
            ))}
        </>,
        portalContainer
      )
    : null;
};
