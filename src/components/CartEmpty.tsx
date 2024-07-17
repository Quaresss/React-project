import React from 'react';
import { Link } from 'react-router-dom';

const CartEmpty = () => {
  return (
    <>
      <div className="cart cart--empty">
        <h2>Корзина пустая</h2>
        <p>
          Вероятней всего, вы не выбрали нужный товар.
          <br />
          Для того, чтобы заказать товар, перейди на главную страницу.
        </p>
        <img />
        <Link to="/" className="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;
