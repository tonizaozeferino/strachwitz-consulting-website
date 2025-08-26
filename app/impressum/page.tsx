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
                <p className="text-gray-600">
                  António Freiherr von Strachwitz<br />
                  Wüstenfelden 3<br />
                  97355 Castell<br />
                  Deutschland
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  Kontakt
                </h3>
                <p className="text-gray-600">
                  Telefon: +49 156 78 55 60 038<br />
                  E-Mail: webmaster@strachwitzconsulting.com
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                </h3>
                <p className="text-gray-600">
                  António Freiherr von Strachwitz<br />
                  Wüstenfelden 3<br />
                  97355 Castell<br />
                  Deutschland
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-heading font-bold text-primary mb-4 mt-12">
              Haftungsausschluss (Disclaimer)
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  Haftung für Inhalte
                </h3>
                <p className="text-gray-600 mb-4">
                  Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p className="text-gray-600">
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  Haftung für Links
                </h3>
                <p className="text-gray-600 mb-4">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
                <p className="text-gray-600">
                  Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  Urheberrecht
                </h3>
                <p className="text-gray-600 mb-4">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                </p>
                <p className="text-gray-600 mb-4">
                  Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
                <p className="text-gray-600 mb-4">
                  Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                </p>
                <p className="text-gray-600">
                  Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-heading font-bold text-primary mb-4 mt-12">
              Online-Streitbeilegung
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br />
                <a href="https://ec.europa.eu/consumers/odr" className="text-secondary hover:text-primary transition-colors duration-200">
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
              <p className="text-gray-600">
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
