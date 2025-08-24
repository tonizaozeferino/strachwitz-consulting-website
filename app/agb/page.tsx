import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AGB - Strachwitz Consulting',
  description: 'Allgemeine Geschäftsbedingungen von Strachwitz Consulting.',
};

export default function AGBPage() {
  return (
    <div className="py-16 lg:py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-8">
            Allgemeine Geschäftsbedingungen
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">
              §1 Geltungsbereich
            </h2>
            
            <div className="space-y-6">
              <div>
                <p className="text-gray-600">
                  Diese Allgemeinen Geschäftsbedingungen gelten für alle Beratungsleistungen und Dienstleistungen der Strachwitz Consulting, die an Unternehmen und Privatpersonen erbracht werden.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  §2 Leistungsgegenstand
                </h3>
                <p className="text-gray-600">
                  Strachwitz Consulting bietet Beratungsleistungen in den Bereichen Interim Management, KI-Beratung und Geschäftsentwicklung an. Die konkreten Leistungen werden in separaten Vereinbarungen definiert.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  §3 Vertragsschluss
                </h3>
                <p className="text-gray-600">
                  Der Vertrag kommt durch Angebot und Annahme zustande. Schriftliche Vereinbarungen haben Vorrang vor diesen AGB.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  §4 Honorar und Zahlungsbedingungen
                </h3>
                <p className="text-gray-600">
                  Die Honorare werden individuell vereinbart und sind in Euro zu entrichten. Rechnungen sind innerhalb von 14 Tagen nach Rechnungsstellung zur Zahlung fällig.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  §5 Vertraulichkeit
                </h3>
                <p className="text-gray-600">
                  Strachwitz Consulting verpflichtet sich zur Verschwiegenheit über alle vertraulichen Informationen des Kunden, die im Rahmen der Zusammenarbeit bekannt werden.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  §6 Haftung
                </h3>
                <p className="text-gray-600">
                  Die Haftung ist auf Vorsatz und grobe Fahrlässigkeit beschränkt. Für leichte Fahrlässigkeit wird nicht gehaftet, soweit dies gesetzlich zulässig ist.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  §7 Schlussbestimmungen
                </h3>
                <p className="text-gray-600">
                  Diese AGB unterliegen deutschem Recht. Gerichtsstand ist Castell, Bayern. Sollten einzelne Bestimmungen unwirksam sein, bleibt der Vertrag im Übrigen wirksam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
