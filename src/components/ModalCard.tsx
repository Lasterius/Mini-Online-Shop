import { closeModal } from '../store/modalSlice';
import '../styles/modalCard.scss';
import { useAppDispatch, useAppSelector } from '../types/hooks';

export const ModalCard = () => {
  const dispatch = useAppDispatch();
  const { isOpen, selectedCard } = useAppSelector((state) => state.modal);

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  if (selectedCard) {
    return (
      <div
        className={isOpen === true ? 'modal__wrapper active' : 'modal__wrapper'}
        onClick={() => closeModalHandler()}
      >
        <div className='modal__content' onClick={(e) => e.stopPropagation()}>
          <button className='modal__button' onClick={() => closeModalHandler()}>
            X
          </button>
          <img
            src={selectedCard.image}
            alt={selectedCard.title}
            className='modal__img'
          />
          <div className='modal__info'>
            <h2 className='modal__title'>{selectedCard.title}</h2>
            <div className='modal__description'>{selectedCard.description}</div>
            <div className='modal__category'>
              Category: {selectedCard.category}
            </div>
            <div className='modal__price'>Price: CZK{selectedCard.price}</div>
            <div className='modal__rating'>
              {selectedCard.rating.count} sold ✭{selectedCard.rating.rate}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
};
