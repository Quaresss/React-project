import React from 'react';
import style from './LoginForm.module.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../store/actions/auth';
import { AppDispatch } from '@store/store';

const LoginForm = () => {
  const navigate = useNavigate();
  interface FormData {
    email: string;
    password: string;
  }

  const [formData, setFormData] = React.useState<FormData>({
    email: '',
    password: ''
  });

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post('https://847c80a9e47a2b52.mokky.dev/auth', formData)
      .then(() => {
        alert('Успех');
        navigate('/');
        dispatch(loginSuccess());
      })
      .catch(() => {
        alert('Ошибка');
      });
  };

  return (
    <div className={style.root}>
      <form className={style.form} onSubmit={handleSubmit}>
        <h2>Вход</h2>
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
        <button className="button pay-btn" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
