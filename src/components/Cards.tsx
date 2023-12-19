import axios from 'axios';
import { useEffect } from 'react';
import { setCards } from '../store/cardsSlice';
import '../styles/cards.scss';
import { useAppDispatch, useAppSelector } from '../types/hooks';
import { Card } from './Card';

export const Cards = () => {
  const cards = useAppSelector((state) => state.cards.cards);
  const search = useAppSelector((state) => state.search.query);
  const dispatch = useAppDispatch();

  const cardLimit = () => (window.innerWidth > 1023 ? 12 : 10);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/', {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          params: {
            limit: cardLimit(),
          },
        });
        dispatch(setCards(response.data));
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.response?.data);
        } else if (error instanceof Error) {
          console.log(`Error: ${error.message}`);
        }
      }
    };

    fetchCards();
  }, [dispatch]);

  return (
    <>
      <div className='cards__wrapper' id='portal-container'>
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
      </div>
    </>
  );
};
