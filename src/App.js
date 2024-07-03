import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from './component/NavBar';
import Home from './component/Home';
import AboutUs from './component/AboutUs';
import SpecialServices from './component/SpecialServices';
import Footer from './component/Footer';
import WhatWeDo from './component/WhatWeDo';
import Work from './component/Work';
import CustomerReview from './component/CustomerReview';
import GetInTouch from './component/GetInTouch';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutUs />
      <SpecialServices />
      <WhatWeDo />
      <Work />
      <CustomerReview />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
