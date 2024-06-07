import {lazy} from "react";

export const PhotoPageAsync = lazy(async () => await import('./PhotoPage'))
