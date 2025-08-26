import qs from 'qs'

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'

export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  const mergedOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  }

  const queryString = qs.stringify(urlParamsObject, {
    encodeValuesOnly: true,
  })

  const requestUrl = `${STRAPI_URL}/api${path}${queryString ? `?${queryString}` : ''}`

  const response = await fetch(requestUrl, mergedOptions)
  const data = await response.json()
  return data
}

// Blog post queries
export async function getAllBlogPosts() {
  const response = await fetchAPI('/blog-posts', {
    populate: '*',
    sort: ['publishedAt:desc'],
  })
  return response.data || []
}

export async function getBlogPost(slug) {
  const response = await fetchAPI('/blog-posts', {
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: '*',
  })
  return response.data?.[0] || null
}

export async function getPostsByCategory(category) {
  const response = await fetchAPI('/blog-posts', {
    filters: {
      category: {
        $eq: category,
      },
    },
    populate: '*',
    sort: ['publishedAt:desc'],
  })
  return response.data || []
}

export async function getRelatedPosts(currentPostId, category, tags) {
  const response = await fetchAPI('/blog-posts', {
    filters: {
      $and: [
        {
          id: {
            $ne: currentPostId,
          },
        },
        {
          $or: [
            {
              category: {
                $eq: category,
              },
            },
            {
              tags: {
                $in: tags,
              },
            },
          ],
        },
      ],
    },
    populate: '*',
    sort: ['publishedAt:desc'],
    pagination: {
      limit: 3,
    },
  })
  return response.data || []
}

// Helper function to format Strapi data to match your existing blog structure
export function formatBlogPost(strapiPost) {
  if (!strapiPost) return null
  
  return {
    id: strapiPost.attributes.slug,
    title: strapiPost.attributes.title,
    excerpt: strapiPost.attributes.excerpt,
    content: strapiPost.attributes.content,
    author: strapiPost.attributes.author || 'António Freiherr von Strachwitz',
    publishedAt: strapiPost.attributes.publishedAt,
    readTime: strapiPost.attributes.readTime || '5 min',
    category: strapiPost.attributes.category,
    image: strapiPost.attributes.featuredImage?.data?.attributes?.url || '/blog/default-image.jpg',
    tags: strapiPost.attributes.tags || [],
  }
}

// Get all categories
export async function getAllCategories() {
  const response = await fetchAPI('/blog-posts', {
    fields: ['category'],
  })
  
  const categories = response.data?.map(post => post.attributes.category) || []
  return [...new Set(categories)]
}

// Get all tags
export async function getAllTags() {
  const response = await fetchAPI('/blog-posts', {
    fields: ['tags'],
  })
  
  const allTags = response.data?.flatMap(post => post.attributes.tags || []) || []
  return [...new Set(allTags)]
}
