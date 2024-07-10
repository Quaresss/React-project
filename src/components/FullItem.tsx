import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const FullItem: React.FC = () => {
  const [item, setItem] = React.useState<{
    title: string;
    price: number;
  }>();
  const { id } = useParams();

  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchItem() {
      try {
        const { data } = await axios.get('https://847c80a9e47a2b52.mokky.dev/items/' + id);
        setItem(data);
      } catch (err) {
        alert('Error fetching item');
        navigate('/');
      }
    }
    fetchItem();
  }, []);

  console.log(item);

  if (!item) {
    return 'загрузка';
  }

  return (
    <div className="container">
      <h2>{item.title}</h2>
      <h4>{item.price}</h4>
    </div>
  );
};

export default FullItem;
