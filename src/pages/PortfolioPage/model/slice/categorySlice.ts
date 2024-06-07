import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CategorySchema} from "../types/category";
import {fetchCategoryData} from "../services/fetchCategoryData/fetchCategoryData";
import {Category} from "entities/Category";
import {deleteCategoryById} from "../services/deleteCategoryById/deleteCategoryById";

const initialState: CategorySchema = {
    isLoading: false,
    error: undefined,
    data: undefined
}

export const categorySlice = createSlice({
    name: 'Category',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategoryData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCategoryData.fulfilled, (state, action: PayloadAction<Category[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchCategoryData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(deleteCategoryById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(deleteCategoryById.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(deleteCategoryById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
})

export const { actions: categoryActions } = categorySlice;
export const { reducer: categoryReducer } = categorySlice;