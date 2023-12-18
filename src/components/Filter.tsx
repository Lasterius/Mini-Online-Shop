import React, { useState } from 'react';
import {
  closeModal,
  openModal,
  resetModal,
  setPriceRangeFilter,
  setSortByPopularity,
  setSortByRating,
} from '../store/filterSlice';
import '../styles/filter.scss';
import { useAppDispatch, useAppSelector } from '../types/hooks';

export const Filter: React.FC = () => {
  const dispatch = useAppDispatch();
  const { priceRange, sortByPopularity, sortByRating, isOpen } = useAppSelector(
    (state) => state.filter
  );

  const [minPrice, setMinPrice] = useState<number>(priceRange.min);
  const [maxPrice, setMaxPrice] = useState<number>(priceRange.max);

  const handleApplyFilters = () => {
    dispatch(setPriceRangeFilter({ min: minPrice, max: maxPrice }));
    dispatch(setSortByPopularity(sortByPopularity));
    dispatch(setSortByRating(sortByRating));
  };

  const openModalHandler = () => {
    dispatch(openModal());
  };

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  const resetModalHandler = () => {
    dispatch(resetModal());
  };

  return (
    <div className='filter'>
      <button
        className='category__buttons'
        onClick={() => {
          openModalHandler();
        }}
      >
        Filters
      </button>
      <div
        className={
          isOpen === true ? 'filter__wrapper active' : 'filter__wrapper'
        }
      >
        <h4 className='filter__title'>Choose</h4>
        <div>
          <label htmlFor='minPrice'>Min Price:</label>
          <input
            type='number'
            id='minPrice'
            value={minPrice || ''}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor='maxPrice'>Max Price:</label>
          <input
            type='number'
            id='maxPrice'
            value={maxPrice || ''}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
        <div>
          <label>
            <input
              type='checkbox'
              id='sortPopularity'
              checked={sortByPopularity}
              onChange={() => dispatch(setSortByPopularity(!sortByPopularity))}
            />
            Sort by Popularity
          </label>
        </div>
        <div>
          <label>
            <input
              type='checkbox'
              id='sortRating'
              checked={sortByRating}
              onChange={() => dispatch(setSortByRating(!sortByRating))}
            />
            Sort by Rating
          </label>
        </div>
        <button className='filter__button' onClick={closeModalHandler}>
          X
        </button>
        <div className='filter__buttonsBlock'>
          <button
            className='category__buttons'
            onClick={() => {
              handleApplyFilters();
              closeModalHandler();
            }}
          >
            Apply
          </button>
          <button
            className='category__buttons'
            onClick={() => {
              closeModalHandler();
              resetModalHandler();
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
