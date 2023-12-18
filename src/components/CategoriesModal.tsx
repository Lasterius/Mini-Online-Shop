import React, { useEffect } from 'react';
import {
  loadCardsByCategory,
  loadCategories,
  resetSelectedCategory,
  setSelectedCategory,
} from '../store/categorySlice';
import '../styles/categoriesModal.scss';
import { useAppDispatch, useAppSelector } from '../types/hooks';

export const CategoriesModal: React.FC<{
  closeHandler: () => void;
}> = ({ closeHandler }) => {
  const dispatch = useAppDispatch();
  const { categories, isOpen, selectedCategory } = useAppSelector(
    (state) => state.category
  );

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  const handleCategoryClick = (category: string) => {
    dispatch(setSelectedCategory(category));
  };

  const resetHandler = () => {
    dispatch(resetSelectedCategory());
  };

  const handleShowProducts = () => {
    if (selectedCategory) {
      dispatch(loadCardsByCategory(selectedCategory));
    }
  };

  return (
    <div
      className={
        isOpen === true ? 'category__wrapper active' : 'category__wrapper'
      }
    >
      <h4>Choose</h4>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className='category__buttons categories'
            onClick={() => {
              handleCategoryClick(category);
            }}
          >
            {category}
          </li>
        ))}
      </ul>
      <button className='category__button' onClick={closeHandler}>
        X
      </button>
      <div className='category__buttonsBlock'>
        <button
          className='category__buttons'
          onClick={() => {
            handleShowProducts();
            closeHandler();
          }}
        >
          Apply
        </button>
        <button
          className='category__buttons'
          onClick={() => {
            closeHandler();
            resetHandler();
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
