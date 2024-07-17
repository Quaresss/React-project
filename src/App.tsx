import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

import './scss/app.scss';

const Cart = React.lazy(() => import('./pages/Cart'));
const FullItem = React.lazy(() => import('./components/FullItem'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const LoginForm = React.lazy(() => import('./components/LoginForm'));
const RegisterForm = React.lazy(() => import('./components/RegisterForm'));
const OrderConfirm = React.lazy(() => import('./components/OrderConfirm'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route
          path="/confirm"
          element={
            <React.Suspense fallback={<div>Идёт загрузка...</div>}>
              <OrderConfirm />
            </React.Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <React.Suspense fallback={<div>Идёт загрузка...</div>}>
              <LoginForm />
            </React.Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <React.Suspense fallback={<div>Идёт загрузка...</div>}>
              <RegisterForm />
            </React.Suspense>
          }
        />
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
