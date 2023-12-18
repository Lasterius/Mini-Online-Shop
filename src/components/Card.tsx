import { formatPrice } from '../helpers/formatPrice';
import { openModal } from '../store/modalSlice';
import '../styles/card.scss';
// import '../styles/cards.scss';
import { ICard } from '../types/card';
import { useAppDispatch } from '../types/hooks';

export const Card = (cardProps: ICard) => {
  const { id, image, title, description, category, price, rating } = cardProps;
  const dispatch = useAppDispatch();

  const openModalHandler = (card: ICard) => {
    dispatch(openModal(card));
  };

  return (
    <div
      className='card__wrapper'
      id={id.toString()}
      onClick={() => openModalHandler(cardProps)}
    >
      <img src={image} alt={title} className='card__img' />
      <div className='card__info'>
        <h4 className='card__title'>{title}</h4>
        <div className='card__description'>{description}</div>
        <div className='card__category'>{category}</div>
        <div className='card__price'>{formatPrice(price)}</div>
        <div className='card__rating'>
          <div className='card__count'>{rating.count} sold</div>
          <div className='card__rate'>
            <span className='rate__star'>✭</span>
            {rating.rate}
          </div>
        </div>
      </div>
    </div>
  );
};
