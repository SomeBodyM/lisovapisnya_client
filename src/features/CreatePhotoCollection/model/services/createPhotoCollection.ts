import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Category} from "entities/Category";

export interface CreatePhotoCollectionProps {
    title: string;
    img: string;
    categoryName: string;
    favorite: boolean
}

export const createPhotoCollection = createAsyncThunk<
    Category,
    CreatePhotoCollectionProps,
    ThunkConfig<string>
>(
    'category/favoriteManager',
    async (formData, thunkAPI) => {
        const {extra, dispatch, rejectWithValue, getState} = thunkAPI;

        try {
            const response = await extra.api.post<Category>('/collection/create', formData);

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