import {
  baseSettings,
  BASE_URL,
  SIGN_IN_URL,
  LOGOUT_URL,
  SIGN_UP_URL,
  GET_USER_URL,
} from './constants';

const createAuthOperation = (url, method) => {
  return async (inputValue) => {
    const options = inputValue
      ? {
          method,
          ...baseSettings,
          body: JSON.stringify(inputValue),
        }
      : {
          method,
          ...baseSettings,
        };
    const response = await fetch(`${BASE_URL}${url}`, options);
    console.log('respOOOOOOOOOk:', response);

    return response;
  };
};

export const signUp = createAuthOperation(SIGN_UP_URL, 'POST');
export const signIn = createAuthOperation(SIGN_IN_URL, 'POST');
export const logOut = createAuthOperation(LOGOUT_URL, 'POST');
export const getUser = createAuthOperation(GET_USER_URL, 'GET');
