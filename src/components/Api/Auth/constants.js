export const BASE_URL = 'https://ya-praktikum.tech/api/v2';
const AUTH = '/auth/';
export const SIGN_IN_URL = AUTH + 'signin';
export const SIGN_UP_URL = AUTH + 'signup';
export const LOGOUT_URL = AUTH + 'logout';
export const GET_USER_URL = AUTH + 'user';

export const baseSettings = {
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
};
