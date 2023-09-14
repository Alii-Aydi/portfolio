import { About, Footer, Header, Skills, Testimonials, Work } from './containers'
import { Navbar } from './components'
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Work></Work>
      <Skills></Skills>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
}

export default App;
