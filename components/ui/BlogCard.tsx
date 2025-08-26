import Link from 'next/link';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';
import { BlogPost } from '@/lib/blog-data';

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'featured';
}

export default function BlogCard({ post, variant = 'default' }: BlogCardProps) {
  if (variant === 'featured') {
    return (
      <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-64 bg-gray-200">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-6xl font-bold">{post.category.charAt(0)}</div>
              <div className="text-lg">{post.category}</div>
            </div>
          </div>
        </div>
        
        <div className="p-8">
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <span className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
            <span>{format(new Date(post.publishedAt), 'dd. MMM yyyy', { locale: de })}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          
          <h2 className="text-2xl font-bold text-primary mb-4 line-clamp-2">
            {post.title}
          </h2>
          
          <p className="text-gray-600 mb-6 line-clamp-3 text-lg">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <span className="text-sm text-gray-600">{post.author}</span>
            </div>
            
            <Link
              href={`/blog/${post.id}`}
              className="text-secondary hover:text-primary font-medium text-sm transition-colors duration-200"
            >
              Weiterlesen →
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 bg-gray-200">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-4xl font-bold">{post.category.charAt(0)}</div>
            <div className="text-sm">{post.category}</div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <span className="bg-accent text-primary px-2 py-1 rounded-full text-xs font-medium">
            {post.category}
          </span>
          <span>{format(new Date(post.publishedAt), 'dd. MMM yyyy', { locale: de })}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        
        <h2 className="text-xl font-bold text-primary mb-3 line-clamp-2">
          {post.title}
        </h2>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white text-sm font-bold">
              {post.author.split(' ').map(n => n[0]).join('')}
            </div>
            <span className="text-sm text-gray-600">{post.author}</span>
          </div>
          
          <Link
            href={`/blog/${post.id}`}
            className="text-secondary hover:text-primary font-medium text-sm transition-colors duration-200"
          >
            Weiterlesen →
          </Link>
        </div>
      </div>
    </article>
  );
}
