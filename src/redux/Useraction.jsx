import {LOGIN_SUCCESS, LOGOUT} from './Actiontype';

export const loginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user,
});

export const logout = (user) => ({
    type: 'LOGOUT',
    payload: user,
});