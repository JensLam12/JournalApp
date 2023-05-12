import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', // 'checking','not-authenticated', authenticated
        uuid: null,
        email: null,
        displayName: null,
        photoUrl: null,
        errorMessage: null
    },
    reducers: {
        login: (state, /* action */ ) => {
            
        },
        logout: (state, action ) => {
            
        },
        checkingCredentials: (state ) => {
            
        },
    }
});

export const { login, logout, checkingCredentials  } = authSlice.actions;