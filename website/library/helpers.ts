export type ArticlePageType = { articles: any[] | null, page: any | null }

export async function loadArticlesAsync($content: any, articleName: string, slug?: string): Promise<ArticlePageType> {
  const getPageAsync = async (slug: string) => {
    const pages = await $content({ deep: true })
      .where({
        dir: `/${articleName}`,
        slug: slug,
      })
      .where({ live: true })
      .limit(1)
      .fetch()
      console.log(pages);
    return pages.length === 1 ? pages[0] : null
  }
  const getArticlesAsync = async () => {
    return await $content(articleName)
      .only(['title', 'path', 'description', 'date', 'live'])
      .where({ live: true })
      .sortBy('date', 'desc')
      .fetch()
  }

  let result = {
    page: null,
    articles: null,
  }

  if (!slug){
    result.articles = await getArticlesAsync()
  }
  else {
    const singlePage = await getPageAsync(slug!)
    if (singlePage){
      result.page = singlePage
    }
    else {
      result.articles = await getArticlesAsync()
    }
  }

  return result
}
