import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Sanity client configuration
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01', // Use today's date or your preferred version
  useCdn: false, // Set to false for fresh data, true for cached data
  token: process.env.SANITY_API_TOKEN, // Only needed for write operations
})

// Image URL builder for Sanity images
const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

// Blog post queries
export const blogQueries = {
  // Get all blog posts
  getAllPosts: `
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      readTime,
      category,
      tags,
      "author": author->name,
      "mainImage": mainImage.asset->url
    }
  `,
  
  // Get single blog post by slug
  getPostBySlug: (_slug) => `
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      content,
      publishedAt,
      readTime,
      category,
      tags,
      "author": author->name,
      "mainImage": mainImage.asset->url
    }
  `,
  
  // Get posts by category
  getPostsByCategory: (_category) => `
    *[_type == "post" && category == $category] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      readTime,
      category,
      tags,
      "author": author->name,
      "mainImage": mainImage.asset->url
    }
  `,
  
  // Get related posts (same category or similar tags)
  getRelatedPosts: (_currentPostId, _category, _tags) => `
    *[_type == "post" && _id != $currentPostId && (category == $category || count(tags[@ in $tags]) > 0)] | order(publishedAt desc)[0...3] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      readTime,
      category,
      tags,
      "author": author->name,
      "mainImage": mainImage.asset->url
    }
  `
}

// Helper functions
export async function getAllBlogPosts() {
  return await client.fetch(blogQueries.getAllPosts)
}

export async function getBlogPost(slug) {
  return await client.fetch(blogQueries.getPostBySlug(slug), { slug })
}

export async function getPostsByCategory(category) {
  return await client.fetch(blogQueries.getPostsByCategory(category), { category })
}

export async function getRelatedPosts(currentPostId, category, tags) {
  return await client.fetch(blogQueries.getRelatedPosts(currentPostId, category, tags), {
    currentPostId,
    category,
    tags
  })
}
