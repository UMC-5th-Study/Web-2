import { Link } from 'react-router-dom';
import Login from './LoginControl';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img
          style={{ width: '154px', height: '20px' }}
          src="//www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="로고"
        />
      </Link>
      <Link to="/Movie">영화</Link>
      <Link to="/TV">TV프로그램</Link>
      <Link to="/person">인물</Link>

      <>
        <Login />
      </>
    </header>
  );
};

export default Header;
