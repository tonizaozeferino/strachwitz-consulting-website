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
              1. Verantwortliche Stelle
            </h2>
            
            <div className="space-y-6">
              <div>
                <p className="text-gray-600">
                  Strachwitz Consulting<br />
                  António Freiherr von Strachwitz<br />
                  Wüstenfelden 3<br />
                  97355 Castell, Deutschland
                </p>
              </div>
              
              <div>
                <p className="text-gray-600">
                  Telefon: +49 156 78 55 60 038<br />
                  E-Mail: webmaster@strachwitzconsulting.com
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-heading font-bold text-primary mb-4 mt-12">
              2. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck von deren Verwendung
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  Beim Besuch der Website
                </h3>
                <p className="text-gray-600 mb-4">
                  Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sog. Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                  <li>IP-Adresse des anfragenden Rechners</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Name und URL der abgerufenen Datei</li>
                  <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                  <li>verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
                </ul>
                <p className="text-gray-600 mb-4">
                  Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                  <li>Gewährleistung eines reibungslosen Verbindungsaufbaus der Website,</li>
                  <li>Gewährleistung einer komfortablen Nutzung unserer Website,</li>
                  <li>Auswertung der Systemsicherheit und -stabilität.</li>
                </ul>
                <p className="text-gray-600">
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  Bei Kontaktaufnahme per E-Mail
                </h3>
                <p className="text-gray-600">
                  Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen mitgeteilten Daten (z. B. Name, E-Mail-Adresse, Telefonnummer, Inhalt der Nachricht) gespeichert, um Ihre Anfrage zu beantworten.<br />
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen).
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-heading font-bold text-primary mb-4 mt-12">
              3. Weitergabe von Daten
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                Eine Übermittlung Ihrer persönlichen Daten an Dritte findet nur statt, soweit dies für die Abwicklung von Vertragsverhältnissen erforderlich ist oder Sie ausdrücklich eingewilligt haben.
              </p>
            </div>
            
            <h2 className="text-2xl font-heading font-bold text-primary mb-4 mt-12">
              4. Ihre Rechte
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-600 mb-4">
                Sie haben das Recht:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen,</li>
                <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger Daten zu verlangen,</li>
                <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten Daten zu verlangen,</li>
                <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung zu verlangen,</li>
                <li>gemäß Art. 20 DSGVO Datenübertragbarkeit zu verlangen,</li>
                <li>gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung einzulegen.</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-heading font-bold text-primary mb-4 mt-12">
              5. Beschwerderecht
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                Sie haben das Recht, sich bei der zuständigen Datenschutz-Aufsichtsbehörde zu beschweren.<br />
                Zuständig ist das Bayerische Landesamt für Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach.
              </p>
            </div>
            
            <h2 className="text-2xl font-heading font-bold text-primary mb-4 mt-12">
              6. Speicherdauer
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                Personenbezogene Daten werden gelöscht, sobald der Zweck der Speicherung entfällt oder Sie Ihre Einwilligung widerrufen, es sei denn gesetzliche Aufbewahrungspflichten bestehen.
              </p>
            </div>
            
            <h2 className="text-2xl font-heading font-bold text-primary mb-4 mt-12">
              7. SSL- bzw. TLS-Verschlüsselung
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                Diese Seite nutzt aus Sicherheitsgründen eine SSL-bzw. TLS-Verschlüsselung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
