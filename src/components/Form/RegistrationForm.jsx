import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getUser, signUp } from '../Api/Auth/Auth';
import { Button } from '../Button/Button';
import { AuthContext } from '../context/context';
import { Input } from '../Input/Input';
import { Link } from '../Link/Link';
import { Title } from '../Title/Title';
import { registrationInputs } from './constants';

export const RegistrationForm = () => {
  const { setValue } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    email: null,
    login: null,
    first_name: null,
    second_name: null,
    phone: null,
    password: null,
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formState);
    const result = await signUp(formState);
    if (result.ok) {
      const resp = await getUser();
      resp.ok && setValue(true);
      navigate('/menu');
    }
  };

  const onInputChange = (value) => {
    setFormState((prevState) => {
      return { ...prevState, ...value };
    });
  };

  return (
    <Container>
      <Title>Регистрация</Title>
      <Form onSubmit={onSubmit}>
        <InputContainer>
          {registrationInputs.map((props) => (
            <Input
              onChange={(e) => onInputChange({ [props.name]: e.target.value })}
              {...props}
              key={props.name}
            />
          ))}
          <Input type='password' key='passwordTwo' placehold='Пароль (еще раз)' />
        </InputContainer>
        <ButtonContainer>
          <Button type='submit'>Зарегистрироваться</Button>
          <Link to='/login'>Войти</Link>
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
  margin-top: 45px;
`;
