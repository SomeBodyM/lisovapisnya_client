import {StateSchema} from "app/providers/StoreProvider";

export const getCreateCategoryData = (state: StateSchema) => state.createCategorySchema?.data;
export const getCreateCategoryIsLoading = (state: StateSchema) => state.createCategorySchema?.isLoading;
export const getCreateCategoryError = (state: StateSchema) => state.createCategorySchema?.error;