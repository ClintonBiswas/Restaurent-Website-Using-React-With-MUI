import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import Pagenotfound from './pages/Pagenotfound'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/menu" element={<Menu />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<Pagenotfound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
