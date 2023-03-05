import type { getCollection } from 'astro:content';

type GetFirstArgumentOfAnyFunction<T> = T extends (first: infer FirstArgument, ...args: any[]) => any
  ? FirstArgument
  : never;

export type CollectionTypes = Exclude<GetFirstArgumentOfAnyFunction<typeof getCollection>, 'about'>;

export enum BoxType {
  Neutral = 'neutral',
  Info = 'info',
  Warning = 'warning',
  Error = 'error',
}
