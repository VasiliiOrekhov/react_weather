import styled from 'styled-components';

export const MyLink = (children) => {
  return <Link>{children}</Link>;
};

const Link = styled('a')`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 11px;
  color: #3369f3;
`;
