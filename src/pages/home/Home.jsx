import { Feature } from '../../components/featured/Feature';
import { Header } from '../../components/header/Header';
import { Navbar } from '../../components/navbar/Navbar';
import './home.css';

export const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
          <Feature />
          <h1 className='homeTitle'>Browse by property type</h1>
        </div>
    </div>
  )
}
