import {Category} from "entities/Category";

export interface FavoritesSchema {
    isLoading?: boolean;
    error?: string;
    data?: Category[]
}