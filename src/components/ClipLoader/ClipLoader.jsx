import { ClipLoader } from 'react-spinners';
import styled from 'styled-components';

export const Loader = () => {
  return (
    <Container>
      <ClipLoader size='150px' color='green' />
    </Container>
  );
};

const Container = styled('div')`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
