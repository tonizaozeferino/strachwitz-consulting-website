import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutz - Strachwitz Consulting',
  description: 'Datenschutzerklärung von Strachwitz Consulting.',
};

export default function DatenschutzPage() {
  return (
    <div className="py-16 lg:py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-8">
            Datenschutzerklärung
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">
              Datenschutz auf einen Blick
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  Allgemeine Hinweise
                </h3>
                <p className="text-gray-600">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  Datenerfassung auf dieser Website
                </h3>
                <p className="text-gray-600">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  Wie erfassen wir Ihre Daten?
                </h3>
                <p className="text-gray-600">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  Wofür nutzen wir Ihre Daten?
                </h3>
                <p className="text-gray-600">
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  Welche Rechte haben Sie bezüglich Ihrer Daten?
                </h3>
                <p className="text-gray-600">
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  Kontaktformular
                </h3>
                <p className="text-gray-600">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  Cookies
                </h3>
                <p className="text-gray-600">
                  Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Sie dienen dazu, unsere Website benutzerfreundlicher, effektiver und sicherer zu machen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
