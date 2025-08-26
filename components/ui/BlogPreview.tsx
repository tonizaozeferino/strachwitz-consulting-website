import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog-data';
import BlogCard from './BlogCard';

interface BlogPreviewProps {
  title?: string;
  subtitle?: string;
  maxPosts?: number;
  showViewAll?: boolean;
}

export default function BlogPreview({ 
  title = "Aktuelle Insights", 
  subtitle = "Expertentipps und Fachartikel zu Interim Management, KI-Beratung und Geschäftsentwicklung",
  maxPosts = 3,
  showViewAll = true 
}: BlogPreviewProps) {
  const blogPosts = getAllBlogPosts().slice(0, maxPosts);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {showViewAll && (
          <div className="text-center">
            <Link
              href="/blog"
              className="btn-primary inline-flex items-center gap-2"
            >
              Alle Artikel anzeigen
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
