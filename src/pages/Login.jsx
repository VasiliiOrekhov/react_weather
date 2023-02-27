import { Fragment } from 'react';
import { MyButton } from '../components/UI/MyButton';
import { MyInput } from '../components/UI/MyInput';

export const Login = () => {
  return (
    <Fragment>
      <MyButton>Авторизоваться</MyButton>
      <MyInput type='text' placeholder='Введите логин'></MyInput>
    </Fragment>
  );
};
