export type ArticlePageType = { articles: any[] | null, page: any | null }

export async function loadArticlesAsync($content: any, articleName: string, slug?: string): Promise<ArticlePageType> {
  const getPageAsync = async (slug: string) => {
    const pages = await $content({ deep: true })
      .where({
        dir: `/${articleName}`,
        slug: slug,
      })
      .limit(1)
      .fetch()
    return pages.length === 1 ? pages[0] : null
  }
  const getArticlesAsync = async () => {
    const articleList = await $content(articleName)
      .only(['title', 'slug', 'description', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .fetch()
    return articleList.map((article: any) => {
      // add parent path to slug url
      article.slug = `${articleName}/${article.slug}`
      // add badge for new articles
      article.isNew = (new Date().getTime() -  new Date(article.createdAt).getTime()) / 3600000 < 7
      return article
    })
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
