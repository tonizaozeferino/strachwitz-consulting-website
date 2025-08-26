# Strachwitz Consulting Website

Eine professionelle Website für Strachwitz Consulting - Ihr Partner für nachhaltiges Wachstum im Mittelstand.

## 🚀 Technologie-Stack

- **Framework**: Next.js 14 (App Router)
- **Sprache**: TypeScript
- **Styling**: TailwindCSS
- **Deployment**: Vercel (empfohlen)
- **SEO**: Next.js Metadata API, JSON-LD Schema
- **Formulare**: API Routes mit Validierung

## 📁 Projektstruktur

```
strachwitz-consulting/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   ├── globals.css        # Globale Styles
│   ├── layout.tsx         # Root Layout
│   └── page.tsx           # Homepage
├── components/            # React Komponenten
│   ├── ui/               # UI Komponenten
│   ├── Header.tsx        # Navigation
│   ├── Footer.tsx        # Footer
│   └── CookieBanner.tsx  # Cookie Banner
├── content/              # CMS Content (für zukünftige Erweiterungen)
├── lib/                  # Utility Funktionen
├── public/               # Statische Assets
└── styles/               # Zusätzliche Styles
```

## 🛠️ Installation & Entwicklung

### Voraussetzungen

- Node.js 18+ 
- npm oder yarn

### Lokale Entwicklung

1. **Repository klonen**
   ```bash
   git clone <repository-url>
   cd strachwitz-consulting
   ```

2. **Dependencies installieren**
   ```bash
   npm install
   ```

3. **Entwicklungsserver starten**
   ```bash
   npm run dev
   ```

4. **Browser öffnen**
   ```
   http://localhost:3000
   ```

### Verfügbare Scripts

```bash
npm run dev          # Entwicklungsserver starten
npm run build        # Produktions-Build erstellen
npm run start        # Produktions-Server starten
npm run lint         # ESLint ausführen
npm run format       # Prettier Formatierung
```

## 🎨 Design System

### Farben
- **Primary**: `#001f3f` (Dunkelblau)
- **Secondary**: `#3a6d8c` (Mittelblau)
- **Tertiary**: `#6a9ab0` (Hellblau)
- **Accent**: `#ead8b1` (Beige)
- **Background**: `#f8fafc` (Hellgrau)
- **Text**: `#0f172a` (Dunkelgrau)

### Typografie
- **Headings**: Merriweather (Serif)
- **Body**: Inter (Sans-Serif)

### Komponenten
- Responsive Design
- WCAG 2.1 AA konform
- Keyboard Navigation
- Screen Reader optimiert

## 📄 Seiten

### Hauptseiten
- **Startseite** (`/`) - Hero, Services, KPIs, Branchen
- **Interim Management** (`/interim-management`) - Vertriebsführung, Transformation, KI
- **KI-Beratung** (`/ki-beratung`) - Lösungen, Pakete, Schulungen
- **Geschäftsentwicklung** (`/internationalisierung`) - Export, Messen, Agenten
- **Branchen** (`/branchen`) - Branchenübersicht
- **Über uns** (`/ueber-uns`) - Team, Philosophie
- **Wissen** (`/wissen`) - Leitfäden, Events
- **Kontakt** (`/kontakt`) - Kontaktformular, Informationen

### Rechtliche Seiten
- **Impressum** (`/impressum`)
- **Datenschutz** (`/datenschutz`)
- **AGB** (`/agb`)

## 🔧 Konfiguration

### Umgebungsvariablen

Erstellen Sie eine `.env.local` Datei:

```env
# Website URL für Sitemap
SITE_URL=https://strachwitz-consulting.de

# E-Mail Service (für zukünftige Integration)
# EMAIL_SERVICE=sendgrid
# EMAIL_API_KEY=your_api_key
```

### Sitemap

Die Sitemap wird automatisch beim Build generiert:
```bash
npm run build  # Generiert sitemap.xml und robots.txt
```

## 🚀 Deployment

### Vercel (Empfohlen)

1. **Vercel Account erstellen**
   - Besuchen Sie [vercel.com](https://vercel.com)
   - GitHub Account verknüpfen

2. **Projekt importieren**
   ```bash
   # Vercel CLI installieren
   npm i -g vercel

   # Projekt deployen
   vercel
   ```

3. **Automatisches Deployment**
   - GitHub Repository mit Vercel verknüpfen
   - Jeder Push auf `main` Branch deployt automatisch

### Alternative: Andere Hosting-Provider

```bash
# Build erstellen
npm run build

# Statische Dateien exportieren (falls benötigt)
npm run export

# Dateien auf Server hochladen
```

## 📊 SEO & Performance

### Implementierte Features
- ✅ Meta Tags für alle Seiten
- ✅ Open Graph & Twitter Cards
- ✅ JSON-LD Schema Markup
- ✅ Automatische Sitemap
- ✅ Robots.txt
- ✅ Semantisches HTML
- ✅ Optimierte Bilder (Next.js Image)
- ✅ Lazy Loading

### Performance Optimierungen
- Code Splitting
- Tree Shaking
- CSS Purge (Tailwind)
- Optimierte Fonts
- Komprimierte Assets

## 🔒 Sicherheit

- CSRF Protection
- Input Validierung
- XSS Prevention
- Secure Headers
- HTTPS Enforcement

## 📱 Responsive Design

- Mobile First Ansatz
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-optimierte Navigation
- Optimierte Performance auf mobilen Geräten

## 🌐 Internationalisierung

- Deutsche Lokalisierung (de-DE)
- Sie-Ansprache
- Deutsche Datums- und Zahlenformate
- Lokalisierte Meta-Tags

## 🔄 Content Management

### Aktuelle Struktur
- Statische Inhalte in React Komponenten
- SEO-optimierte Meta-Tags
- Strukturierte Daten (JSON-LD)

### Zukünftige Erweiterungen
- Event-Management
- Newsletter-Integration

## 📞 Support & Wartung

### Regelmäßige Updates
```bash
# Dependencies aktualisieren
npm update

# Security Audits
npm audit
npm audit fix
```

### Monitoring
- Vercel Analytics
- Google Analytics (kann hinzugefügt werden)
- Error Tracking (Sentry, etc.)

## 📝 To-Do Liste

### Kurzfristig
- [ ] E-Mail Service Integration (SendGrid/AWS SES)
- [ ] CRM Integration
- [ ] Newsletter Double-Opt-In
- [ ] Google Analytics Setup

### Mittelfristig
- [ ] Event-Management
- [ ] Mehrsprachigkeit
- [ ] Dark Mode

### Langfristig
- [ ] CMS Integration
- [ ] E-Learning Plattform
- [ ] Kundenportal
- [ ] Mobile App

## 📄 Lizenz

Proprietär - Alle Rechte vorbehalten für Strachwitz Consulting.

---

**Entwickelt für Strachwitz Consulting**  
Castell, Bayern, Deutschland  
kontakt@strachwitzconsulting.com
