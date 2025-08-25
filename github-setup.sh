#!/bin/bash

echo "🚀 GitHub Repository Setup for Strachwitz Consulting Website"
echo "=========================================================="
echo ""

echo "📋 Step 1: Create a new repository on GitHub"
echo "   - Go to https://github.com/new"
echo "   - Repository name: strachwitz-consulting-website"
echo "   - Description: Professional website for Strachwitz Consulting"
echo "   - Choose Public or Private"
echo "   - DO NOT initialize with README, .gitignore, or license"
echo "   - Click 'Create repository'"
echo ""

read -p "Have you created the repository? (y/n): " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Please create the repository first, then run this script again."
    exit 1
fi

echo "📝 Step 2: Enter your GitHub repository details"
echo ""

read -p "Enter your GitHub username: " github_username
read -p "Enter your repository name: " repo_name

# Set the remote URL
remote_url="https://github.com/$github_username/$repo_name.git"

echo ""
echo "🔗 Adding remote repository..."
git remote add origin "$remote_url"

echo "📤 Pushing code to GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "✅ Success! Your code has been pushed to GitHub."
echo "🌐 Repository URL: https://github.com/$github_username/$repo_name"
echo ""
echo "📋 Next steps:"
echo "   1. Set up deployment (see DEPLOYMENT.md)"
echo "   2. Configure environment variables"
echo "   3. Set up custom domain (if needed)"
echo "   4. Configure analytics and monitoring"
echo ""

# Clean up the script
rm github-setup.sh
