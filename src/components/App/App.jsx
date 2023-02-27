import { useState, Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../../pages/Login';
import { Layout } from './hoc/Layout';
import { PrivateRoute } from './hoc/PrivateRoute';
import { Container, Text } from './styles';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Общие роуты */}
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<div>Registration page</div>} />
        {/* Приватные роуты */}
        <Route element={<PrivateRoute />}>
          <Route path='/profile'>
            <Route index element={<div>Profile page</div>} />
            <Route path='change/password' element={<div>Change password</div>} />
            <Route path='change/data' element={<div>Change data</div>} />
          </Route>
          <Route path='/menu' element={<div>Menu</div>} />
          <Route path='/eath' element={<div>Eath page</div>} />
          <Route path='/mars' element={<div>Mars page</div>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
