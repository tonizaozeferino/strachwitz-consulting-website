import Link from 'next/link';

const quickLinks = [
  { name: 'Startseite', href: '/' },
  { name: 'Interim Management', href: '/interim-management' },
  { name: 'KI-Beratung', href: '/ki-beratung' },
  { name: 'Geschäftsentwicklung', href: '/internationalisierung' },
  { name: 'Branchen', href: '/branchen' },
  { name: 'Über uns', href: '/ueber-uns' },
  { name: 'Wissen', href: '/wissen' },
  { name: 'Kontakt', href: '/kontakt' },
];

const services = [
  { name: 'Vertriebsführung (CSO/CRO)', href: '/interim-management#vertriebsfuehrung' },
  { name: 'Unternehmenstransformation', href: '/interim-management#transformation' },
  { name: 'KI-Transformation', href: '/interim-management#ki-transformation' },
  { name: 'KI-Lösungen', href: '/ki-beratung#loesungen' },
  { name: 'Export & Markterschließung', href: '/internationalisierung#export' },
  { name: 'Messebetreuung', href: '/internationalisierung#messen' },
  { name: 'Agententätigkeit', href: '/internationalisierung#agenten' },
];

const legal = [
  { name: 'Impressum', href: '/impressum' },
  { name: 'Datenschutz', href: '/datenschutz' },
  { name: 'AGB', href: '/agb' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-heading font-bold mb-4">Strachwitz Consulting</h3>
            <p className="text-gray-300 mb-4">
              Ihr Partner für nachhaltiges Wachstum im Mittelstand
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="font-semibold">António Freiherr von Strachwitz</p>
              <p>Wüstenfelden 3</p>
              <p>97355 Castell</p>
              <p>Deutschland</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Schnellzugriff</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Leistungsübersicht</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-accent transition-colors duration-200 text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/company/strachwitz-consulting"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Strachwitz Consulting. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
