import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum - Strachwitz Consulting',
  description: 'Impressum und rechtliche Informationen von Strachwitz Consulting.',
};

export default function ImpressumPage() {
  return (
    <div className="py-16 lg:py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-8">
            Impressum
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">
              Angaben gemäß § 5 TMG
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  Strachwitz Consulting
                </h3>
                <p className="text-gray-600">
                  António Freiherr von Strachwitz<br />
                  Castell, Bayern<br />
                  Deutschland
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  Kontakt
                </h3>
                <p className="text-gray-600">
                  Telefon: +49 9325 39 199 63<br />
E-Mail: kontakt@strachwitzconsulting.com
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  Berufsbezeichnung und berufsrechtliche Regelungen
                </h3>
                <p className="text-gray-600">
                  Berater für Interim Management, KI-Beratung und Geschäftsentwicklung
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  Haftung für Inhalte
                </h3>
                <p className="text-gray-600">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  Urheberrecht
                </h3>
                <p className="text-gray-600">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
