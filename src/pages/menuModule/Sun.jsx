import imgSol from '../../image/rayos_sol.png';
import imgSolFace from '../../image/sol_duerme.png';
import imgPointerLeft from '../../image/senal2.png';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const Sun = () => {
  const navigate = useNavigate();
  const onSunClick = (e) => {
    e.preventDefault();
    navigate('/profile');
  };

  return (
    <SunContainer onClick={onSunClick}>
      <ImgSol src={imgSol} alt='img' />
      <ImgSolFace src={imgSolFace} alt='img' />
      <SunPointerLeft>
        <img src={imgPointerLeft} alt='img' />
        <TextPointerLeft>Профиль</TextPointerLeft>
      </SunPointerLeft>
    </SunContainer>
  );
};

const SunContainer = styled('div')`
  position: absolute;
  top: calc(100% / 15);
  left: calc(100% / 15);
`;
const ImgSol = styled('img')`
  position: absolute;
  animation: rotate 5s infinite linear;
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
const ImgSolFace = styled('img')`
  position: absolute;
  top: 40px;
  left: 40px;
`;
const SunPointerLeft = styled('div')`
  position: absolute;
  top: 50px;
  left: 210px;
`;
const TextPointerLeft = styled('p')`
  font-family: 'Amatic SC', cursive;
  font-size: 26px;
  position: absolute;
  top: 25px;
  left: 40px;
  font-weight: 100px;
  line-height: 30px;
  transform: rotate(1deg);
`;
