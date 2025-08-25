import type { Metadata } from 'next';
import CTABar from '@/components/ui/CTABar';

export const metadata: Metadata = {
  title: 'Geschäftsentwicklung - Strachwitz Consulting',
  description: 'Export & Markterschließung, Messebetreuung und Agententätigkeit für den deutschen Mittelstand.',
  openGraph: {
    title: 'Geschäftsentwicklung - Strachwitz Consulting',
    description: 'Export & Markterschließung, Messebetreuung und Agententätigkeit.',
  },
};

const exportRegions = [
  {
    region: 'DACH/EU',
    description: 'Vertriebsaufbau in Deutschland, Österreich, Schweiz und der Europäischen Union.',
    services: ['Marktanalyse', 'Partnerakquise', 'Vertriebsstrukturen', 'Compliance'],
  },
  {
    region: 'Afrika',
    description: 'Markteintritt und Geschäftsentwicklung in ausgewählten afrikanischen Märkten.',
    services: ['Marktstudien', 'Lokale Partner', 'Regulatorische Anforderungen', 'Logistik'],
  },
  {
    region: 'Naher Osten',
    description: 'Strategische Expansion in die Golfstaaten und den Nahen Osten.',
    services: ['Kulturspezifische Beratung', 'Joint Ventures', 'Messen & Events', 'Netzwerkaufbau'],
  },
  {
    region: 'Amerika',
    description: 'Geschäftsentwicklung in Nord- und Südamerika.',
    services: ['Markteintrittsstrategien', 'Vertriebskanäle', 'Rechtliche Aspekte', 'Lokalisierung'],
  },
];

const tradeShows = [
  {
    name: 'Anuga',
    description: 'Weltleitmesse für Lebensmittel und Getränke',
    location: 'Köln, Deutschland',
    frequency: 'Jährlich',
    focus: 'Lebensmittel & Getränke',
  },
  {
    name: 'ISM',
    description: 'Internationale Süßwarenmesse',
    location: 'Köln, Deutschland',
    frequency: 'Jährlich',
    focus: 'Süßwaren & Snacks',
  },
  {
    name: 'SIAL',
    description: 'Internationale Lebensmittelmesse',
    location: 'Paris, Frankreich',
    frequency: 'Alle 2 Jahre',
    focus: 'Lebensmittel & Innovation',
  },
  {
    name: 'Gulfood',
    description: 'Führende Lebensmittelmesse im Nahen Osten',
    location: 'Dubai, UAE',
    frequency: 'Jährlich',
    focus: 'Naher Osten Markt',
  },
  {
    name: 'Hannover Messe',
    description: 'Weltleitmesse der Industrie',
    location: 'Hannover, Deutschland',
    frequency: 'Jährlich',
    focus: 'Industrie & Technologie',
  },
  {
    name: 'FachPack',
    description: 'Europäische Fachmesse für Verpackung',
    location: 'Nürnberg, Deutschland',
    frequency: 'Jährlich',
    focus: 'Verpackung & Logistik',
  },
  {
    name: 'interpack',
    description: 'Internationale Messe für Verpackung und Prozesse',
    location: 'Düsseldorf, Deutschland',
    frequency: 'Alle 3 Jahre',
    focus: 'Verpackung & Prozesse',
  },
  {
    name: 'LogiMAT',
    description: 'Internationale Fachmesse für Intralogistik',
    location: 'Stuttgart, Deutschland',
    frequency: 'Jährlich',
    focus: 'Logistik & Supply Chain',
  },
];

const processSteps = [
  {
    step: 'Analyse',
    title: 'Marktanalyse & Zieldefinition',
    description: 'Umfassende Analyse der Zielmärkte, Wettbewerber und regulatorischen Anforderungen.',
    duration: '4-6 Wochen',
  },
  {
    step: 'Partner',
    title: 'Partnerakquise & Netzwerkaufbau',
    description: 'Identifikation und Kontaktaufnahme mit potenziellen Partnern und Vertriebspartnern.',
    duration: '8-12 Wochen',
  },
  {
    step: 'Launch',
    title: 'Markteintritt & Launch',
    description: 'Strukturierte Umsetzung des Markteintritts mit begleitenden Marketingmaßnahmen.',
    duration: '12-16 Wochen',
  },
  {
    step: 'Wachstum',
    title: 'Skalierung & Wachstum',
    description: 'Optimierung der Vertriebsstrukturen und Expansion in weitere Märkte.',
    duration: '6-12 Monate',
  },
];

export default function InternationalisierungPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-tertiary text-white py-20 lg:py-32">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Geschäftsentwicklung
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
              Export & Markterschließung für den deutschen Mittelstand
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Von DACH über EU bis Afrika und Naher Osten - wir begleiten Sie bei Ihrer internationalen Expansion.
            </p>
          </div>
        </div>
      </section>

      {/* Export & Markterschließung Section */}
      <section id="export" className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
              Export & Markterschließung
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Systematische Erschließung neuer Märkte mit bewährten Methoden und lokalem Know-how
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {exportRegions.map((region, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  {region.region}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {region.description}
                </p>
                <div className="space-y-2">
                  {region.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center">
                      <svg className="w-4 h-4 text-secondary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Messebetreuung Section */}
      <section id="messen" className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
              Messebetreuung
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professionelle Messeauftritte mit messbarem ROI - von der Strategie bis zur Lead-Generierung
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {tradeShows.map((show, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-heading font-bold text-primary mb-2">
                  {show.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {show.description}
                </p>
                <div className="space-y-1 text-xs text-gray-500">
                  <div>📍 {show.location}</div>
                  <div>🕒 {show.frequency}</div>
                  <div>🎯 {show.focus}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-heading font-bold text-primary mb-6 text-center">
              Unsere Messebetreuung umfasst
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">📋</span>
                </div>
                <h4 className="font-heading font-bold text-primary mb-2">Strategie & Planung</h4>
                <p className="text-gray-600 text-sm">Messekonzept, Zielgruppenanalyse, Budgetplanung</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🎨</span>
                </div>
                <h4 className="font-heading font-bold text-primary mb-2">Organisation & Design</h4>
                <p className="text-gray-600 text-sm">Standgestaltung, Materialien, Personalplanung</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">📊</span>
                </div>
                <h4 className="font-heading font-bold text-primary mb-2">Leads & ROI</h4>
                <p className="text-gray-600 text-sm">Lead-Generierung, Follow-up, Erfolgsmessung</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agententätigkeit Section */}
      <section id="agenten" className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
              Agententätigkeit
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professionelle Vertretung Ihrer Interessen im In- und Ausland
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                Deutschland
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-heading font-bold text-primary mb-2">LEH-Neukunden</h4>
                  <p className="text-gray-600 text-sm">Akquise und Betreuung von Lebensmitteleinzelhändlern</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-heading font-bold text-primary mb-2">Food Service</h4>
                  <p className="text-gray-600 text-sm">Vertrieb an Gastronomie und Großküchen</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-heading font-bold text-primary mb-2">Industrie</h4>
                  <p className="text-gray-600 text-sm">B2B-Vertrieb an Industriekunden</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-heading font-bold text-primary mb-2">Eigenmarken</h4>
                  <p className="text-gray-600 text-sm">Entwicklung und Vertrieb von Eigenmarken</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                International
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-heading font-bold text-primary mb-2">Markteintritt</h4>
                  <p className="text-gray-600 text-sm">Strategische Beratung und Umsetzung</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-heading font-bold text-primary mb-2">Partner-Management</h4>
                  <p className="text-gray-600 text-sm">Akquise und Betreuung von Vertriebspartnern</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-heading font-bold text-primary mb-2">Verhandlungen</h4>
                  <p className="text-gray-600 text-sm">Professionelle Verhandlungsführung</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-heading font-bold text-primary mb-2">Compliance</h4>
                  <p className="text-gray-600 text-sm">Rechtliche und regulatorische Aspekte</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
              Compliance & Recht
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sicherstellung der rechtlichen Konformität bei internationalen Geschäften
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">📋</span>
                </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">DSGVO</h3>
              <p className="text-gray-600 text-sm">
                Datenschutzkonforme Verarbeitung und Übertragung von Daten im internationalen Geschäft
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🛡️</span>
                </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">EU KI-VO</h3>
              <p className="text-gray-600 text-sm">
                Compliance mit der neuen KI-Verordnung bei KI-gestützten Geschäftsprozessen
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🌍</span>
                </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Export-Compliance</h3>
              <p className="text-gray-600 text-sm">
                Einhaltung von Exportbestimmungen und internationalen Handelsregeln
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prozess-Timeline Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
              Unser Prozess
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Systematischer Ansatz für erfolgreiche internationale Expansion
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 w-16 h-16 bg-accent rounded-full flex items-center justify-center mr-6">
                    <span className="text-primary font-bold text-xl">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-secondary font-semibold mb-1">{step.step}</div>
                    <h3 className="text-xl font-heading font-bold text-primary mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-2 leading-relaxed">{step.description}</p>
                    <div className="text-sm text-gray-500">Dauer: {step.duration}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABar
        title="Expansionsgespräch vereinbaren"
        description="Lassen Sie uns gemeinsam Ihre internationale Expansion planen und umsetzen."
        ctaText="Expansionsgespräch vereinbaren"
        ctaLink="/kontakt"
      />
    </>
  );
}

