import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CreateCategorySchema} from "features/CreateCategory";
import {Category} from "entities/Category";
import {createPhotoCollection} from "../services/createPhotoCollection";
import {CreateCollectionSchema} from "features/CreatePhotoCollection/model/types/collectionSchema";

const initialState: CreateCollectionSchema = {
    isLoading: false,
    error: undefined,
    data: undefined
}

export const createPhotoCollectionSlice = createSlice({
    name: 'createCollection',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(createPhotoCollection.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
                console.log(state.isLoading)
            })
            .addCase(createPhotoCollection.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(createPhotoCollection.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
})

export const { actions: createPhotoCollectionActions } = createPhotoCollectionSlice;
export const { reducer: createPhotoCollectionReducer } = createPhotoCollectionSlice;