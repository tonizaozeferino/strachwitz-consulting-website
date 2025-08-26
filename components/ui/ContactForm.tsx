interface ContactFormProps {
  title?: string;
  description?: string;
}

export default function ContactForm({ 
  title = "Kontaktformular", 
  description = "Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen." 
}: ContactFormProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-heading font-bold text-primary mb-2">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>

      <div className="text-center space-y-6">
        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-primary mb-3">
            Online Meeting vereinbaren
          </h4>
          <p className="text-gray-600 mb-6">
            Buchen Sie direkt einen Termin für ein kostenloses Erstgespräch. 
            Wählen Sie einen Zeitpunkt, der Ihnen passt.
          </p>
          
          <a
            href="https://tidycal.com/antoniovonstrachwitz/websiteonlinemeeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-primary text-lg px-8 py-4 hover:scale-105 transition-transform duration-200"
          >
            Termin buchen →
          </a>
        </div>

        <div className="text-sm text-gray-500">
          <p>Oder kontaktieren Sie uns direkt:</p>
          <p className="mt-2">
            <strong>Telefon:</strong> <a href="tel:+4993253919963" className="text-gray-500 hover:text-primary transition-colors duration-200">+49 9325 39 199 63</a><br />
            <strong>E-Mail:</strong> <a href="mailto:kontakt@strachwitzconsulting.com" className="text-gray-500 hover:text-primary transition-colors duration-200">kontakt@strachwitzconsulting.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
