import {StateSchema} from "app/providers/StoreProvider";

export const getFavoritesData = (state: StateSchema) => state.favoritesSchema?.data;
export const getFavoritesIsLoading = (state: StateSchema) => state.favoritesSchema?.isLoading;
export const getFavoritesIsError = (state: StateSchema) => state.favoritesSchema?.error;