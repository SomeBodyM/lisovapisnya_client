import {lazy} from "react";

export const AdminLayoutAsync = lazy(async () => await import('./AdminLayout'))