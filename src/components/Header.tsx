import '../styles/header.scss';
import { Categories } from './Categories';
import { Filter } from './Filter';
import { Navigation } from './Navigation';
import { Search } from './Search';
import { ThemeSwitcher } from './ThemeSwitcher';

const Header = () => {
  const elements = [
    { id: 1, value: 'Main', href: '/Main' },
    { id: 2, value: 'About', href: '/About' },
    { id: 3, value: 'Contacts', href: '/Contacts' },
    { id: 4, value: 'Cart', href: '/Cart' },
  ];

  return (
    <header className='header'>
      <div className='topComponents'>
        <Search />
        <Navigation header={'Navigation'} items={elements} />
      </div>
      <div className='botComponents'>
        <Categories />
        <ThemeSwitcher />
        <Filter />
      </div>
    </header>
  );
};

export { Header };
