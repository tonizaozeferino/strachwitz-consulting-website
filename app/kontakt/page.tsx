import type { Metadata } from 'next';
import ContactForm from '@/components/ui/ContactForm';

export const metadata: Metadata = {
  title: 'Kontakt - Strachwitz Consulting',
  description: 'Kontaktieren Sie uns für eine kostenlose Erstberatung. Wir sind Ihr Partner für nachhaltiges Wachstum im Mittelstand.',
  openGraph: {
    title: 'Kontakt - Strachwitz Consulting',
    description: 'Kontaktieren Sie uns für eine kostenlose Erstberatung.',
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-tertiary text-white py-20 lg:py-32">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Kontakt
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
              Lassen Sie uns gemeinsam Ihr Unternehmen auf den nächsten Level bringen
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Vereinbaren Sie ein kostenloses Erstgespräch und erfahren Sie, wie wir Ihr Unternehmen unterstützen können.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-8">
                Sprechen Sie mit uns
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-4">
                    Strachwitz Consulting
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>Castell, Bayern</p>
                    <p>Deutschland</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-heading font-bold text-primary mb-3">
                    Kontaktdaten
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href="tel:+4993253919963" className="text-gray-600 hover:text-primary transition-colors duration-200">
                        Telefon: +49 9325 39 199 63
                      </a>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-secondary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-600">E-Mail: kontakt@strachwitzconsulting.com</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-secondary mr-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <a 
                        href="https://www.linkedin.com/company/strachwitz-consulting" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-secondary hover:text-primary transition-colors duration-200"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-heading font-bold text-primary mb-3">
                    Bürozeiten
                  </h4>
                  <div className="space-y-2 text-gray-600">
                    <p>Montag - Freitag: 9:00 - 18:00 Uhr</p>
                    <p>Samstag - Sonntag: Nach Vereinbarung</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-heading font-bold text-primary mb-3">
                    Anfahrt
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Unser Büro befindet sich in Castell, Bayern. Wir sind sowohl persönlich als auch digital für Sie erreichbar. 
                    Für Termine außerhalb der regulären Bürozeiten kontaktieren Sie uns gerne per E-Mail oder Telefon.
                  </p>
                </div>

                <div className="bg-accent rounded-lg p-6">
                  <h4 className="text-lg font-heading font-bold text-primary mb-3">
                    Kostenlose Erstberatung
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Vereinbaren Sie ein 30-minütiges Erstgespräch und erfahren Sie, wie wir Ihr Unternehmen unterstützen können.
                  </p>
                  <div className="text-sm text-gray-500">
                    <p>• Keine Verpflichtungen</p>
                    <p>• Persönliche Beratung</p>
                    <p>• Maßgeschneiderte Lösungen</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm 
                title="Kontaktformular"
                description="Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-8">
              Warum ein Erstgespräch?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-lg font-heading font-bold text-primary mb-3">
                  Zieldefinition
                </h3>
                <p className="text-gray-600 text-sm">
                  Gemeinsam identifizieren wir Ihre spezifischen Herausforderungen und definieren klare Ziele.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💡</span>
                </div>
                <h3 className="text-lg font-heading font-bold text-primary mb-3">
                  Lösungsansätze
                </h3>
                <p className="text-gray-600 text-sm">
                  Wir zeigen Ihnen konkrete Lösungsansätze und bewährte Methoden für Ihr Unternehmen.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📋</span>
                </div>
                <h3 className="text-lg font-heading font-bold text-primary mb-3">
                  Nächste Schritte
                </h3>
                <p className="text-gray-600 text-sm">
                  Sie erhalten einen konkreten Fahrplan für die weitere Zusammenarbeit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
