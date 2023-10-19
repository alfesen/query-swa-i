import { InfiniteQueryObserverResult } from "react-query"

export type Prettify<T> = {
  [K in keyof T]: T[K]
} & unknown

export type FetchNextPageResult<T> = () => Promise<InfiniteQueryObserverResult<
  { results: T[] },
  unknown
>>