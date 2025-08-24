import type { Metadata } from 'next';
import CTABar from '@/components/ui/CTABar';

export const metadata: Metadata = {
  title: 'Interim Management - Strachwitz Consulting',
  description: 'Erfahrene Interim Manager für Vertriebsführung, Unternehmens transformation und KI-Transformation im deutschen Mittelstand.',
  openGraph: {
    title: 'Interim Management - Strachwitz Consulting',
    description: 'Erfahrene Interim Manager für Vertriebsführung, Unternehmens transformation und KI-Transformation.',
  },
};

const timelineData = [
  {
    phase: 'Phase 1: Analyse',
    title: 'Bestandsaufnahme & Zieldefinition',
    description: 'Detaillierte Analyse der aktuellen Situation, Identifikation von Herausforderungen und Definition klarer Ziele.',
    duration: '2-4 Wochen',
  },
  {
    phase: 'Phase 2: Mobilisierung',
    title: 'Team-Aufbau & Stakeholder-Management',
    description: 'Aufbau des Projektteams, Einbindung aller relevanten Stakeholder und Schaffung der notwendigen Strukturen.',
    duration: '4-6 Wochen',
  },
  {
    phase: 'Phase 3: Umsetzung',
    title: 'Implementierung & Change Management',
    description: 'Systematische Umsetzung der definierten Maßnahmen mit kontinuierlichem Monitoring und Anpassungen.',
    duration: '6-12 Monate',
  },
  {
    phase: 'Phase 4: Verankerung',
    title: 'Nachhaltigkeit & Wissenstransfer',
    description: 'Sicherstellung der langfristigen Erfolge durch Wissenstransfer und Etablierung nachhaltiger Prozesse.',
    duration: '2-4 Wochen',
  },
];

const faqData = [
  {
    question: 'Wie lange dauert ein typisches Interim Management Engagement?',
    answer: 'Die Dauer variiert je nach Projektumfang zwischen 3 Monaten und 2 Jahren. Vertriebsführung-Projekte dauern typischerweise 6-12 Monate, während umfassende Transformationen 12-24 Monate in Anspruch nehmen.',
  },
  {
    question: 'Welche Branchenerfahrung bringen Sie mit?',
    answer: 'Wir verfügen über umfassende Erfahrung in Lebensmittel & Getränke, Produktion & Industrie, Handel & Distribution sowie Logistik & Supply Chain. Unsere anonymisierten Erfolgsbeispiele zeigen messbare Ergebnisse in verschiedenen Branchen.',
  },
  {
    question: 'Wie erfolgt die Zusammenarbeit mit dem bestehenden Management?',
    answer: 'Wir arbeiten partnerschaftlich mit Ihrem bestehenden Management zusammen. Unser Ansatz ist es, Wissen zu transferieren und Ihre Teams zu stärken, anstatt sie zu ersetzen. Regelmäßige Abstimmungen und transparente Kommunikation sind dabei selbstverständlich.',
  },
  {
    question: 'Welche Erfolgsmessung wird durchgeführt?',
    answer: 'Wir definieren zu Projektbeginn klare KPIs und messen kontinuierlich den Fortschritt. Typische Metriken umfassen Umsatzsteigerungen, Prozessoptimierungen, Mitarbeiterzufriedenheit und ROI. Regelmäßige Berichte halten Sie über den Projektfortschritt auf dem Laufenden.',
  },
];

export default function InterimManagementPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-tertiary text-white py-20 lg:py-32">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Interim Management
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
              Erfahrene Führungskräfte für Ihre strategischen Herausforderungen
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Von Vertriebsführung bis Unternehmens transformation - wir übernehmen zeitlich begrenzte Führungsaufgaben und begleiten Sie durch komplexe Veränderungsprozesse.
            </p>
          </div>
        </div>
      </section>

      {/* Vertriebsführung Section */}
      <section id="vertriebsfuehrung" className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-8 text-center">
              Vertriebsführung (CSO/CRO)
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Strategische Vertriebsentwicklung
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Als Interim CSO/CRO entwickeln wir Ihre Vertriebsstrategie, optimieren Prozesse und führen Ihr Vertriebsteam zu messbaren Erfolgen. Unsere Expertise umfasst:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Vertriebsstrategie & Marktanalyse</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Team-Führung & Entwicklung</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Umsatzoptimierung & Pipeline-Management</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">CRM-Digitalisierung & Prozessoptimierung</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8">
                <h4 className="text-lg font-heading font-bold text-primary mb-4">
                  Erfolgsbeispiel: Feinkosthersteller
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Umsatzsteigerung:</span>
                    <span className="font-semibold text-secondary">+44%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Kundenakquise:</span>
                    <span className="font-semibold text-secondary">+67%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Vertriebseffizienz:</span>
                    <span className="font-semibold text-secondary">+38%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unternehmenstransformation Section */}
      <section id="transformation" className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-8 text-center">
              Unternehmenstransformation
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Digitale & Organisatorische Transformation
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Wir begleiten Sie durch umfassende Transformationsprozesse - von der digitalen Transformation bis zur organisatorischen Neuausrichtung.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="font-heading font-bold text-primary mb-2">Digitale Transformation</h4>
                    <p className="text-gray-600 text-sm">Implementierung digitaler Prozesse, Systeme und Arbeitsweisen</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="font-heading font-bold text-primary mb-2">Prozessoptimierung</h4>
                    <p className="text-gray-600 text-sm">Lean/Six Sigma Methoden für effiziente Abläufe</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="font-heading font-bold text-primary mb-2">Change Management</h4>
                    <p className="text-gray-600 text-sm">Strukturierte Begleitung von Veränderungsprozessen</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="font-heading font-bold text-primary mb-2">Organisationsentwicklung</h4>
                    <p className="text-gray-600 text-sm">Anpassung der Organisationsstruktur an neue Anforderungen</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                  4-Phasen-Ansatz
                </h3>
                <div className="space-y-6">
                  {timelineData.map((phase, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                        <span className="text-primary font-bold text-lg">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-secondary font-semibold mb-1">{phase.phase}</div>
                        <h4 className="font-heading font-bold text-primary mb-1">{phase.title}</h4>
                        <p className="text-gray-600 text-sm mb-2">{phase.description}</p>
                        <div className="text-xs text-gray-500">Dauer: {phase.duration}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KI-Transformation Section */}
      <section id="ki-transformation" className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-8 text-center">
              KI-Transformation
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Strategische KI-Implementierung
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Wir entwickeln Ihre KI-Strategie und begleiten Sie durch die gesamte Implementierung - von der ersten Analyse bis zur vollständigen Integration.
                </p>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-heading font-bold text-primary mb-1">KI-Strategie</h4>
                    <p className="text-gray-600 text-sm">Entwicklung einer maßgeschneiderten KI-Strategie für Ihr Unternehmen</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-heading font-bold text-primary mb-1">Readiness Assessment</h4>
                    <p className="text-gray-600 text-sm">Bewertung der KI-Bereitschaft und Identifikation von Chancen</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-heading font-bold text-primary mb-1">Implementierungsfahrplan</h4>
                    <p className="text-gray-600 text-sm">Detaillierter Plan für die schrittweise KI-Integration</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <h4 className="font-heading font-bold text-primary mb-1">Compliance & Recht</h4>
                    <p className="text-gray-600 text-sm">Sicherstellung der DSGVO- und EU AI Act-Konformität</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  KI-Use-Cases
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-heading font-bold text-primary mb-2">Vertrieb</h4>
                    <p className="text-gray-600 text-sm">Predictive Analytics, Lead Scoring, Preisoptimierung</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-heading font-bold text-primary mb-2">Produktion</h4>
                    <p className="text-gray-600 text-sm">Predictive Maintenance, Qualitätskontrolle, Optimierung</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-heading font-bold text-primary mb-2">Supply Chain</h4>
                    <p className="text-gray-600 text-sm">Demand Forecasting, Lageroptimierung, Routenplanung</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-heading font-bold text-primary mb-2">Administration</h4>
                    <p className="text-gray-600 text-sm">Dokumentenverarbeitung, Automatisierung, Kundenservice</p>
                  </div>
                </div>
                
                <div className="mt-6 bg-accent rounded-lg p-4">
                  <h4 className="font-heading font-bold text-primary mb-2">
                    Erfolgsbeispiel: Computer Vision
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Implementierung einer KI-gestützten Qualitätskontrolle in der Produktion
                  </p>
                  <div className="text-sm">
                    <span className="font-semibold text-secondary">-30% Fehlerquote</span>
                    <span className="text-gray-500 ml-2">•</span>
                    <span className="font-semibold text-secondary">+45% Effizienz</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-12 text-center">
              Häufig gestellte Fragen
            </h2>
            
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-heading font-bold text-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABar
        title="Interim-Gespräch buchen"
        description="Vereinbaren Sie ein persönliches Gespräch und erfahren Sie, wie wir Ihr Unternehmen durch die Transformation begleiten können."
        ctaText="Interim-Gespräch buchen"
        ctaLink="/kontakt"
      />
    </>
  );
}
