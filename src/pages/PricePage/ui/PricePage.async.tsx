import { lazy } from 'react'

export const PricePageAsync = lazy(async () => await import('./PricePage'))
