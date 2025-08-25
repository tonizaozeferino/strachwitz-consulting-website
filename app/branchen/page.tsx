'use client';

import CTABar from '@/components/ui/CTABar';



const industries = [
  {
    name: 'Lebensmittel & Getränke',
    description: 'LEH, Food Service, Molkerei, Feinkost, Getränke, Eigenmarke',
    challenges: [
      'Wettbewerbsintensität und Preisdruck',
      'Regulatorische Anforderungen (HACCP, IFS, BRC)',
      'Saisonale Schwankungen und Nachfrageprognosen',
      'Qualitätssicherung und Rückverfolgbarkeit',
    ],
    solutions: [
      'Vertriebsoptimierung und Markterschließung',
      'Prozessoptimierung und Qualitätsmanagement',
      'KI-gestützte Nachfrageprognosen',
      'Digitalisierung der Lieferkette',
    ],
    kiUseCases: [
      'Predictive Analytics für Absatzprognosen',
      'Computer Vision für Qualitätskontrolle',
      'Automatisierte Bestellprozesse',
      'Kundensegmentierung und Personalisierung',
    ],
    results: [
      '+44% Umsatzsteigerung - Feinkosthersteller',
      '+51% Wachstum - Food Service Molkereibetrieb',
      '-30% Fehlerquote - KI-Qualitätskontrolle',
    ],
  },
  {
    name: 'Produktion & Industrie',
    description: 'Maschinenbau, Automobilzulieferer, Verpackung, Metall, Chemie, Konsumgüter',
    challenges: [
      'Globaler Wettbewerb und Kostendruck',
      'Komplexe Lieferketten und Just-in-Time Produktion',
      'Qualitätsanforderungen und Compliance',
      'Digitalisierung und Industrie 4.0',
    ],
    solutions: [
      'Lean Manufacturing und Prozessoptimierung',
      'Supply Chain Management und Logistik',
      'Qualitätsmanagement und Zertifizierung',
      'Digitale Transformation und KI-Integration',
    ],
    kiUseCases: [
      'Predictive Maintenance für Maschinen',
      'Computer Vision für Qualitätskontrolle',
      'Optimierung von Produktionsplanung',
      'Energieeffizienz und Nachhaltigkeit',
    ],
    results: [
      '+45% Effizienz - Maschinenbau',
      '50% weniger Ausfallzeiten - Automobilzulieferer',
      '-25% Energiekosten - Chemieunternehmen',
    ],
  },
  {
    name: 'Handel & Distribution',
    description: 'Großhandel, E-Commerce, Discount/Einzelhandel, Fachhandel, Import/Export',
    challenges: [
      'Omnichannel-Strategien und Digitalisierung',
      'Lageroptimierung und Bestandsmanagement',
      'Kundenerwartungen und Servicequalität',
      'Internationale Expansion und Markteintritt',
    ],
    solutions: [
      'Omnichannel-Strategie und E-Commerce',
      'Lager- und Bestandsoptimierung',
      'Kundenservice und CRM-Systeme',
      'Internationale Markterschließung',
    ],
    kiUseCases: [
      'Demand Forecasting und Bestandsoptimierung',
      'Personalized Marketing und Empfehlungssysteme',
      'Chatbots und Kundenservice-Automatisierung',
      'Preisoptimierung und Dynamic Pricing',
    ],
    results: [
      '+25% Conversion-Rate - E-Commerce',
      '50% Routineanfragen automatisiert - Kundenservice',
      '+15% durchschnittlicher Verkaufspreis',
    ],
  },
  {
    name: 'Logistik & Supply Chain',
    description: 'Spedition, Lager, Kühlkette, Last-Mile, international',
    challenges: [
      'Komplexe Lieferketten und Risikomanagement',
      'Kostenoptimierung und Effizienzsteigerung',
      'Nachhaltigkeit und CO2-Reduktion',
      'Last-Mile-Delivery und Kundenzufriedenheit',
    ],
    solutions: [
      'Supply Chain Optimierung und Risikomanagement',
      'Route-Optimierung und Transportplanung',
      'Nachhaltige Logistik und Green Supply Chain',
      'Last-Mile-Optimierung und Kundenservice',
    ],
    kiUseCases: [
      'Route-Optimierung und Transportplanung',
      'Predictive Analytics für Nachfrageprognosen',
      'Automatisierte Lagerverwaltung',
      'Real-time Tracking und Monitoring',
    ],
    results: [
      '-20% Transportkosten - Spedition',
      '+30% Liefergenauigkeit - Kühlkette',
      '40% weniger CO2-Emissionen',
    ],
  },
  {
    name: 'Dienstleistungen',
    description: 'IT/SaaS, Finanzdienstl., Beratung, FM, Personaldienstl.',
    challenges: [
      'Digitalisierung und Technologie-Integration',
      'Kundenerwartungen und Servicequalität',
      'Skalierung und Wachstum',
      'Talent-Akquise und Mitarbeiterbindung',
    ],
    solutions: [
      'Digitale Transformation und KI-Integration',
      'Service-Design und Kundenerfahrung',
      'Skalierungsstrategien und Prozessoptimierung',
      'Talent-Management und Employer Branding',
    ],
    kiUseCases: [
      'Chatbots und Kundenservice-Automatisierung',
      'Predictive Analytics für Kundenverhalten',
      'Automatisierte Dokumentenverarbeitung',
      'Personalized Marketing und Lead Scoring',
    ],
    results: [
      '80% Kundenzufriedenheit - Dienstleister',
      '+60% schnellere Antwortzeiten - Kundenservice',
      '70% weniger manuelle Eingaben - Administration',
    ],
  },
  {
    name: 'Technologie & Innovation',
    description: 'SaaS, Industrie 4.0, IoT, CleanTech, Medizintechnik',
    challenges: [
      'Schnelle Technologie-Entwicklung und Innovation',
      'Markteintritt und Produkt-Market-Fit',
      'Skalierung und internationale Expansion',
      'Talent-Akquise und Wissensmanagement',
    ],
    solutions: [
      'Innovationsmanagement und Produktentwicklung',
      'Go-to-Market-Strategien und Markteintritt',
      'Skalierungsstrategien und internationale Expansion',
      'Talent-Management und Wissensmanagement',
    ],
    kiUseCases: [
      'KI-gestützte Produktentwicklung',
      'Predictive Analytics für Marktanalyse',
      'Automatisierte Qualitätssicherung',
      'Intelligente IoT-Plattformen',
    ],
    results: [
      '+200% ROI - SaaS-Startup',
      '5 neue Länder - Medizintechnik',
      '+150% Marktanteil - CleanTech',
    ],
  },
];

export default function BranchenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-tertiary text-white py-20 lg:py-32">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Branchen
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
              Spezialisierte Lösungen für Ihren Markt
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Wir verstehen die spezifischen Herausforderungen und Chancen in Ihrer Branche und entwickeln maßgeschneiderte Lösungen.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
              Unsere Branchen-Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sechs Branchen, in denen wir nachweisbare Erfolge erzielt haben
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-accent hover:scale-105 transition-all duration-300 group cursor-pointer"
                onClick={() => document.getElementById(`industry-${index}`)?.scrollIntoView({ behavior: 'smooth' })}
              >
                <h3 className="text-lg font-heading font-semibold text-primary group-hover:text-primary mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-700">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Industry Sections */}
      {industries.map((industry, index) => (
        <section
          key={index}
          id={`industry-${index}`}
          className={`py-16 lg:py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
                  {industry.name}
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  {industry.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Challenges & Solutions */}
                <div>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                    Herausforderungen & Lösungen
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-heading font-bold text-secondary mb-3">
                        Typische Herausforderungen
                      </h4>
                      <ul className="space-y-2">
                        {industry.challenges.map((challenge, challengeIndex) => (
                          <li key={challengeIndex} className="flex items-start">
                            <svg className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-600 text-sm">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-heading font-bold text-secondary mb-3">
                        Unsere Lösungen
                      </h4>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-600 text-sm">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* KI Use Cases & Results */}
                <div>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                    KI-Use-Cases & Ergebnisse
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-heading font-bold text-secondary mb-3">
                        KI-Anwendungen
                      </h4>
                      <div className="space-y-3">
                        {industry.kiUseCases.map((useCase, useCaseIndex) => (
                          <div key={useCaseIndex} className="bg-white rounded-lg p-4 border-l-4 border-accent">
                            <p className="text-gray-600 text-sm">{useCase}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-heading font-bold text-secondary mb-3">
                        Anonymisierte Erfolge
                      </h4>
                      <div className="space-y-3">
                        {industry.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="bg-accent rounded-lg p-4">
                            <p className="text-primary font-semibold text-sm">{result}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTABar
        title="Branchenlösung anfragen"
        description="Lassen Sie uns gemeinsam die spezifischen Herausforderungen Ihrer Branche angehen."
        ctaText="Branchenlösung anfragen"
        ctaLink="/kontakt"
      />
    </>
  );
}

