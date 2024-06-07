import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Category} from "entities/Category";

export const fetchPhotosByCollectionName = createAsyncThunk<
    Category[],
    string,
    ThunkConfig<string>
>(
    'photo/fetchPhotosByCollectionName',
    async (collectionName, thunkAPI) => {
        const {extra, dispatch, rejectWithValue, getState} = thunkAPI;

        try {
            const response = await extra.api.get<Category[]>('/photo/get', {params: {
                collectionName
            }});

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