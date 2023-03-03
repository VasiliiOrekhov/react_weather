import { Title } from '../components/Title/Title';
import styled from 'styled-components';

export const Eath = () => {
  return (
    <Container>
      <Title> погода в СПб</Title>
    </Container>
  );
};

const Container = styled('div')`
  width: 600px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.14);
  border-radius: 12px;
`;
