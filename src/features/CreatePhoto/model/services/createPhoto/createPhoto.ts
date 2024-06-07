import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {getCreateCategoryData} from "../../selectors/getCreateCategory";
import {Category} from "entities/Category";

export interface CreatePhotoProps {
    title: string;
    img: string;
    collectionName: string;
    horizontal: boolean
}

export const createPhoto = createAsyncThunk<
    Category,
    CreatePhotoProps,
    ThunkConfig<string>
>(
    'category/favoriteManager',
    async (formData, thunkAPI) => {
        const {extra, dispatch, rejectWithValue, getState} = thunkAPI;

        try {
            const response = await extra.api.post<Category>('/photo/create', formData);

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