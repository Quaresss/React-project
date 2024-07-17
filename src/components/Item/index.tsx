import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CartItemType } from '@store/types/cart';
import { addItem } from '@store/actions/cart';
import type { RootState } from '../../store/store';
import { Link } from 'react-router-dom';

type itemProps = {
  id: number;
  img: string;
  title: string;
  types: Array<number>;
  price: number;
};

const item: React.FC<itemProps> = ({ id, img, title, price, types }) => {
  const [activeTypes, setActiveTypes] = React.useState<number>(0);

  const type = ['Самовывоз', 'Доставка'];

  const cartitem = useSelector((state: RootState) =>
    state.cart.items.find((obj: CartItemType) => {
      obj.id === id;
    })
  );

  const dispatch = useDispatch();

  const addedCount = cartitem ? cartitem.count : 0;

  const onClickAdd = () => {
    const item: CartItemType = {
      id,
      img,
      title,
      price,
      type: type[activeTypes],

      count: 0
    };
    dispatch(addItem(item));
  };

  return (
    <div className="item-block-wrapper">
      <div className="item-block">
        <Link to={`/items/${id}`}>
          <img loading="lazy" className="item-block__image" src={img} />
        </Link>

        <h4 className="item-block__title">{title}</h4>
        <div className="item-block__selector">
          <ul>
            {types.map((_, i) => (
              <li
                key={i}
                onClick={() => {
                  setActiveTypes(i);
                }}
                className={activeTypes === i ? 'active' : ''}
              >
                {type[i]}
              </li>
            ))}
          </ul>
        </div>
        <div className="item-block__bottom">
          <div className="item-block__price">{price} руб.</div>
          <div
            onClick={onClickAdd}
            className="button button--outline button--add"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default item;
