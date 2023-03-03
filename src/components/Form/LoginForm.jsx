import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getUser, logOut, signIn } from '../Api/Auth/Auth';
import { Button } from '../Button/Button';
import { AuthContext } from '../context/context';
import { Input } from '../Input/Input';
import { Link } from '../Link/Link';
import { Title } from '../Title/Title';
import { loginInputs } from './constants';

export const LoginForm = () => {
  const { setValue } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formState, setFormState] = useState({ login: null, password: null });
  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn(formState);
    if (result.ok) {
      const resp = await getUser();
      resp.ok && setValue(true);
      navigate('/menu');
    }
  };
  const onButtonOutClick = (e) => {
    e.preventDefault();
    logOut();
  };
  const onInputChange = (value) => {
    setFormState((prevState) => {
      return { ...prevState, ...value };
    });
  };

  return (
    <Container>
      <Title>Вход</Title>
      <Form onSubmit={onSubmit}>
        <InputContainer>
          {loginInputs.map((props) => (
            <Input
              onChange={(e) => onInputChange({ [props.name]: e.target.value })}
              {...props}
              key={props.name}
            />
          ))}
        </InputContainer>
        <ButtonContainer>
          <Button type='submit'>Авторизоваться</Button>
          <Button style={{ background: 'green' }} onClick={onButtonOutClick}>
            VUHOD
          </Button>

          <Link to='/registration'>Нет аккаунта?</Link>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

const Container = styled('div')`
  width: 340px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.14);
  border-radius: 12px;
`;

const Form = styled('form')`
  padding: 0 calc((100% - 280px) / 2) 30px;
  max-width: 280px;
`;
const InputContainer = styled('div')`
  display: grid;
  gap: 30px;
`;
const ButtonContainer = styled('div')`
  display: grid;
  gap: 14px;
  text-align: center;
  margin-top: 154px;
`;
