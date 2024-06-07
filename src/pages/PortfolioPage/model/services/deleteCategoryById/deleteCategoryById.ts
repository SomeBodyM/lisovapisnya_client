import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Category} from "entities/Category";

export const deleteCategoryById = createAsyncThunk<
    Category,
    string,
    ThunkConfig<string>
>(
    'category/deleteCategory',
    async (id, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI;

        try {
            const response = await extra.api.delete<Category>('/category/delete', {params: {id}});

            return response.data;
        } catch (e) {
            console.log(e)
            return rejectWithValue(String(e));
        }
    },
);