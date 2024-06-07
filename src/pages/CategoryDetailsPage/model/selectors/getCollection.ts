import {StateSchema} from "app/providers/StoreProvider";

export const getCollectionData = (state: StateSchema) => state.collectionSchema?.data;
export const getCollectionIsLoading = (state: StateSchema) => state.collectionSchema?.isLoading;
export const getCollectionError = (state: StateSchema) => state.collectionSchema?.error;