import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Category} from "entities/Category";

export const setFavorites = createAsyncThunk<
    Category,
    string,
    ThunkConfig<string>
>(
    'collection/setFavorite',
    async (id, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI;
        try {
            const response = await extra.api.get<Category>('/collection/setFavorite', {params: {
                id
            }});

            return response.data;
        } catch (e) {
            return rejectWithValue(String(e));
        }
    },
);