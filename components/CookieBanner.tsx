'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary text-white p-4 z-50 shadow-lg">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0">
          <div className="flex-1">
            <h3 className="text-lg font-heading font-semibold mb-2">
              Cookie-Einstellungen
            </h3>
            <p className="text-sm text-gray-300">
              Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. 
              Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies zu. 
              Weitere Informationen finden Sie in unserer{' '}
              <Link href="/datenschutz" className="text-accent hover:underline">
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <button
              onClick={declineCookies}
              className="px-4 py-2 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 transition-colors duration-200 rounded-lg text-sm"
            >
              Ablehnen
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 bg-accent text-primary font-semibold hover:bg-opacity-90 transition-all duration-200 rounded-lg text-sm"
            >
              Akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
