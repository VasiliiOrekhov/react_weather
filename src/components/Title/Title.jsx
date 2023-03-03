import styled from 'styled-components';

export const Title = ({ children }) => {
  return <TitleForm>{children}</TitleForm>;
};

const TitleForm = styled('h3')`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  color: #1e1e1e;
  margin: 0 auto 40px;
  padding-top: 50px;
`;
