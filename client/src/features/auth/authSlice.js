import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: "auth",
    initialState: { user: null, token: null },
    reducers: {
        setCredentials: (state, action) => {
            const { user, accessToken } = action.payloadstate.user = userstate.token = accessToken
        },
        logout: (state, action) => {
            state.user = null
            state.token = null

        }

    },
})

export const { setCredentials, logout } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token