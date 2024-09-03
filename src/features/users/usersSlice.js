import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: 0, name: 'Mr. Abul' },
    { id: 1, name: 'Mt. Kabul' },
    { id: 2, name: 'Mw. Dabul' },
];

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;