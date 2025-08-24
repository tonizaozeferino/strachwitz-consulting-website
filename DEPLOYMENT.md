# Deployment Guide - Strachwitz Consulting

## 🚀 Deployment Options

### 1. Vercel (Recommended)

#### Prerequisites
- Vercel account
- GitHub repository connected
- Environment variables configured

#### Steps
1. **Connect Repository**
   ```bash
   # Push code to GitHub
   git add .
   git commit -m "Initial deployment"
   git push origin main
   ```

2. **Vercel Setup**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure build settings:
     - Framework Preset: Next.js
     - Build Command: `npm run build`
     - Output Directory: `.next`

3. **Environment Variables**
   ```env
   SITE_URL=https://strachwitzconsulting.com
   NEXT_PUBLIC_SITE_URL=https://strachwitzconsulting.com
   ```

4. **Deploy**
   - Vercel will automatically deploy on every push to main
   - Preview deployments for pull requests

### 2. Netlify

#### Steps
1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Environment Variables**: Same as Vercel
4. **Custom Domain**: Configure DNS settings

### 3. Traditional Hosting

#### Build Process
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Start production server
npm start
```

## 🔧 Environment Configuration

### Production Environment Variables
```env
# Site Configuration
SITE_URL=https://strachwitzconsulting.com
NEXT_PUBLIC_SITE_URL=https://strachwitzconsulting.com

# Contact Information
CONTACT_EMAIL=kontakt@strachwitzconsulting.com
CONTACT_PHONE=+49 9325 39 199 63

# Analytics (Optional)
GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

### Development Environment Variables
```env
# Local Development
SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 📊 Performance Optimization

### Build Optimization
```bash
# Analyze bundle size
npm run build
npx @next/bundle-analyzer

# Optimize images
# Use Next.js Image component with proper sizing
```

### Caching Strategy
- Static pages: Cache for 1 week
- API routes: Cache for 1 hour
- Images: Cache for 1 month

## 🔒 Security Checklist

### Pre-Deployment
- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] Environment variables secured
- [ ] External links have `rel="noopener noreferrer"`
- [ ] Form validation implemented
- [ ] GDPR compliance checked

### Post-Deployment
- [ ] SSL certificate valid
- [ ] All pages load correctly
- [ ] Contact form working
- [ ] TidyCal booking link functional
- [ ] Mobile responsiveness tested
- [ ] SEO meta tags verified

## 📱 Testing Checklist

### Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Device Testing
- [ ] Desktop (1920x1080)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)
- [ ] Large screens (2560x1440)

### Functionality Testing
- [ ] Navigation menu
- [ ] Contact form
- [ ] TidyCal booking
- [ ] All internal links
- [ ] External links
- [ ] Cookie banner

## 🔄 Continuous Deployment

### GitHub Actions (Optional)
```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run lint
```

## 📈 Monitoring & Analytics

### Performance Monitoring
- **Core Web Vitals**: Monitor LCP, FID, CLS
- **Page Speed**: Target < 3 seconds load time
- **Uptime**: 99.9% availability target

### Analytics Setup
```javascript
// Google Analytics 4
gtag('config', 'GA_MEASUREMENT_ID', {
  page_title: 'Strachwitz Consulting',
  page_location: window.location.href
});
```

## 🚨 Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear cache
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

#### Image Optimization
- Ensure all images are in `public/` directory
- Use proper Next.js Image component
- Check image dimensions and formats

#### SEO Issues
- Verify meta tags are present
- Check structured data
- Validate sitemap generation

### Emergency Rollback
```bash
# Revert to previous version
git log --oneline
git checkout <previous-commit-hash>
npm run build
npm start
```

## 📞 Support Contacts

### Technical Issues
- **Developer**: Development team
- **Hosting**: Vercel/Netlify support
- **Domain**: Domain registrar support

### Business Issues
- **António Freiherr von Strachwitz**
- **Phone**: +49 9325 39 199 63
- **Email**: kontakt@strachwitzconsulting.com

---

**Last Updated**: August 2024
**Version**: 1.0
