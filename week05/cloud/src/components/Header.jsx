import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <img
            style={{ width: 154, height: 20 }}
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="로고"
          />
        </Link>

        <ul>
          <li>
            <Link to="/movie">영화</Link>
          </li>

          <li>
            <Link to="/tv">TV 프로그램</Link>
          </li>

          <li>
            <Link to="/person">인물</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
