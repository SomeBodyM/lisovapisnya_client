import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Category} from "entities/Category";
export const fetchCategoriesTitles = createAsyncThunk<
    Category[],
    void,
    ThunkConfig<string>
>(
    'collection/fetchCategoriesTitles',
    async (_, thunkAPI) => {
        const {extra, rejectWithValue, } = thunkAPI;
        try {
            const response = await extra.api.get<Category[]>('/category/getTitles');

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