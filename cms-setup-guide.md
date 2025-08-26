# CMS Setup Guide for Strachwitz Consulting Blog

## 🎯 Recommended CMS Options

### 1. **Sanity.io (Recommended)**
**Best for:** Non-technical users, beautiful interface, easy setup

**Features:**
- ✅ Beautiful, intuitive admin interface
- ✅ Real-time collaboration
- ✅ Rich text editor with markdown support
- ✅ Image management
- ✅ Version control
- ✅ Free tier available
- ✅ German language support

**Setup Steps:**
1. Go to [sanity.io](https://sanity.io)
2. Create free account
3. Create new project
4. Install Sanity CLI: `npm install -g @sanity/cli`
5. Initialize project: `sanity init`
6. Configure content types for blog posts
7. Deploy to Sanity Cloud

**Integration:**
```bash
npm install @sanity/client
npm install @sanity/image-url
```

### 2. **Strapi (Self-Hosted)**
**Best for:** Full control, self-hosted solution

**Features:**
- ✅ Complete control over data
- ✅ Custom admin interface
- ✅ Role-based permissions
- ✅ API-first approach
- ✅ Free and open-source

**Setup Steps:**
1. Create new Strapi project: `npx create-strapi-app@latest my-blog-cms`
2. Configure content types
3. Set up admin users
4. Deploy to your server
5. Integrate with Next.js

### 3. **Contentful (Enterprise)**
**Best for:** Large organizations, enterprise features

**Features:**
- ✅ Enterprise-grade CMS
- ✅ Advanced workflow management
- ✅ Multi-language support
- ✅ Advanced analytics
- ✅ Professional support

### 4. **Hygraph (GraphQL CMS)**
**Best for:** Developers, GraphQL enthusiasts

**Features:**
- ✅ GraphQL API
- ✅ Advanced content modeling
- ✅ Webhooks and integrations
- ✅ Free tier available

## 🔧 Quick Implementation: Sanity.io

### Step 1: Create Sanity Project
```bash
# Install Sanity CLI
npm install -g @sanity/cli

# Create new project
sanity init --template clean --create-project "Strachwitz Blog" --dataset production
```

### Step 2: Configure Blog Schema
Create `schemas/post.js`:
```javascript
export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}]
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          'Interim Management',
          'KI-Beratung',
          'Geschäftsentwicklung',
          'Vertriebsführung'
        ]
      }
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'readTime',
      title: 'Reading Time',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      })
    }
  }
}
```

### Step 3: Integrate with Next.js
Install Sanity client:
```bash
npm install @sanity/client @sanity/image-url
```

Create `lib/sanity.js`:
```javascript
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

export const urlFor = (source) => {
  return imageUrlBuilder(client).image(source)
}
```

### Step 4: Update Blog Pages
Replace static data with Sanity queries:

```javascript
// In app/blog/page.tsx
import { client } from '@/lib/sanity'

export async function getStaticProps() {
  const posts = await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      readTime,
      category,
      tags,
      "author": author->name
    }
  `)
  
  return {
    props: {
      posts
    },
    revalidate: 60 // Revalidate every minute
  }
}
```

## 🎨 Admin Interface Features

### What You'll Get:
- **Rich Text Editor** - Write content with formatting
- **Image Upload** - Drag & drop images
- **Preview Mode** - See how posts look before publishing
- **Scheduling** - Schedule posts for future publication
- **Drafts** - Save work in progress
- **Version History** - Track changes over time
- **Collaboration** - Multiple users can work together

### Workflow:
1. **Login** to your CMS admin panel
2. **Create** new blog post
3. **Write** content using rich text editor
4. **Add** images, tags, and metadata
5. **Preview** how it looks
6. **Publish** or schedule for later
7. **Changes appear** on your website automatically

## 💰 Cost Comparison

| CMS | Free Tier | Paid Plans | Self-Hosted |
|-----|-----------|------------|-------------|
| Sanity.io | ✅ 3 users, 100k API calls | $99/month | ❌ |
| Strapi | ✅ Unlimited | $9/month | ✅ |
| Contentful | ❌ | $300/month | ❌ |
| Hygraph | ✅ 1000 items | $99/month | ❌ |

## 🚀 Recommended Next Steps

1. **Start with Sanity.io** - Easiest to set up and use
2. **Create free account** and test the interface
3. **Set up blog schema** with your content types
4. **Integrate with your Next.js site**
5. **Migrate existing content** from static data
6. **Train your team** on the new CMS

## 🔐 Security & Access

- **Role-based permissions** - Control who can edit what
- **API keys** - Secure access to your content
- **Backup & recovery** - Automatic backups
- **Version control** - Track all changes
- **Audit logs** - See who made what changes

This approach gives you a professional, scalable solution for managing your blog content without touching code!
