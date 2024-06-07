import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Category} from "entities/Category";

export const fetchCollectionData = createAsyncThunk<
    Category[],
    string,
    ThunkConfig<string>
>(
    'collection/createCollection',
    async (categoryName, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI;

        try {
            const response = await extra.api.get<Category[]>('/collection/get', {params: {
                categoryName
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