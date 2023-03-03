import { createContext } from 'react';

const defaultState = { value: null, setValue: () => {} };
export const AuthContext = createContext(defaultState);
