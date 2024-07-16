import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

import './scss/app.scss';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

const Cart = React.lazy(() => import('./pages/Cart'));
const FullItem = React.lazy(() => import('./components/FullItem'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />

        <Route
          path="cart"
          element={
            <React.Suspense fallback={<div>Идёт загрузка...</div>}>
              <Cart />
            </React.Suspense>
          }
        />
        <Route
          path="items/:id"
          element={
            <React.Suspense fallback={<div>Идёт загрузка...</div>}>
              <FullItem />
            </React.Suspense>
          }
        />
        <Route
          path="*"
          element={
            <React.Suspense fallback={<div>Идёт загрузка...</div>}>
              <NotFound />
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
