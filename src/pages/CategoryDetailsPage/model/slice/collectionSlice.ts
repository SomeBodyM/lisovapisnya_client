import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Category} from "entities/Category";
import {CollectionSchema} from "../types/collectionSchema";
import {fetchCollectionData} from "../services/fetchCollectionData";
import {deleteCollectionData} from "../services/deleteCollectionData";
import {setFavorites} from "../services/setFavorites";

const initialState: CollectionSchema = {
    isLoading: false,
    error: undefined,
    data: undefined
}

export const collectionSlice = createSlice({
    name: 'Collection',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCollectionData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCollectionData.fulfilled, (state, action: PayloadAction<Category[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchCollectionData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(deleteCollectionData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(deleteCollectionData.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(deleteCollectionData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(setFavorites.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(setFavorites.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(setFavorites.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
})

export const { actions: collectionActions } = collectionSlice;
export const { reducer: collectionReducer } = collectionSlice;