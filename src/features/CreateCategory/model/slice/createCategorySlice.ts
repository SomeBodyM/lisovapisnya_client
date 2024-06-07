import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CreateCategorySchema} from "features/CreateCategory";
import {createCategory} from "../services/createCategory/createCategory";
import {Category} from "entities/Category";


const initialState: CreateCategorySchema = {
    isLoading: false,
    error: undefined,
    data: undefined
}

export const createCategorySlice = createSlice({
    name: 'createCategory',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<Category>) => {
            state.data = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createCategory.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(createCategory.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(createCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
})

export const { actions: createCategoryActions } = createCategorySlice;
export const { reducer: createCategoryReducer } = createCategorySlice;