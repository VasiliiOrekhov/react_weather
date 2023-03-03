import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import imgPointerRight from '../../image/senal.png';

export const EathPointer = () => {
  const navigate = useNavigate();
  const onButtonClick = (e) => {
    e.preventDefault();
    navigate('/eath');
  };

  return (
    <EathPointerRight onClick={onButtonClick}>
      <img src={imgPointerRight} alt='img' />
      <TextPointerRight>Погода на Земле</TextPointerRight>
    </EathPointerRight>
  );
};

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

const EathPointerRight = styled('div')`
  position: absolute;
  bottom: 10%;
  right: 50%;
`;
