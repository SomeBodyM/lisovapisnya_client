import {StateSchema, StoreProvider} from "app/providers/StoreProvider";
import {loginReducer} from "features/AuthByUserName/model/slice/loginSlice";
import {profileReducer} from "entities/Profile";
import {ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import React from "react";

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList
) => (StoryFn: () => React.ReactNode) => (
    <StoreProvider initialState={state} asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}>
        <StoryFn/>
    </StoreProvider>
);
