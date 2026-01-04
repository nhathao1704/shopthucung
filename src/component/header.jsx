import "../styles/index.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="logo">logo</ul>
        <ul className="nav-links"> 
          <li>
            <Link to="/">Home</Link>
          </li>

          {/* Dropdown */}
          <li className="dropdown">
            <span className="dropdown-title">
              bé pet▾
            </span>

            <ul className="dropdown-menu">
              <li>
                <Link to="/products/dog">các em chó</Link>
              </li>
              <li>
                <Link to="/products/cat">các em mèo</Link>
              </li>
            </ul>
          </li>
          <li className ="dropdown">
            <span className="dropdown-title">
              sản phẩm ▾
            </span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/category/food">Thức ăn</Link>
              </li>
              <li>
                <Link to="/category/toys">Đồ chơi</Link>
              </li>
              <li>
                <Link to="/category/accessories">Phụ kiện</Link>
              </li>
            </ul>
         </li>
          <li>
            <Link to="/aboutus">About us</Link>
          </li>

          <li>
            <Link to="/contact">Liên hệ</Link>
          </li>
        </ul>
        <ul className ="sign-in">
            <li>
              <Link to="/login">Đăng nhập</Link>
            </li>

            <li>
                <Link to="/cart">Giỏ hàng</Link>
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
