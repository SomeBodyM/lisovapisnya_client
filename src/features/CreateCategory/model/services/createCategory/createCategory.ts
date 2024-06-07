import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {getCreateCategoryData} from "../../selectors/getCreateCategory";
import {Category} from "entities/Category";

interface createCategoryProps {
    img: string;
    title: string
}

export const createCategory = createAsyncThunk<
    Category,
    createCategoryProps,
    ThunkConfig<string>
>(
    'category/favoriteManager',
    async (formData, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI;

        try {
            const response = await extra.api.post<Category>('/category/create', formData);

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