import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CollectionsSwitcherSchema} from "../types/collectionsSwitcherSchema";
import {fetchCategoriesTitles} from "../services/fetchCategoriesTitles";
import {Category} from "entities/Category";

const initialState: CollectionsSwitcherSchema = {
    isLoading: false,
    error: '',
    data: undefined
}

export const collectionsSwitcherSlice = createSlice({
    name: 'collectionsSwitcher',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategoriesTitles.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCategoriesTitles.fulfilled, (state, action: PayloadAction<Category[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchCategoriesTitles.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
})

export const { actions: collectionsSwitcherActions } = collectionsSwitcherSlice;
export const { reducer: collectionsSwitcherReducer } = collectionsSwitcherSlice;