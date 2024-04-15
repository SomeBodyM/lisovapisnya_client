import {lazy} from "react";

export const PublicLayoutAsync = lazy(async () => await import('./PublicLayout'))