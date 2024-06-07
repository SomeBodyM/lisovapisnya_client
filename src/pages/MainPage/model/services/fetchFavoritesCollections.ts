import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Category} from "entities/Category";

export const fetchFavoritesCollections = createAsyncThunk<
    Category[],
    void,
    ThunkConfig<string>
>(
    'collection/fetchFavoritesCollections',
    async (_, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI;

        try {
            const response = await extra.api.get<Category[]>('/collection/getFavorites');

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