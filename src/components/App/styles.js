import styled, { css } from 'styled-components';

export const Container = styled('div')`
  width: 200px;
  height: 200px;
  background: blue;
`;

export const Text = styled('h1')`
  color: ${({ trigger }) => (trigger ? 'white' : 'var(--colorChange)')};
`;
