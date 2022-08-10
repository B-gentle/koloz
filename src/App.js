import './App.css';
import FirstSection from './components/first-section/FirstSection';
import Navbar from './components/navbar/Navbar';
import SectionTwo from './components/section-two/SectionTwo';

function App() {
  return (
    <div className="koloz">
     <Navbar/>
     <FirstSection/>
     <SectionTwo />
    </div>
  );
}

export default App;
