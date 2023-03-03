import { Route } from 'react-router-dom';
import { Eath } from './Eath';
import { Login } from './Login';
import { Menu } from './Menu';
import { Registration } from './Registration';

export const privateRoutes = [
  <Route path='/profile' key='/profile'>
    <Route index element={<div>Profile page</div>} key='/index' />
    <Route path='change/password' element={<div>Change password</div>} key='change/password' />
    <Route path='change/data' element={<div>Change data</div>} key='change/data' />
  </Route>,
  <Route path='/menu' element={<Menu />} key='/menu' />,
  <Route path='/eath' element={<Eath />} key='/eath' />,
  <Route path='/mars' element={<div>Mars page</div>} key='/mars' />,
  <Route path='/*' element={<Menu />} key='/*' />,
];

export const publicRoures = [
  <Route path='/login' element={<Login />} key='/login' />,
  <Route path='/*' element={<Login />} key='/*' />,
  <Route path='/registration' element={<Registration />} key='/registration' />,
];
