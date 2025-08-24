import type { Metadata } from 'next';
import Hero from '@/components/ui/Hero';
import FeatureCards from '@/components/ui/FeatureCards';
import KPIStats from '@/components/ui/KPIStats';
import CTABar from '@/components/ui/CTABar';

export const metadata: Metadata = {
  title: 'Strachwitz Consulting - Ihr Partner für nachhaltiges Wachstum im Mittelstand',
  description: 'Interim Management, KI-Beratung und Geschäftsentwicklung für den deutschen Mittelstand. Expertise in Vertriebsführung, Digitalisierung und Internationalisierung.',
  openGraph: {
    title: 'Strachwitz Consulting - Ihr Partner für nachhaltiges Wachstum im Mittelstand',
    description: 'Interim Management, KI-Beratung und Geschäftsentwicklung für den deutschen Mittelstand.',
  },
};

const heroData = {
  title: 'Ihr Partner für nachhaltiges Wachstum im Mittelstand',
  subtitle: 'Interim Management | KI-Transformation | Geschäftsentwicklung',
  primaryCTA: 'Kostenlose Erstberatung vereinbaren',
  primaryCTALink: '/kontakt',
  secondaryCTA: 'Leistungen ansehen',
  secondaryCTALink: '/interim-management',
};

const featureCardsData = [
  {
    title: 'Interim Management',
    description: 'Erfahrene Führungskräfte für Ihre strategischen Herausforderungen - von Vertriebsführung bis Unternehmens transformation.',
    icon: '👥',
    link: '/interim-management',
    features: [
      'Vertriebsführung (CSO/CRO)',
      'Unternehmenstransformation',
      'KI-Transformation',
      'Change Management',
    ],
  },
  {
    title: 'KI-Beratung',
    description: 'Strategische KI-Implementierung für den Mittelstand - von Readiness Assessment bis zur vollständigen Transformation.',
    icon: '🤖',
    link: '/ki-beratung',
    features: [
      'KI-Readiness Assessment',
      'Pilot-Projekte & PoC',
      'KI-Vertriebsstrategie',
      'DSGVO & KI-Verordnung',
    ],
  },
  {
    title: 'Geschäftsentwicklung',
    description: 'Internationale Expansion und Markterschließung - von DACH über EU bis Afrika und Naher Osten.',
    icon: '🌍',
    link: '/internationalisierung',
    features: [
      'Export & Markterschließung',
      'Messebetreuung',
      'Agententätigkeit',
      'Compliance & Recht',
    ],
  },
];

const kpiStatsData = [
  {
    value: '+44%',
    label: 'Umsatzsteigerung',
    description: 'Feinkosthersteller',
    industry: '100 MA',
  },
  {
    value: '+51%',
    label: 'Wachstum',
    description: 'Food Service',
    industry: 'Molkereibetrieb EU',
  },
  {
    value: '+21%',
    label: 'Export',
    description: 'Käseproduzent',
    industry: 'EU',
  },
  {
    value: '18',
    label: 'Neue Märkte',
    description: 'Afrika/Naher Osten',
    industry: 'Markteintritt',
  },
  {
    value: '-30%',
    label: 'Fehlerquote',
    description: 'KI-Qualitätskontrolle',
    industry: 'Computer Vision',
  },
  {
    value: '50%',
    label: 'Automatisiert',
    description: 'Routineanfragen',
    industry: 'Kundenservice',
  },
];

const industries = [
  'Lebensmittel & Getränke',
  'Produktion & Industrie',
  'Handel & Distribution',
  'Logistik & Supply Chain',
  'Dienstleistungen',
  'Technologie & Innovation',
];

const whyUsData = [
  {
    title: 'Senior-Expertise',
    description: 'Über 15 Jahre Führungserfahrung im Mittelstand und internationalen Konzernen.',
    icon: '🎯',
  },
  {
    title: 'International erfahren, regional verwurzelt',
    description: 'Globale Perspektive mit tiefem Verständnis für den deutschen Mittelstand in Castell, Bayern.',
    icon: '🏠',
  },
  {
    title: 'Hands-on',
    description: 'Praktische Umsetzung statt theoretischer Konzepte - wir begleiten Sie bis zum Erfolg.',
    icon: '⚡',
  },
  {
    title: 'Technologie trifft Menschlichkeit',
    description: 'KI und Digitalisierung im Einklang mit Ihren Mitarbeitern und Unternehmenskultur.',
    icon: '🤝',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero {...heroData} />
      
      <FeatureCards cards={featureCardsData} />
      
      <KPIStats 
        stats={kpiStatsData}
        title="Erfolge unserer Kunden"
        subtitle="Anonymisierte Erfolgsbeispiele aus verschiedenen Branchen und Größenklassen"
      />
      
      {/* Industries Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
              Branchen-Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Wir verstehen die spezifischen Herausforderungen und Chancen in Ihrem Markt
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-accent hover:scale-105 transition-all duration-300 group"
              >
                <h3 className="text-lg font-heading font-semibold text-primary group-hover:text-primary">
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Us Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
              Warum Strachwitz Consulting?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vier Gründe, warum der deutsche Mittelstand auf uns vertraut
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUsData.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CTABar
        title="Bereit für den nächsten Schritt?"
        description="Vereinbaren Sie ein kostenloses Erstgespräch und erfahren Sie, wie wir Ihr Unternehmen unterstützen können."
        ctaText="Kostenlose Erstberatung vereinbaren"
        ctaLink="/kontakt"
      />
    </>
  );
}
