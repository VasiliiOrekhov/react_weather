import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { logOut } from '../../components/Api/Auth/Auth';
import { AuthContext } from '../../components/context/context';
import imgPointerLeft from '../../image/senal2.png';

export const ExitPointer = () => {
  const { setValue } = useContext(AuthContext);
  const navigate = useNavigate();
  const onButtonOutClick = (e) => {
    e.preventDefault();
    logOut();
    setValue(false);
    navigate('/login');
  };

  return (
    <ExitPointerLeft onClick={onButtonOutClick}>
      <img src={imgPointerLeft} alt='img' />
      <TextPointerLeft>Выход</TextPointerLeft>
    </ExitPointerLeft>
  );
};

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

const ExitPointerLeft = styled('div')`
  position: absolute;
  bottom: 5%;
  right: 5%;
`;
