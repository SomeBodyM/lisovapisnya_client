import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AuthResponse, User, UserSchema} from "../types/user";
import {USER_LOCALSTORAGE_KEY} from "shared/consts/localstorage";
import {checkIsUserAuth} from "../../model/services/checkIsUserAuth/checkIsUserAuth";
import {logoutAuth} from "entities/User/model/services/logoutUser/logoutUser";

const initialState: UserSchema = {
    _inited: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<AuthResponse>) => {
            state.authData = action.payload.user;
        },
        initAuthData: (state, action: PayloadAction<AuthResponse>) => {
            const user = action.payload.user;
            state.authData = user;
            state._inited = true;
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(checkIsUserAuth.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(checkIsUserAuth.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
                state.isLoading = false;
                state.authData = action.payload.user;
                state._inited = true;
            })
            .addCase(checkIsUserAuth.rejected, (state, action) => {
                state.isLoading = false;
                state._inited = true;
                state.authData = undefined;
                state.error = action.payload;
            })
            .addCase(logoutAuth.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(logoutAuth.fulfilled, (state, ) => {
                state.isLoading = false;
                state.authData = undefined;
                state._inited = true;
            })
            .addCase(logoutAuth.rejected, (state, action) => {
                state.isLoading = false;
                state._inited = true;
                state.error = action.payload;
            })
    },
})

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;