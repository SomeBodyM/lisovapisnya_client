import {StateSchema} from "app/providers/StoreProvider";

export const getCategoriesTitlesData = (state: StateSchema) => state.collectionsSwitcher?.data || [];
export const getCategoriesTitlesIsLoading = (state: StateSchema) => state.collectionsSwitcher?.isLoading;
