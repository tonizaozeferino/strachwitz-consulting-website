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
            Allgemeine Geschäftsbedingungen (AGB)
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="mb-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600 font-semibold">
                Strachwitz Consulting – António Freiherr von Strachwitz<br />
                Stand: August 2025
              </p>
            </div>
            
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">
              1. Geltungsbereich
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen Strachwitz Consulting (im Folgenden &ldquo;Berater&rdquo;) und seinen Kunden. Abweichende Bedingungen des Kunden gelten nur, wenn sie ausdrücklich schriftlich anerkannt wurden.
              </p>
            </div>
            
            <h2 className="text-2xl font-heading font-bold text-primary mb-4 mt-12">
              2. Vertragsabschluss
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                Ein Vertrag kommt durch Bestätigung per E-Mail oder durch Unterzeichnung eines Angebots zustande. Angebote sind freibleibend, sofern nicht ausdrücklich als verbindlich bezeichnet.
              </p>
            </div>
            
            <h2 className="text-2xl font-heading font-bold text-primary mb-4 mt-12">
              3. Leistungen
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-600 mb-4">
                Der Berater erbringt Dienstleistungen in den Bereichen:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                <li>Interim-Management</li>
                <li>Strategische Beratung und Coaching</li>
                <li>Schulungen, Workshops und Seminare</li>
              </ul>
              <p className="text-gray-600">
                Die konkrete Leistung ergibt sich aus dem jeweiligen Angebot. Ein bestimmter wirtschaftlicher Erfolg wird nicht geschuldet.
              </p>
            </div>
            
            <h2 className="text-2xl font-heading font-bold text-primary mb-4 mt-12">
              4. Vergütung & Zahlungsbedingungen
            </h2>
            
            <div className="space-y-6">
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Die Vergütung erfolgt auf Basis eines vereinbarten Tagessatzes oder als All-in-Angebot.</li>
                <li>Nebenkosten (Reisezeit, Spesen, Material) werden gesondert berechnet, sofern nicht ausdrücklich &ldquo;All-in&rdquo; vereinbart.</li>
                <li>Rechnungen sind ohne Abzug innerhalb von 14 Tagen nach Erhalt zahlbar.</li>
                <li>Bei Zahlungsverzug behält sich der Berater vor, Verzugszinsen nach §288 BGB geltend zu machen.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-heading font-bold text-primary mb-4 mt-12">
              5. Absagen & Stornierungen
            </h2>
            
            <div className="space-y-6">
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>≥14 Tage vor Termin: kostenfrei</li>
                <li>7–13 Tage vor Termin: 50 % des Honorars</li>
                <li>&lt;48 Stunden vor Termin oder Nichterscheinen: 100 % des Honorars</li>
              </ul>
              <p className="text-gray-600">
                Dies gilt für Workshops, Schulungen und vereinbarte Beratungs-/Projekttage.
              </p>
            </div>
            
            <h2 className="text-2xl font-heading font-bold text-primary mb-4 mt-12">
              6. Haftung
            </h2>
            
            <div className="space-y-6">
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Der Berater haftet nur für Vorsatz und grobe Fahrlässigkeit.</li>
                <li>Eine Haftung für indirekte Schäden, entgangenen Gewinn oder Folgeschäden ist ausgeschlossen.</li>
                <li>Für Leistungen und Produkte Dritter (z. B. Softwareanbieter, Dienstleister) wird keine Haftung übernommen.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-heading font-bold text-primary mb-4 mt-12">
              7. Vertraulichkeit
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                Beide Parteien verpflichten sich zur Vertraulichkeit über alle im Rahmen der Zusammenarbeit erlangten Informationen. Diese Pflicht gilt auch nach Beendigung der Zusammenarbeit.
              </p>
            </div>
            
            <h2 className="text-2xl font-heading font-bold text-primary mb-4 mt-12">
              8. Urheber- & Nutzungsrechte
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                Alle vom Berater erstellten Konzepte, Unterlagen und Präsentationen bleiben dessen geistiges Eigentum. Der Kunde erhält daran ein einfaches, nicht übertragbares Nutzungsrecht für interne Zwecke. Eine Weitergabe an Dritte ist nur mit schriftlicher Zustimmung erlaubt.
              </p>
            </div>
            
            <h2 className="text-2xl font-heading font-bold text-primary mb-4 mt-12">
              9. Änderungen & Schriftform
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                Ergänzungen und Änderungen dieser AGB oder der Verträge bedürfen der Schriftform (z. B. E-Mail, PDF mit Signatur).
              </p>
            </div>
            
            <h2 className="text-2xl font-heading font-bold text-primary mb-4 mt-12">
              10. Gerichtsstand & Recht
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                Es gilt deutsches Recht. Erfüllungsort und Gerichtsstand ist Würzburg, soweit gesetzlich zulässig.
              </p>
            </div>
            
            <h2 className="text-2xl font-heading font-bold text-primary mb-4 mt-12">
              11. Salvatorische Klausel
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                Sollte eine Bestimmung dieser AGB unwirksam sein, bleibt die Gültigkeit der übrigen Regelungen unberührt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
