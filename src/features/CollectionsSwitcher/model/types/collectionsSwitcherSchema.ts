import {Category} from "entities/Category";



export interface CollectionsSwitcherSchema {
    isLoading?: boolean;
    error?: string;
    data?: Category[]
}