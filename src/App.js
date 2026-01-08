import logo from './logo.svg';
import './App.css';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Awards, SpecialMenu } from './container'
import { Navbar } from './components'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Awards />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
