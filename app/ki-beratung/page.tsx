import type { Metadata } from 'next';
import CTABar from '@/components/ui/CTABar';

export const metadata: Metadata = {
  title: 'KI-Beratung - Strachwitz Consulting',
  description: 'Strategische KI-Implementierung für den Mittelstand. Von Readiness Assessment bis zur vollständigen Transformation.',
  openGraph: {
    title: 'KI-Beratung - Strachwitz Consulting',
    description: 'Strategische KI-Implementierung für den Mittelstand.',
  },
};

const solutions = [
  {
    title: 'Absatzprognosen',
    description: 'Präzise Vorhersagen für bessere Planung und Optimierung Ihrer Vertriebsaktivitäten.',
    benefit: 'Reduzierung von Überbeständen um 25%',
    example: 'Lebensmittelhersteller - 30% genauere Prognosen',
  },
  {
    title: 'Predictive Analytics',
    description: 'Datengetriebene Entscheidungen durch vorausschauende Analysen.',
    benefit: 'Früherkennung von Trends und Risiken',
    example: 'Maschinenbau - 40% weniger Ausfallzeiten',
  },
  {
    title: 'Computer Vision',
    description: 'Automatisierte Qualitätskontrolle und Prozessoptimierung.',
    benefit: '-30% Fehlerquote in der Produktion',
    example: 'Automobilzulieferer - 99.5% Erkennungsrate',
  },
  {
    title: 'Automatisierung',
    description: 'Intelligente Automatisierung von Routineaufgaben.',
    benefit: '50% Zeitersparnis bei administrativen Aufgaben',
    example: 'Handelsunternehmen - 70% weniger manuelle Eingaben',
  },
  {
    title: 'Kundenservice',
    description: 'KI-gestützte Kundenbetreuung und Support-Optimierung.',
    benefit: '24/7 Verfügbarkeit, 60% schnellere Antwortzeiten',
    example: 'Dienstleister - 80% Kundenzufriedenheit',
  },
  {
    title: 'Preisoptimierung',
    description: 'Dynamische Preisgestaltung basierend auf Markt- und Kundendaten.',
    benefit: '+15% durchschnittlicher Verkaufspreis',
    example: 'E-Commerce - 25% höhere Conversion-Rate',
  },
];

const packages = [
  {
    title: 'KI-Readiness Assessment',
    description: 'Umfassende Bewertung Ihrer KI-Bereitschaft und Identifikation von Chancen.',
    duration: '2-3 Wochen',
    outcome: 'Detaillierter Bericht mit Roadmap',
    suitable: 'Alle Unternehmen, die KI-Strategie entwickeln möchten',
  },
  {
    title: 'Pilot-Projekt & Proof of Concept',
    description: 'Praktische Umsetzung eines KI-Use-Cases in Ihrem Unternehmen.',
    duration: '8-12 Wochen',
    outcome: 'Funktionierender KI-Prototyp',
    suitable: 'Unternehmen mit konkreten KI-Ideen',
  },
  {
    title: 'KI-Vertriebsstrategie & Roadmap',
    description: 'Entwicklung einer umfassenden KI-Strategie für Ihren Vertrieb.',
    duration: '12-24 Monate',
    outcome: 'Implementierte KI-Lösungen',
    suitable: 'Unternehmen mit etabliertem Vertrieb',
  },
  {
    title: 'DSGVO & KI-Verordnung Audit',
    description: 'Compliance-Check für Ihre KI-Anwendungen und Datenverarbeitung.',
    duration: '4-6 Wochen',
    outcome: 'Compliance-Bericht mit Handlungsempfehlungen',
    suitable: 'Unternehmen mit KI-Anwendungen',
  },
];

const trainings = [
  {
    title: 'KI für Führungskräfte',
    description: 'Grundlagen und strategische Implikationen von KI für Entscheidungsträger.',
    duration: '1 Tag',
    format: 'Workshop',
  },
  {
    title: 'EU AI Act Compliance',
    description: 'Verständnis der neuen KI-Verordnung und deren Auswirkungen.',
    duration: '4 Stunden',
    format: 'Seminar',
  },
  {
    title: 'Praktische KI-Anwendungen',
    description: 'Hands-on Workshop zu konkreten KI-Tools und -Anwendungen.',
    duration: '2 Tage',
    format: 'Workshop',
  },
  {
    title: 'Datengetriebener Vertrieb',
    description: 'Methoden und Tools für datenbasierte Vertriebsentscheidungen.',
    duration: '1 Tag',
    format: 'Training',
  },
];

export default function KIBeratungPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-tertiary text-white py-20 lg:py-32">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              KI-Beratung
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
              Strategische KI-Implementierung für den Mittelstand
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Von der ersten Analyse bis zur vollständigen Transformation - wir begleiten Sie durch Ihre KI-Reise.
            </p>
          </div>
        </div>
      </section>

      {/* KI-Lösungen Section */}
      <section id="loesungen" className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
              KI-Lösungen für Ihren Erfolg
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bewährte KI-Anwendungen, die messbare Ergebnisse liefern
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {solution.description}
                </p>
                <div className="space-y-2">
                  <div className="bg-accent rounded-lg p-3">
                    <p className="text-sm font-semibold text-primary">Nutzen:</p>
                    <p className="text-sm text-gray-700">{solution.benefit}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <p className="text-sm font-semibold text-secondary">Beispiel:</p>
                    <p className="text-sm text-gray-600">{solution.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leistungspakete Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
              Unsere Leistungspakete
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Maßgeschneiderte Lösungen für verschiedene Anforderungen und Budgets
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  {pkg.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {pkg.description}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">Dauer: {pkg.duration}</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">Ergebnis: {pkg.outcome}</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-gray-600">Geeignet für: {pkg.suitable}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schulungen Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
              Schulungen & Workshops
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Wissensvermittlung und praktische Anwendung von KI in Ihrem Unternehmen
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainings.map((training, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border-l-4 border-secondary">
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {training.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {training.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {training.duration}
                  </div>
                  <div className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {training.format}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABar
        title="KI-Potenzialanalyse starten"
        description="Lassen Sie uns gemeinsam Ihr KI-Potenzial identifizieren und die ersten Schritte planen."
        ctaText="KI-Potenzialanalyse starten"
        ctaLink="/kontakt"
      />
    </>
  );
}

