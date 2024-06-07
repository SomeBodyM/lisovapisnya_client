import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Category} from "entities/Category";

export const deleteCollectionData = createAsyncThunk<
    Category,
    string,
    ThunkConfig<string>
>(
    'collection/deleteCollection',
    async (id, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI;
        try {
            const response = await extra.api.delete<Category>('/collection/delete', {params: {
                id
            }});

            return response.data;
        } catch (e) {
            return rejectWithValue(String(e));
        }
    },
);