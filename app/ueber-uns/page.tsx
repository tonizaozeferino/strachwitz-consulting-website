import type { Metadata } from 'next';
import Image from 'next/image';
import CTABar from '@/components/ui/CTABar';

export const metadata: Metadata = {
  title: 'Über uns - Strachwitz Consulting',
  description: 'Lernen Sie António Freiherr von Strachwitz und unser Team kennen. Unsere Führungsphilosophie und Arbeitsweise.',
  openGraph: {
    title: 'Über uns - Strachwitz Consulting',
    description: 'Lernen Sie unser Team und unsere Philosophie kennen.',
  },
};

const successStories = [
  {
    industry: 'Lebensmittel & Getränke',
    challenge: 'Vertriebsstruktur optimieren und neue Märkte erschließen',
    solution: 'Implementierung einer datengetriebenen Vertriebsstrategie mit CRM-System',
    results: ['+44% Umsatzsteigerung', '+67% neue Kunden', '18 neue Märkte erschlossen'],
  },
  {
    industry: 'Maschinenbau',
    challenge: 'Digitale Transformation und Prozessoptimierung',
    solution: 'KI-gestützte Qualitätskontrolle und Predictive Maintenance',
    results: ['-30% Fehlerquote', '+45% Effizienz', '50% weniger Ausfallzeiten'],
  },
  {
    industry: 'Handel & Distribution',
    challenge: 'Internationale Expansion in den Nahen Osten',
    solution: 'Strukturierte Markteintrittsstrategie mit lokalen Partnern',
    results: ['+51% Wachstum', '5 neue Länder', '200% ROI'],
  },
];

const values = [
  {
    title: 'Datengetrieben',
    description: 'Entscheidungen basieren auf Fakten und Analysen, nicht auf Bauchgefühl.',
    icon: '📊',
  },
  {
    title: 'Agile',
    description: 'Flexible Anpassung an sich verändernde Anforderungen und Marktbedingungen.',
    icon: '⚡',
  },
  {
    title: 'Lean',
    description: 'Effiziente Prozesse und kontinuierliche Verbesserung ohne Verschwendung.',
    icon: '🎯',
  },
  {
    title: 'Partnerschaftlich',
    description: 'Lange Zusammenarbeit und gemeinsame Erfolge stehen im Mittelpunkt.',
    icon: '🤝',
  },
];

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-tertiary text-white py-20 lg:py-32">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Über uns
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
              Ihr Partner für nachhaltiges Wachstum im Mittelstand
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Lernen Sie unser Team, unsere Philosophie und unsere Arbeitsweise kennen.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
                António Freiherr von Strachwitz
              </h2>
              <p className="text-lg text-gray-600">
                Gründer und Geschäftsführer von Strachwitz Consulting
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/fotoas1.png"
                    alt="António Freiherr von Strachwitz"
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Kurzprofil
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  António Freiherr von Strachwitz verfügt über mehr als 15 Jahre Führungserfahrung im deutschen Mittelstand und internationalen Konzernen. Seine Expertise umfasst Vertriebsführung, digitale Transformation und internationale Geschäftsentwicklung.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">15+ Jahre Führungserfahrung</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Internationale Projekte in 20+ Ländern</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Spezialisierung auf Mittelstand und Familienunternehmen</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">KI- und Digitalisierungsexperte</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Führungsphilosophie Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
              Unsere Führungsphilosophie
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bewährte Prinzipien für nachhaltigen Erfolg im Mittelstand
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                Menschen im Mittelpunkt
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Wir glauben daran, dass der Erfolg eines Unternehmens von seinen Mitarbeitern abhängt. Unsere Transformationen berücksichtigen immer die menschlichen Aspekte und fördern eine Kultur der kontinuierlichen Verbesserung.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Technologie ist ein Werkzeug, um Menschen zu unterstützen - nicht zu ersetzen. Wir implementieren KI und digitale Lösungen so, dass sie die Fähigkeiten Ihrer Teams erweitern und nicht einschränken.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                                  <div className="w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-3xl">{value.icon}</span>
                </div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Arbeitsweise Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
              Unsere Arbeitsweise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Systematischer Ansatz für messbare Ergebnisse
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-5xl">🔍</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-4">
                  Analyse & Assessment
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Detaillierte Bestandsaufnahme Ihrer aktuellen Situation, Identifikation von Verbesserungspotenzialen und Definition klarer Ziele.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-5xl">📋</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-4">
                  Strategie & Planung
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Entwicklung einer maßgeschneiderten Strategie mit konkreten Handlungsschritten, Zeitplan und Erfolgsmetriken.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-5xl">🚀</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-4">
                  Umsetzung & Begleitung
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Praktische Umsetzung der Maßnahmen mit kontinuierlicher Begleitung, Monitoring und Anpassungen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Erfolgsbeispiele Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
              Erfolgsbeispiele
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Anonymisierte Erfolgsgeschichten mit messbaren Ergebnissen
            </p>
          </div>
          
          <div className="space-y-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                      {story.industry}
                    </div>
                    <h3 className="text-xl font-heading font-bold text-primary mb-4">
                      Herausforderung
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {story.challenge}
                    </p>
                    <h4 className="text-lg font-heading font-bold text-primary mb-4">
                      Unsere Lösung
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {story.solution}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-heading font-bold text-primary mb-4">
                      Ergebnisse
                    </h4>
                    <div className="space-y-3">
                      {story.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center">
                          <svg className="w-5 h-5 text-secondary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600 font-semibold">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABar
        title="Erstgespräch buchen"
        description="Lernen Sie uns persönlich kennen und erfahren Sie, wie wir Ihr Unternehmen unterstützen können."
        ctaText="Erstgespräch buchen"
        ctaLink="/kontakt"
      />
    </>
  );
}

