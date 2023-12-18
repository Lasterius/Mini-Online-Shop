import { Cards } from './components/Cards';
import { Header } from './components/Header';
import { ModalCard } from './components/ModalCard';
import './styles/app.scss';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Cards />
      <ModalCard />
    </div>
  );
};

export default App;
