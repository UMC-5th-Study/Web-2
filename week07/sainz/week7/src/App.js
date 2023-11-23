import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import components from './components';
import Header from './components/Header';

import Celebrity from './pages/Celebrity';
import Home from './pages/Home';
import Movies from './pages/Movies';
import NotFound from './pages/NotFound';
import TV from './pages/TV';
import MovieDetail from './pages/MovieDetail';
import Loginpage from './pages/Loginpage';

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/person" element={<Celebrity />} />
          <Route path="/Movie" element={<Movies />} />
          <Route path="/movie/:title" element={<MovieDetail />} />
          <Route path="/TV" element={<TV />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/Loginpage" element={<Loginpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
