import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Projects from './Projects/Projects';
import Contacts from './Contacts/Contacts';
import ScrollToTop from './ScrollToTop/ScrollToTop';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="noise"></div>
        <div className="App">
          <ScrollToTop />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;


//TODO: fonts Header.css