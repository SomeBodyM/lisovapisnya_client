import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CreateCategorySchema} from "features/CreateCategory";
import {createPhoto} from "features/CreatePhoto/model/services/createPhoto/createPhoto";
import {Category} from "entities/Category";


const initialState: CreateCategorySchema = {
    isLoading: false,
    error: undefined,
    data: undefined
}

export const createPhotoSlice = createSlice({
    name: 'createPhoto',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<Category>) => {
            state.data = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createPhoto.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(createPhoto.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(createPhoto.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
})

export const { actions: createPhotoActions } = createPhotoSlice;
export const { reducer: createPhotoReducer } = createPhotoSlice;