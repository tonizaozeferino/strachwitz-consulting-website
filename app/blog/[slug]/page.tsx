import type { Metadata } from 'next';
import Link from 'next/link';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';
import { notFound } from 'next/navigation';
import { getBlogPost, getRelatedPosts } from '@/lib/blog-data';
import BlogCard from '@/components/ui/BlogCard';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Artikel nicht gefunden - Strachwitz Consulting',
    };
  }

  return {
    title: `${post.title} - Strachwitz Consulting Blog`,
    description: post.excerpt,
    keywords: [...post.tags, 'Blog', 'Strachwitz Consulting'].join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    notFound();
  }

  // Find related posts
  const relatedPosts = getRelatedPosts(post, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Article Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 text-sm text-gray-100 mb-4">
              <Link href="/blog" className="hover:text-white transition-colors duration-200">
                ← Zurück zum Blog
              </Link>
              <span>•</span>
              <span>{post.category}</span>
              <span>•</span>
              <span>{format(new Date(post.publishedAt), 'dd. MMM yyyy', { locale: de })}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-100 mb-8">
              {post.excerpt}
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-medium">{post.author}</div>
                <div className="text-sm text-gray-100">Autor</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <article className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Tags */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-primary mb-4">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
            
                         {/* Related Posts */}
             {relatedPosts.length > 0 && (
               <div className="mt-16">
                 <h2 className="text-2xl font-bold text-primary mb-8">Ähnliche Artikel</h2>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   {relatedPosts.map((relatedPost) => (
                     <BlogCard key={relatedPost.id} post={relatedPost} />
                   ))}
                 </div>
               </div>
             )}
            
            {/* Newsletter Signup */}
            <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Bleiben Sie auf dem Laufenden
                </h3>
                <p className="text-gray-600 mb-6">
                  Erhalten Sie die neuesten Insights zu Interim Management, KI und Geschäftsentwicklung direkt in Ihr Postfach.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Ihre E-Mail-Adresse"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                  <button className="bg-secondary hover:bg-primary text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                    Abonnieren
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
