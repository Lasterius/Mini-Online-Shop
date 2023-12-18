import { useEffect } from 'react';
import { actions } from '../store/themeSlice';
import '../styles/themeswitcher.scss';
import { useAppDispatch, useAppSelector } from '../types/hooks';

const ThemeSwitcher = () => {
  const theme = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleChange = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    dispatch(actions.setTheme(next));
  };

  return (
    <div className='switch'>
      <input
        id='switch'
        className='switch__input'
        name='switch'
        type='checkbox'
        onClick={handleChange}
        checked={theme === 'dark'}
        readOnly
      />
      <label className='switch__label' htmlFor='switch'></label>
    </div>
  );
};

export { ThemeSwitcher };
