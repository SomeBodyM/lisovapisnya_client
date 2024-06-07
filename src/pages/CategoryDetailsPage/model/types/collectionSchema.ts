import {Category} from "entities/Category";

export interface CollectionSchema {
    isLoading?: boolean,
    error?: string,
    data?: Category[]
}