import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FavoritesSchema} from "../types/favorites";
import {fetchFavoritesCollections} from "../services/fetchFavoritesCollections";
import {Category} from "entities/Category";

const initialState: FavoritesSchema = {
    isLoading: false,
    error: undefined,
    data: undefined
}

export const favoritesSlice = createSlice({
    name: 'Favorites',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFavoritesCollections.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchFavoritesCollections.fulfilled, (state, action: PayloadAction<Category[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchFavoritesCollections.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
})

export const { actions: favoritesActions } = favoritesSlice;
export const { reducer: favoritesReducer } = favoritesSlice;