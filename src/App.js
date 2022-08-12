import './App.css';
import FirstSection from './components/first-section/FirstSection';
import Navbar from './components/navbar/Navbar';
import ThirdSecond from './components/values/Values';
import SectionTwo from './components/aboutUs/AboutUs';
import Services from './components/services/Services';
import Gallery from './components/gallery/Gallery';
import ContactUs from './components/contactUs/ContactUs';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="koloz">
     <Navbar/>
     <FirstSection/>
     <SectionTwo />
     <ThirdSecond />
     <Services/>
     <Gallery />
     <ContactUs/>
     <Footer />
    </div>
  );
}

export default App;
