import {Category} from "entities/Category";

export interface CreateCollectionSchema {
    isLoading?: boolean;
    error?: string;
    data?: Category[]
}