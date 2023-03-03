import styled from 'styled-components';
import { Link as DefaultLink } from 'react-router-dom';

export const Link = ({ children, to }) => {
  return <FormLink to={to}>{children}</FormLink>;
};

const FormLink = styled(DefaultLink)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 11px;
  color: #3369f3;
  text-decoration: none;
`;
