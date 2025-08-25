import Link from 'next/link';
import Image from 'next/image';

interface FeatureCard {
  title: string;
  description: string;
  icon: string;
  iconType?: 'emoji' | 'image';
  link: string;
  features: string[];
}

interface FeatureCardsProps {
  cards: FeatureCard[];
}

export default function FeatureCards({ cards }: FeatureCardsProps) {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
            Unsere Kernleistungen
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Drei bewährte Ansätze für nachhaltiges Wachstum im Mittelstand
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {card.iconType === 'image' ? (
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-contain"
                  />
                ) : (
                  <span className="text-4xl">{card.icon}</span>
                )}
              </div>
              
              <h3 className="text-xl font-heading font-bold text-primary mb-4">
                {card.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {card.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {card.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href={card.link}
                className="inline-flex items-center text-secondary font-semibold hover:text-primary transition-colors duration-200"
              >
                Mehr erfahren
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
