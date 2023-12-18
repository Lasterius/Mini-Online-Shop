import { setSearch } from '../store/searchSlice';
import '../styles/search.scss';
import { useAppDispatch, useAppSelector } from '../types/hooks';

export const Search = () => {
  const search = useAppSelector((state) => state.search.query);
  const dispatch = useAppDispatch();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(event.currentTarget.value));
  };

  return (
    <div className='search__wrapper'>
      <label htmlFor='search'></label>
      <input
        placeholder='Search by card.title'
        name='search'
        id='search'
        type='text'
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};
