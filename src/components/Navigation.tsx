import { useEffect, useState } from 'react';
import { actions } from '../store/burgerSlice';
import '../styles/navigation.scss';
import { useAppDispatch, useAppSelector } from '../types/hooks';
import { INavProps } from '../types/navigation';

export const Navigation = ({ header, items }: INavProps) => {
  const isActive = useAppSelector((state) => state.burger.active);
  const dispatch = useAppDispatch();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event: Event) => {
      setWidth((event.currentTarget as Window).innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const burgerFormat = isActive ? 'navbar active' : 'navbar';
  const whichFormat = width > 1023 ? 'navbar-desktop' : burgerFormat;
  const whichContent =
    width > 1023 ? 'navbar__content-desktop' : 'navbar__content';

  return (
    <div className='nav__wrapper'>
      <div className='burger__wrapper'>
        <div
          className='burger__button'
          onClick={() => dispatch(actions.switchActive())}
        >
          <span />
        </div>
      </div>
      <nav className={whichFormat}>
        <div className={whichContent}>
          <div className='navbar__header'>{header}</div>
          <ul className='navbar__list'>
            {items.map((item) => (
              <li key={item.id}>
                <a href={item.href}>{item.value}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
