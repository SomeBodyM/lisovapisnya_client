import {StateSchema} from "app/providers/StoreProvider";

export const getPhotoData = (state: StateSchema) => state.photoSchema?.data;
export const getPhotoIsLoading = (state: StateSchema) => state.photoSchema?.isLoading;
export const getPhotoError = (state: StateSchema) => state.photoSchema?.error;