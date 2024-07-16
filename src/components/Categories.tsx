import React from 'react';

type State = {
  value: number;
  onChangeCategory: (index: number) => void;
};

const Categories: React.FC<State> = React.memo(
  ({ value, onChangeCategory }) => {
    const categories = [
      'Все',
      'Розы',
      'Хризантемы',
      'Авторские букеты',
      'Моно букеты',
      'Композиции'
    ];

    return (
      <div className="categories">
        <ul>
          {categories.map((categoryName, index) => (
            <li
              key={index}
              onClick={() => onChangeCategory(index)}
              className={value === index ? 'active' : ''}
            >
              {categoryName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

export default Categories;
