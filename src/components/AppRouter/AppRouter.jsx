import { Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/context';
import { Layout } from '../../hoc/Layout';
import { privateRoutes, publicRoures } from '../../pages/routes';

const AppRouter = () => {
  const { value: isAuth } = useContext(AuthContext);
  console.log('AppRouter isAuth:::::', isAuth);
  return (
    <Routes>
      {(isAuth && (
        <Route element={<Layout />}>
          <Route>{privateRoutes}</Route>
        </Route>
      )) || (
        <Route element={<Layout />}>
          <Route>{publicRoures}</Route>
        </Route>
      )}
    </Routes>
  );
};

export default AppRouter;
