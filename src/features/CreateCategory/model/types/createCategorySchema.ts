import {Category} from "entities/Category";

export interface CreateCategorySchema {
    isLoading?: boolean;
    error?: string;
    data?: Category;
}