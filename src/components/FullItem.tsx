import axios from 'axios';
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Fullitem: React.FC = () => {
  const [item, setitem] = React.useState<{
    title: string;
    price: number;
    img: string;
  }>();
  const { id } = useParams();

  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchitem() {
      try {
        const { data } = await axios.get(
          'https://847c80a9e47a2b52.mokky.dev/items/' + id
        );
        setitem(data);
      } catch (err) {
        alert('Error fetching item');
        navigate('/');
      }
    }
    fetchitem();
  }, []);

  if (!item) {
    return 'Загрузка';
  }

  return (
    <div className="container">
      <img loading="lazy" src={item.img} />
      <h2>{item.title}</h2>
      <h4>{item.price} руб.</h4>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default Fullitem;
