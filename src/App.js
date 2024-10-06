import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Navhero from './components/NavHero';
import About from './components/About'
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Technologies from './components/Technologies';

function App() {
  return (
<>
{/* <Nav></Nav>
<Hero></Hero> */}
<Navhero></Navhero>
<About></About>
<Services></Services>
<Technologies></Technologies>
<Projects></Projects>
<Footer></Footer>
</>
  );
}

export default App;
