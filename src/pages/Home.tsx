import React from 'react';

import type { RootState, AppDispatch } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';
import { fetchItems } from '../redux/slices/itemsSlice';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Card from '../components/Item';
import Skeleton from '../components/Item/Skeleton';
import NotFound from './NotFound';

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { categoryId, sort} = useSelector((state: RootState) => state.filter);
  const { items, status } = useSelector((state: RootState) => state.items);
  const { search } = useSelector((state: RootState) => state.search);
  const sortType = sort.sortProperty;

  const skeleton = [...new Array(10)].map((_, index) => <Skeleton key={index} />);
  const item = items.map((obj: ItemsProps) => <Card {...obj} key={obj.id} />);

  const onChangeCategory = React.useCallback((id: number) => {
    dispatch(setCategoryId(id));
  }, []);

  const getItems = () => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const searchItems = search ? `&title=*${search}` : '';

    dispatch(
      fetchItems({
        category,
        searchItems,
        sortType,
      }),
    );

    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    getItems();
  }, [categoryId, sortType, search]);

  type ItemsProps = {
    id: number;
    title: string;
    types: Array<number>;
    sizes: Array<number>;
    price: number;
    category: number;
    rating: number;
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={(id) => onChangeCategory(id)} />
        <Sort />
      </div>
      <h2 className="content__title">Все товары</h2>
      <div className="content__items">
        {status === 'error' ? <NotFound /> : status === 'loading' ? skeleton : item}
      </div>
      
    </div>
  );
};

export default Home;
