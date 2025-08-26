import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookies & Tracking - Strachwitz Consulting',
  description: 'Cookie- und Tracking-Hinweis von Strachwitz Consulting.',
};

export default function CookiesPage() {
  return (
    <div className="py-16 lg:py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-8">
            Cookie- und Tracking-Hinweis
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            (als Ergänzung zur Datenschutzerklärung)
          </p>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">
              Cookies
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und die Ihr Browser speichert. Sie dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
              </p>
              
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  Wir setzen folgende Kategorien ein:
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Notwendige Cookies (z. B. Session-ID, Spracheinstellungen)</li>
                  <li>Statistik-Cookies (z. B. Google Analytics, Matomo)</li>
                  <li>Marketing-Cookies (z. B. Facebook Pixel, LinkedIn Insight Tag, Google Ads Remarketing)</li>
                  <li>Funktionale Cookies (z. B. YouTube/Vimeo-Embeds, Google Maps, Fonts, Chat-Widgets)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  Rechtsgrundlage:
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Technisch notwendige Cookies → Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</li>
                  <li>Alle anderen Cookies → Art. 6 Abs. 1 lit. a DSGVO (Einwilligung via Cookie-Banner)</li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-2xl font-heading font-bold text-primary mb-4 mt-12">
              Cookie-Einwilligung
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                Beim ersten Besuch unserer Website zeigen wir Ihnen ein Cookie-Banner an, in dem Sie auswählen können, welche Cookies Sie zulassen möchten. Sie können Ihre Einwilligung jederzeit über den Link &ldquo;Cookie-Einstellungen&rdquo; am Seitenende widerrufen oder ändern.
              </p>
            </div>
            
            <h2 className="text-2xl font-heading font-bold text-primary mb-4 mt-12">
              Eingesetzte Tools und Dienste
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-600 mb-4">
                Wir nutzen u. a. folgende Dienste, die Cookies setzen oder personenbezogene Daten verarbeiten können:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Google Analytics (Statistik/Tracking)</li>
                <li>Google Ads & Remarketing (Marketing)</li>
                <li>Google Fonts (Darstellung von Schriften)</li>
                <li>Google reCAPTCHA (Spam-Schutz bei Formularen)</li>
                <li>YouTube / Vimeo (Videoeinbettungen)</li>
                <li>LinkedIn Insight Tag (Marketing/Tracking)</li>
                <li>Meta Pixel (Facebook/Instagram)</li>
                <li>X / Twitter Pixel</li>
                <li>Mailchimp / Brevo / Newsletter-Tool (nur falls Anmeldung erfolgt)</li>
                <li>Hosting-Provider (z. B. Vercel) – technisch notwendige Logfiles und Cookies</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-heading font-bold text-primary mb-4 mt-12">
              Speicherdauer
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-600 mb-4">
                Cookies werden unterschiedlich lange gespeichert:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Session-Cookies → bis zum Schließen des Browsers</li>
                <li>Permanente Cookies → zwischen 1 Tag und 2 Jahren (je nach Tool)</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-heading font-bold text-primary mb-4 mt-12">
              Widerruf & Opt-Out
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-600 mb-4">
                Sie können Cookies jederzeit über die Einstellungen Ihres Browsers löschen oder blockieren. Zudem können Sie über folgende Links ein Opt-Out durchführen:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  <strong>Google:</strong> 
                  <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors duration-200 ml-2">
                    https://adssettings.google.com/
                  </a>
                </li>
                <li>
                  <strong>Meta (Facebook/Instagram):</strong> 
                  <a href="https://www.facebook.com/settings?tab=ads" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors duration-200 ml-2">
                    https://www.facebook.com/settings?tab=ads
                  </a>
                </li>
                <li>
                  <strong>LinkedIn:</strong> 
                  <a href="https://www.linkedin.com/psettings/advertising/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors duration-200 ml-2">
                    https://www.linkedin.com/psettings/advertising/
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-heading font-bold text-primary mb-4">
                Wichtiger Hinweis
              </h3>
              <p className="text-gray-600">
                Diese Cookie-Information ist eine Ergänzung zu unserer vollständigen Datenschutzerklärung. 
                Für detaillierte Informationen über die Verarbeitung Ihrer personenbezogenen Daten besuchen Sie bitte unsere 
                <a href="/datenschutz" className="text-secondary hover:text-primary transition-colors duration-200 font-semibold">
                  Datenschutzerklärung
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
