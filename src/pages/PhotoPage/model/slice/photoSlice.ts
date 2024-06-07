import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Category} from "entities/Category";
import {PhotoSchema} from "../types/photoSchema";
import {fetchPhotosByCollectionName} from "../services/fetchPhotosByCollectionName";

const initialState: PhotoSchema = {
    isLoading: false,
    error: undefined,
    data: undefined
}

export const photoSlice = createSlice({
    name: 'Photo',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPhotosByCollectionName.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchPhotosByCollectionName.fulfilled, (state, action: PayloadAction<Category[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchPhotosByCollectionName.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
})

export const { actions: photoActions } = photoSlice;
export const { reducer: photoReducer } = photoSlice;