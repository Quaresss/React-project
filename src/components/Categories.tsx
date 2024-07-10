import React from 'react';

type State = {
  value: number;
  onChangeCategory: (index: number) => void;
};

const Categories: React.FC<State> = React.memo(({ value, onChangeCategory }) => {
  const categories = [
    'Все',
    'Категория №1',
    'Категория №2',
    'Категория №3',
    'Категория №4',
    'Категория №5',
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li key={index} onClick={() => onChangeCategory(index)} className={value === index ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
