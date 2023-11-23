import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Header from "./components/Header";

// Pages
import Celebrity from "./pages/Celebrity";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import TV from "./pages/TV";
import VideoDetail from "./pages/VideoDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/person" element={<Celebrity />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/tv" element={<TV />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
