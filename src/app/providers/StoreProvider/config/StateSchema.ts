import {UserSchema} from "entities/User";
import {LoginSchema} from "features/AuthByUserName";
import {AnyAction, EnhancedStore, Reducer, ReducersMapObject} from "@reduxjs/toolkit";
import { CombinedState } from 'redux';
import {AxiosInstance} from "axios";
import {CreateCategorySchema} from "features/CreateCategory";
import {CategorySchema} from "pages/PortfolioPage";
import {CollectionSchema} from "pages/CategoryDetailsPage/model/types/collectionSchema";
import {CreateCollectionSchema} from "features/CreatePhotoCollection/model/types/collectionSchema";
import {PhotoSchema} from "pages/PhotoPage/model/types/photoSchema";
import {CreatePhotoSchema} from "features/CreatePhoto";
import {FavoritesSchema} from "pages/MainPage/model/types/favorites";
import {CollectionsSwitcherSchema} from "features/CollectionsSwitcher/model/types/collectionsSwitcherSchema";
import {ProfileSchema} from "features/EditableProfile/model/types/profile";

export interface StateSchema {
    user: UserSchema;

    //Async reducers
    loginForm?: LoginSchema;
    createCategorySchema?: CreateCategorySchema;
    createPhotoSchema?: CreatePhotoSchema;
    createCollectionSchema?: CreateCollectionSchema
    categorySchema?: CategorySchema;
    collectionSchema?: CollectionSchema;
    photoSchema?: PhotoSchema;
    favoritesSchema?: FavoritesSchema;
    collectionsSwitcher?: CollectionsSwitcherSchema;
    profile?: ProfileSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance,
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
    state: StateSchema
}