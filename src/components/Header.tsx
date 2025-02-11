import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../src/store/store';
import { logoutSuccess } from '../store/actions/auth';
import Search from './Search';
import useWindowWidth from '../hooks/useWindowWidth';

const Header: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { totalPrice, items } = useSelector((state: RootState) => state.cart);
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );

  const width = useWindowWidth();

  const handleLogout = () => {
    dispatch(logoutSuccess());
    alert('Вы вышли из аккаунта');
    navigate('/');
  };

  React.useEffect(() => {
    const json = JSON.stringify(items);
    localStorage.setItem('cart', json);
  }),
    [];

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img loading="lazy" width="80" src="/assets/logo.png" />
            <div>
              <h1>Petal Paradise</h1>
              <p>Интернет-магазин цветов</p>
            </div>
          </div>
        </Link>

        {!(
          pathname === '/cart' ||
          pathname === '/register' ||
          pathname === '/login'
        ) && <Search />}
        {!(
          pathname === '/cart' ||
          pathname === '/register' ||
          pathname === '/login'
        ) && (
          <Link to="/register">
            {width >= 800 ? (
              <button className="button header__cart">Регистрация</button>
            ) : (
              <svg
                className="button header__cart"
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 18L19 15M19 15L22 18M19 15V21M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M12 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </Link>
        )}

        {!(
          pathname === '/cart' ||
          pathname === '/register' ||
          pathname === '/login'
        ) &&
          (isLoggedIn ? (
            <button className="button pay-btn" onClick={handleLogout}>
              Выйти
            </button>
          ) : (
            <Link to="/login">
              {width >= 800 ? (
                <button className="button header__cart">Войти</button>
              ) : (
                <svg
                  className="button header__cart"
                  width="50px"
                  height="50px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 21L22 18M22 18L19 15M22 18H16M12 15.5H7.5C6.10444 15.5 5.40665 15.5 4.83886 15.6722C3.56045 16.06 2.56004 17.0605 2.17224 18.3389C2 18.9067 2 19.6044 2 21M14.5 7.5C14.5 9.98528 12.4853 12 10 12C7.51472 12 5.5 9.98528 5.5 7.5C5.5 5.01472 7.51472 3 10 3C12.4853 3 14.5 5.01472 14.5 7.5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </Link>
          ))}
        {pathname !== '/cart' && (
          <div className="header__cart">
            <Link to="/cart" className="button button--cart">
              <span>{totalPrice} ₽</span>
              <div className="button__delimiter"></div>

              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{totalCount}</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
