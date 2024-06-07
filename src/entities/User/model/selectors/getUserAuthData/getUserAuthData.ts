import {StateSchema} from "app/providers/StoreProvider";

export const getUserAuthData = (state: StateSchema) => state.user.authData ?? false;
export const getUserIsLoading = (state: StateSchema) => state.user.isLoading;
export const getUserError = (state: StateSchema) => state.user.error;