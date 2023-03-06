import { CollectionEntry, getCollection } from 'astro:content';
import type { CollectionTypes } from '@utils/types';

export async function getPosts<T extends CollectionTypes>(collection: T) {
  const posts = (await getCollection(collection)) as unknown as CollectionEntry<'articles'>[];
  console.log(posts);
  return posts
    .filter((x) => x.data.live)
    .map((post) => ({
      params: { slug: post.slug },
      props: post,
    }));
}
