import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Category} from "entities/Category";

export const fetchCategoryData = createAsyncThunk<
    Category[],
    void,
    ThunkConfig<string>
>(
    'category/favoriteManager',
    async (_, thunkAPI) => {
        const {extra, dispatch, rejectWithValue, getState} = thunkAPI;

        try {
            const response = await extra.api.get<Category[]>('/category/get');

            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            console.log(e)
            return rejectWithValue(String(e));
        }
    },
);