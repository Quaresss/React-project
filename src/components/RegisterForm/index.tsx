import React from 'react';
import style from './RegisterForm.module.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate();

  interface FormData {
    email: string;
    password: string;
  }

  const [formData, setFormData] = React.useState<FormData>({
    email: '',
    password: ''
  });

  const onSubmit = () => {
    axios
      .post('https://847c80a9e47a2b52.mokky.dev/register', formData)
      .then((result) => {
        alert('Успех');
        navigate('/');
      })
      .catch((error) => {
        alert('Ошибка');
      });
  };

  return (
    <div className={style.root}>
      <form className={style.form} onSubmit={onSubmit}>
        <h2>Регистрация</h2>
        <input
          type="email"
          placeholder="Введите Email"
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
        <input
          type="password"
          placeholder="Введите пароль"
          onChange={(event) =>
            setFormData({ ...formData, password: event.target.value })
          }
        />
        <button className="button button--black" type="submit">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
