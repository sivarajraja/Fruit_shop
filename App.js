import './App.css';
import Appbar from './component/Appbar';
import Filters from './component/Filters';
import Footer from './component/Footer';
import Items from './component/Items';
import SeasonSpecial from './component/SeasonSpecial';

function App() {
  return (
    <>
      <Appbar/>
      <Filters/>
      <Items/>
      <SeasonSpecial/>
      <Footer/>
    </>
  );
}

export default App;
