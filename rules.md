# Strachwitz Consulting - Project Rules & Guidelines

## 🎯 Project Overview
Professional website for Strachwitz Consulting - Interim Management, KI-Beratung, and Geschäftsentwicklung services.

## 📋 Coding Standards

### TypeScript & React
- **Strict TypeScript**: Always use strict mode with proper typing
- **Server Components First**: Use Server Components by default, Client Components only when needed
- **Props Interface**: Always define interfaces for component props
- **Error Handling**: Implement proper error boundaries and error states

### File Naming & Structure
```
app/
├── page.tsx                    # Homepage
├── [service]/page.tsx          # Service pages
├── api/contact/route.ts        # API routes
components/
├── ui/                         # Reusable UI components
├── Header.tsx                  # Main navigation
├── Footer.tsx                  # Site footer
public/
├── logo.png                    # Company logo
├── antonio-profile.png         # Profile photos
```

### Component Guidelines
- **One Component Per File**: Each component in its own file
- **Descriptive Names**: Use PascalCase for components, camelCase for functions
- **Props Destructuring**: Always destructure props in function parameters
- **Default Props**: Use TypeScript interfaces with optional properties

## 🎨 Design System

### Colors (Tailwind Classes)
```css
Primary: #001f3f (bg-primary, text-primary)
Secondary: #3a6d8c (bg-secondary, text-secondary)
Tertiary: #6a9ab0 (bg-tertiary, text-tertiary)
Accent: #ead8b1 (bg-accent, text-accent)
Background: #f8fafc (bg-bg)
Text: #0f172a (text-text)
```

### Typography
- **Headings**: Merriweather (font-heading) - Bold, professional
- **Body**: Inter (font-body) - Clean, readable
- **Font Weights**: 300, 400, 500, 600, 700, 900

### Spacing & Layout
- **Container**: `container-custom` class for consistent max-width
- **Sections**: `py-16 lg:py-24` for vertical spacing
- **Grid**: Use Tailwind grid system with responsive breakpoints

## 🔧 Technical Requirements

### Performance
- **Image Optimization**: Use Next.js Image component with proper sizing
- **Lazy Loading**: Implement for non-critical images
- **Bundle Size**: Keep components lightweight
- **SEO**: Proper meta tags, structured data, sitemap

### Accessibility (WCAG 2.1 AA)
- **Semantic HTML**: Use proper heading hierarchy (h1-h6)
- **Alt Text**: All images must have descriptive alt text
- **Keyboard Navigation**: All interactive elements must be keyboard accessible
- **Color Contrast**: Minimum 4.5:1 ratio for normal text
- **Focus Indicators**: Visible focus states for all interactive elements

### SEO Requirements
- **Meta Tags**: Title, description, OpenGraph for each page
- **Structured Data**: JSON-LD for Organization, LocalBusiness, Articles
- **Sitemap**: Auto-generated via next-sitemap
- **Robots.txt**: Proper crawling instructions

## 📝 Content Guidelines

### Language & Tone
- **Language**: German (de-DE) throughout
- **Formality**: "Sie-Ansprache" (formal address)
- **Tone**: Professional, trustworthy, solution-focused
- **Avoid**: "signifikant", "großartige" (as per client request)

### Content Structure
- **Hero Sections**: Clear value proposition with CTAs
- **Service Pages**: Problem → Solution → Results format
- **Case Studies**: Anonymized with industry/size context
- **Contact**: Direct booking via TidyCal, phone, email

### Brand Voice
- **Professional**: Senior-level expertise
- **Trustworthy**: Proven results and experience
- **Accessible**: Clear, jargon-free explanations
- **Mittelstand-focused**: Understanding of German SME challenges

## 🚀 Deployment & Maintenance

### Environment Variables
```env
SITE_URL=https://strachwitzconsulting.com
NEXT_PUBLIC_SITE_URL=https://strachwitzconsulting.com
```

### Build Process
```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # Code linting
npm run format   # Code formatting
```

### Quality Assurance
- **Linting**: ESLint with TypeScript and Next.js rules
- **Formatting**: Prettier with consistent configuration
- **Type Checking**: Strict TypeScript compilation
- **Testing**: Manual testing on multiple devices/browsers

## 🔒 Security & Privacy

### Data Protection
- **GDPR Compliance**: Privacy policy, cookie consent
- **Form Handling**: Secure API routes with validation
- **External Links**: `rel="noopener noreferrer"` for external links
- **HTTPS**: Always use secure connections

### Contact Information
- **Phone**: +49 9325 39 199 63
- **Email**: kontakt@strachwitzconsulting.com
- **Address**: Wüstenfelden 3, 97355 Castell, Deutschland

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile-First Approach
- Design for mobile first, enhance for larger screens
- Touch-friendly button sizes (minimum 44px)
- Readable text sizes (minimum 16px)

## 🎯 Business Rules

### Service Areas
1. **Interim Management**: Vertriebsführung, Transformation
2. **KI-Beratung**: AI strategy, implementation, compliance
3. **Geschäftsentwicklung**: Export, internationalization

### Target Audience
- German Mittelstand companies
- Family-owned businesses
- Companies seeking digital transformation
- International expansion candidates

### Success Metrics
- Lead generation through contact form
- Booking conversions via TidyCal
- Page load speed < 3 seconds
- Mobile usability score > 90

## 🔄 Update Procedures

### Content Updates
- Update content in respective page files
- Maintain consistent formatting
- Update meta tags for SEO
- Test on multiple devices

### Technical Updates
- Update dependencies regularly
- Test thoroughly before deployment
- Maintain backup of production data
- Document all changes

### Emergency Procedures
- Rollback to previous version if needed
- Contact information for urgent issues
- Backup and recovery procedures

---

**Last Updated**: August 2024
**Version**: 1.0
**Maintainer**: Development Team
