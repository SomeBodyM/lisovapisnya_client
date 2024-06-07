import {createAsyncThunk} from "@reduxjs/toolkit";
import {User, userActions} from "entities/User";
import {USER_LOCALSTORAGE_KEY} from "shared/consts/localstorage";
import {ThunkConfig} from "app/providers/StoreProvider";
import {AuthResponse} from "entities/User/model/types/user";

export const logoutAuth = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'login/logoutAuth',
    async (_, thunkAPI) => {
        const {extra, dispatch, rejectWithValue, } = thunkAPI;
        try {
            const response = await extra.api.post('user/logout', {withCredentials: true})
            if (!response.data) {
                throw new Error();
            }

            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
            dispatch(userActions.setAuthData({} as AuthResponse));

            return response.data;
        } catch (e) {
            return rejectWithValue(String(e));
        }
    },
);