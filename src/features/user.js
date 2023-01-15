import { createSlice, current } from '@reduxjs/toolkit'

const initialState = []

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
            localStorage.setItem('users', JSON.stringify(state))
        },
        deleteUser: (state, action) => {
            const id = action.payload;
            return state.filter(user => user.id !== id)
        },
        editUser: (state, action) => {
            const newUser = action.payload;
            const id = action.payload.id;
            return state.map(user => {
                if (user.id === id) {
                    return newUser;
                }
                return user;
            })
        }
    }
})

export const { addUser, deleteUser, editUser } = userSlice.actions;
export default userSlice.reducer