import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export const Layout = () => {
  return (
    <Background>
      <Outlet />
    </Background>
  );
};

const Background = styled('div')`
  height: 100vh;
  width: 100vw;
  background: white;
`;
