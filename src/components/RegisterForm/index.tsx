import React from 'react';
import style from './RegisterForm.module.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm, FieldError } from 'react-hook-form';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    mode: 'onBlur'
  });
  const navigate = useNavigate();

  interface FormData {
    email: string;
    password: string;
  }
  const emailError: string | undefined = (errors.email as FieldError)?.message;
  const passwordError: string | undefined = (errors.password as FieldError)
    ?.message;

  const [formData, setFormData] = React.useState<FormData>({
    email: '',
    password: ''
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/register`, data);
      alert('Вы успешно зарегистрировались');
      navigate('/');
    } catch (error) {
      alert('Ошибка');
      reset();
    }
  };

  return (
    <div className={style.root}>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <h2>Регистрация</h2>
        <input
          type="text"
          placeholder="Введите email"
          {...register('email', {
            required: 'Это поле обязательно',
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Неправильный формат email адреса'
            },
            minLength: {
              value: 6,
              message: 'Минимум 6 символов'
            }
          })}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
        {emailError && <p>{emailError}</p>}
        <input
          type="password"
          placeholder="Введите пароль"
          {...register('password', {
            required: 'Это поле обязательно',
            minLength: {
              value: 6,
              message: 'Минимум 6 символов'
            }
          })}
          onChange={(event) =>
            setFormData({ ...formData, password: event.target.value })
          }
        />
        {passwordError && <p>{passwordError}</p>}
        <button className="button button--black" type="submit">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
