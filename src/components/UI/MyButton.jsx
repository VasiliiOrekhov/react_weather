import styled from 'styled-components';

export const MyButton = ({ children }) => {
  return <Button>{children}</Button>;
};

const Button = styled('button')`
  height: 37px;
  width: 280px;
  background: #3369f3;
  border-radius: 8px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 13px;
  text-align: center;
  color: #ffffff;
`;
