import styled from 'styled-components';
import imgBottom from '../image/suelo2.png';
import imgFon from '../image/textura.png';
import imgCloud from '../image/nubebot.png';
import { Sun } from './menuModule/Sun';
import { Mars } from './menuModule/Mars';
import { EathPointer } from './menuModule/EathPointer';
import { ExitPointer } from './menuModule/ExitPointer';

export const Menu = () => {
  return (
    <Container>
      <ImgBottom src={imgBottom} alt='img' />
      <ImgCloud src={imgCloud} alt='img' />
      <Sun />
      <Mars />
      <EathPointer />
      <ExitPointer />
    </Container>
  );
};

const Container = styled('div')`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${imgFon});
`;

const ImgBottom = styled('img')`
  width: 100%;
  position: absolute;
  object-fit: cover;
  bottom: 0;
`;
const ImgCloud = styled('img')`
  position: absolute;
  top: 20%;
  right: 40%;
`;
