import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Header from "./Components/Header";

// Pages
import Celebrity from "./pages/Celebrity";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import TV from "./pages/TV";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/person" element={<Celebrity />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/tv" element={<TV />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;