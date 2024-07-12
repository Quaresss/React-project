import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Fullitem: React.FC = () => {
  const [item, setitem] = React.useState<{
    title: string;
    price: number;
  }>();
  const { id } = useParams();

  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchitem() {
      try {
        const { data } = await axios.get('https://847c80a9e47a2b52.mokky.dev/items/' + id);
        setitem(data);
      } catch (err) {
        alert('Error fetching item');
        navigate('/');
      }
    }
    fetchitem();
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

export default Fullitem;
