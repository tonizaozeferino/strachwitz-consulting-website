# Content Management Guide - Strachwitz Consulting

## 📝 Content Update Procedures

### Quick Reference
- **Homepage**: `app/page.tsx`
- **Service Pages**: `app/[service]/page.tsx`
- **About Page**: `app/ueber-uns/page.tsx`
- **Contact Page**: `app/kontakt/page.tsx`
- **Legal Pages**: `app/impressum/page.tsx`, `app/datenschutz/page.tsx`, `app/agb/page.tsx`

## 🏠 Homepage Updates

### Hero Section
**File**: `app/page.tsx` (lines 15-22)
```typescript
const heroData = {
  title: 'Ihr Partner für nachhaltiges Wachstum im Mittelstand',
  subtitle: 'Interim Management | KI-Transformation | Geschäftsentwicklung',
  primaryCTA: 'Kostenlose Erstberatung vereinbaren',
  primaryCTALink: '/kontakt',
  secondaryCTA: 'Leistungen ansehen',
  secondaryCTALink: '/interim-management',
};
```

### Feature Cards
**File**: `app/page.tsx` (lines 24-58)
```typescript
const featureCardsData = [
  {
    title: 'Interim Management',
    description: '...',
    icon: '👥',
    link: '/interim-management',
    features: [
      'Vertriebsführung (CSO/CRO)',
      'Unternehmenstransformation',
      'KI-Transformation',
      'Change Management',
    ],
  },
  // ... more cards
];
```

### KPI Statistics
**File**: `app/page.tsx` (lines 60-85)
```typescript
const kpiStatsData = [
  {
    value: '+44%',
    label: 'Umsatzsteigerung',
    description: 'Feinkosthersteller',
            industry: 'Strategische Expansion',
  },
  // ... more stats
];
```

## 🎯 Service Page Updates

### Interim Management
**File**: `app/interim-management/page.tsx`

#### Success Stories
```typescript
const successStories = [
  {
    industry: 'Lebensmittel & Getränke',
    challenge: 'Vertriebsstruktur optimieren und neue Märkte erschließen',
    solution: 'Implementierung einer datengetriebenen Vertriebsstrategie mit CRM-System',
    results: ['+44% Umsatzsteigerung', '+67% neue Kunden', '18 neue Märkte erschlossen'],
    duration: '12 Monate',
  },
  // ... more stories
];
```

### KI-Beratung
**File**: `app/ki-beratung/page.tsx`

#### AI Solutions
```typescript
const aiSolutions = [
  {
    title: 'Absatzprognosen',
    description: '...',
    icon: '📊',
  },
  // ... more solutions
];
```

### Geschäftsentwicklung
**File**: `app/internationalisierung/page.tsx`

#### Export Markets
```typescript
const exportMarkets = [
  {
    region: 'DACH & EU',
    description: '...',
    countries: ['Deutschland', 'Österreich', 'Schweiz', 'EU-Länder'],
  },
  // ... more markets
];
```

## 👤 About Page Updates

### Profile Information
**File**: `app/ueber-uns/page.tsx`

#### Personal Details
```typescript
const profileData = {
  name: 'António Freiherr von Strachwitz',
  title: 'Gründer und Geschäftsführer von Strachwitz Consulting',
  experience: 'Über 15 Jahre Führungserfahrung im deutschen Mittelstand und internationalen Konzernen.',
  expertise: ['Vertriebsführung', 'Digitale Transformation', 'Internationale Geschäftsentwicklung'],
};
```

#### Success Stories
```typescript
const successStories = [
  {
    industry: 'Lebensmittel & Getränke',
    challenge: '...',
    solution: '...',
    results: ['+44% Umsatzsteigerung', '+67% neue Kunden'],
    duration: '12 Monate',
  },
  // ... more stories
];
```

## 📞 Contact Information Updates

### Contact Details
**File**: `app/kontakt/page.tsx`

#### Company Information
```typescript
const contactInfo = {
  name: 'António Freiherr von Strachwitz',
  address: 'Wüstenfelden 3, 97355 Castell, Deutschland',
  phone: '+49 9325 39 199 63',
  email: 'kontakt@strachwitzconsulting.com',
  linkedin: 'https://www.linkedin.com/company/strachwitz-consulting',
};
```

#### Office Hours
```typescript
const officeHours = {
  weekdays: 'Montag - Freitag: 9:00 - 18:00 Uhr',
  weekends: 'Samstag - Sonntag: Nach Vereinbarung',
};
```

## 🏭 Industry Page Updates

### Industry Data
**File**: `app/branchen/page.tsx`

#### Industry Information
```typescript
const industries = [
  {
    name: 'Lebensmittel & Getränke',
    description: 'LEH, Food Service, Molkerei, Feinkost, Getränke, Eigenmarke',
    challenges: [
      'Wettbewerbsintensität und Preisdruck',
      'Regulatorische Anforderungen (HACCP, IFS, BRC)',
      // ... more challenges
    ],
    solutions: [
      'Vertriebsoptimierung und Markterschließung',
      'Prozessoptimierung und Qualitätsmanagement',
      // ... more solutions
    ],
    kiUseCases: [
      'Predictive Analytics für Absatzprognosen',
      'Computer Vision für Qualitätskontrolle',
      // ... more use cases
    ],
    results: [
      '+44% Umsatzsteigerung - Feinkosthersteller',
      '+51% Wachstum - Food Service Molkereibetrieb',
      // ... more results
    ],
  },
  // ... more industries
];
```

## 🔧 Technical Content Updates

### Meta Tags
**File**: Each page file (lines 3-10)
```typescript
export const metadata: Metadata = {
  title: 'Page Title - Strachwitz Consulting',
  description: 'Page description for SEO',
  openGraph: {
    title: 'Page Title - Strachwitz Consulting',
    description: 'Page description for social media',
  },
};
```

### Navigation Links
**File**: `components/Header.tsx` (lines 8-16)
```typescript
const navigation = [
  { name: 'Startseite', href: '/' },
  { name: 'Interim Management', href: '/interim-management' },
  { name: 'KI-Beratung', href: '/ki-beratung' },
  { name: 'Geschäftsentwicklung', href: '/internationalisierung' },
  { name: 'Branchen', href: '/branchen' },
  { name: 'Über uns', href: '/ueber-uns' },
  { name: 'Kontakt', href: '/kontakt' },
];
```

## 📋 Content Guidelines

### Language Rules
- **Language**: German (de-DE) throughout
- **Formality**: "Sie-Ansprache" (formal address)
- **Tone**: Professional, trustworthy, solution-focused
- **Avoid**: "signifikant", "großartige"

### Content Structure
- **Problem → Solution → Results** format for case studies
- **Clear value propositions** in hero sections
- **Anonymized results** with industry/size context
- **Actionable CTAs** on every page

### SEO Best Practices
- **Meta descriptions**: 150-160 characters
- **Page titles**: Include "Strachwitz Consulting"
- **Heading hierarchy**: H1 → H2 → H3
- **Internal linking**: Link between related pages

## 🖼️ Image Updates

### Logo Updates
1. Replace `public/logo.png` with new logo
2. Update `public/logo-white.png` if needed
3. Test on all pages

### Profile Photos
1. Replace `public/antonio-profile.png` for about page
2. Replace `public/antonio-hero.png` for homepage
3. Ensure proper sizing and optimization

### Image Guidelines
- **Format**: PNG or WebP for logos, JPG for photos
- **Size**: Optimize for web (max 500KB)
- **Dimensions**: Use Next.js Image component with proper width/height
- **Alt text**: Descriptive alt text for accessibility

## 🔄 Update Workflow

### 1. Content Review
- [ ] Review content for accuracy
- [ ] Check grammar and spelling
- [ ] Verify contact information
- [ ] Update meta tags if needed

### 2. Technical Review
- [ ] Test on development server
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Test contact form functionality

### 3. Deployment
- [ ] Commit changes to git
- [ ] Push to repository
- [ ] Verify deployment on staging
- [ ] Deploy to production

### 4. Post-Deployment
- [ ] Test all pages on production
- [ ] Verify SEO meta tags
- [ ] Check analytics tracking
- [ ] Monitor for any issues

## 📞 Support

### Content Questions
- **Business Content**: António Freiherr von Strachwitz
- **Technical Issues**: Development team

### Emergency Updates
- **Phone**: +49 9325 39 199 63
- **Email**: kontakt@strachwitzconsulting.com

---

**Last Updated**: August 2024
**Version**: 1.0
