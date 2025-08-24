import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCTA: string;
  primaryCTALink: string;
  secondaryCTA: string;
  secondaryCTALink: string;
}

export default function Hero({
  title,
  subtitle,
  primaryCTA,
  primaryCTALink,
  secondaryCTA,
  secondaryCTALink,
}: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-primary via-secondary to-tertiary text-white py-20 lg:py-32">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={primaryCTALink} className="btn-primary text-lg px-8 py-4">
              {primaryCTA}
            </Link>
            <Link href={secondaryCTALink} className="btn-secondary text-lg px-8 py-4 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              {secondaryCTA}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
