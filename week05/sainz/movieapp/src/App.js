import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import components from './components';
import Header from './components/Header';

import Celebrity from './pages/Celebrity';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Notfound from './pages/NotFound';
import TV from './pages/TV';

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/person" element={<Celebrity />} />
          <Route path="/Movie" element={<Movies />} />
          <Route path="/TV" element={<TV />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
