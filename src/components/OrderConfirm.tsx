import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirm = () => {
  return (
    <>
      <div className="cart cart--empty">
        <h2>Заказ успешно сформирован :)</h2>

        <img />
        <Link to="/" className="button button--black">
          <span>Вернуться на главную страницу</span>
        </Link>
      </div>
    </>
  );
};

export default OrderConfirm;
