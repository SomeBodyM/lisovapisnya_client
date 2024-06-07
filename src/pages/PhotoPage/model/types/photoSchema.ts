import {Category} from "entities/Category";

export interface PhotoSchema {
    isLoading?: boolean;
    error?: string;
    data?: Category[]
}