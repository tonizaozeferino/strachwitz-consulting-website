import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog-data';
import BlogCard from '@/components/ui/BlogCard';

export const metadata: Metadata = {
  title: 'Blog - Strachwitz Consulting | Insights zu Interim Management, KI & Geschäftsentwicklung',
  description: 'Aktuelle Insights und Fachartikel zu Interim Management, KI-Beratung und Geschäftsentwicklung. Expertentipps für den deutschen Mittelstand.',
  keywords: 'Blog, Interim Management, KI-Beratung, Geschäftsentwicklung, Mittelstand, Fachartikel, Insights',
  openGraph: {
    title: 'Blog - Strachwitz Consulting',
    description: 'Aktuelle Insights und Fachartikel zu Interim Management, KI-Beratung und Geschäftsentwicklung.',
    type: 'website',
  },
};

export default function BlogPage() {
  const blogPosts = getAllBlogPosts();
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Strachwitz Consulting Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">
              Expertentipps und Insights zu Interim Management, KI-Beratung und Geschäftsentwicklung
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">Interim Management</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">KI-Beratung</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Geschäftsentwicklung</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Mittelstand</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          
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
      </section>
    </div>
  );
}
