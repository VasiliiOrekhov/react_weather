import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import imgMars from '../../image/mars.png';
import imgPointerRight from '../../image/senal.png';

export const Mars = () => {
  const navigate = useNavigate();
  const onMarsClick = (e) => {
    e.preventDefault();
    navigate('/mars');
  };

  return (
    <MarsContainer onClick={onMarsClick}>
      <ImgMars src={imgMars} alt='img' />
      <MarsPointerRight>
        <img src={imgPointerRight} alt='img' />
        <TextPointerRight>Погода на Марсе</TextPointerRight>
      </MarsPointerRight>
    </MarsContainer>
  );
};

const MarsContainer = styled('div')`
  position: absolute;
  top: 3%;
  right: 15%;
`;
const MarsPointerRight = styled('div')`
  position: absolute;
  top: 50px;
  right: 20px;
`;
const TextPointerRight = styled('p')`
  font-family: 'Amatic SC', cursive;
  font-size: 26px;
  position: absolute;
  top: 8px;
  left: 30px;
  font-weight: 100px;
  line-height: 30px;
  transform: rotate(-10deg);
`;
const ImgMars = styled('img')`
  position: absolute;
  width: 100px;
`;
