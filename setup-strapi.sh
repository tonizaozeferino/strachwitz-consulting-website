#!/bin/bash

echo "🚀 Setting up Strapi CMS for Strachwitz Consulting Blog"
echo "=================================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Create Strapi project
echo "📦 Creating Strapi project..."
npx create-strapi-app@latest strapi-blog --quickstart --no-run

if [ $? -eq 0 ]; then
    echo "✅ Strapi project created successfully"
else
    echo "❌ Failed to create Strapi project"
    exit 1
fi

# Navigate to Strapi project
cd strapi-blog

echo "🔧 Installing dependencies..."
npm install

echo "🚀 Starting Strapi development server..."
echo "=================================================="
echo "🌐 Strapi will be available at: http://localhost:1337"
echo "🔐 Admin panel will be at: http://localhost:1337/admin"
echo ""
echo "📝 Next steps:"
echo "1. Open http://localhost:1337/admin in your browser"
echo "2. Create your first admin user"
echo "3. Go to 'Content-Type Builder'"
echo "4. Create 'Blog Post' collection type with these fields:"
echo "   - Title (Text)"
echo "   - Slug (UID)"
echo "   - Excerpt (Text)"
echo "   - Content (Rich Text)"
echo "   - Author (Text)"
echo "   - Published At (Date)"
echo "   - Read Time (Text)"
echo "   - Category (Enumeration)"
echo "   - Tags (JSON)"
echo "   - Featured Image (Media)"
echo ""
echo "5. Set up permissions in 'Settings > Users & Permissions'"
echo "6. Create your first blog post"
echo ""
echo "🔗 Integration with Next.js:"
echo "- Update your .env.local file with: NEXT_PUBLIC_STRAPI_URL=http://localhost:1337"
echo "- Use the strapi-client.js file in your lib folder"
echo "- Update your blog pages to use Strapi data"
echo ""
echo "Press Ctrl+C to stop the server when done"
echo "=================================================="

# Start Strapi
npm run develop
