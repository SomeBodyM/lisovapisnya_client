import {StateSchema} from "app/providers/StoreProvider";

export const getCategoryDataData = (state: StateSchema) => state.categorySchema?.data;

export const getCategoryIsLoading = (state: StateSchema) => state.categorySchema?.isLoading;
export const getCategoryIsError = (state: StateSchema) => state.categorySchema?.error;