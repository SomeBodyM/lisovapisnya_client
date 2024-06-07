import {Category} from "entities/Category";

export interface CategorySchema {
    isLoading?: boolean;
    error?: string;
    data?: Category[]
}