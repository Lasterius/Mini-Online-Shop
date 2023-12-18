import { closeModal, openModal } from '../store/categorySlice';
import '../styles/categories.scss';
import { useAppDispatch, useAppSelector } from '../types/hooks';
import { CartsByCategory } from './CardsByCategory';
import { CategoriesModal } from './CategoriesModal';

export const Categories = () => {
  const dispatch = useAppDispatch();
  const { selectedCategory } = useAppSelector((state) => state.category);

  const openModalHandler = () => {
    dispatch(openModal());
  };

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  return (
    <div>
      <button className='category__buttons' onClick={openModalHandler}>
        {selectedCategory ? selectedCategory.toUpperCase() : 'Categories'}
      </button>
      <CategoriesModal closeHandler={closeModalHandler} />
      <CartsByCategory />
    </div>
  );
};
