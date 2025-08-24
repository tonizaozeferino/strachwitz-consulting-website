import Link from 'next/link';

interface CTABarProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export default function CTABar({ title, description, ctaText, ctaLink }: CTABarProps) {
  return (
    <section className="bg-primary text-white py-16">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            {description}
          </p>
          <Link href={ctaLink} className="btn-primary text-lg px-8 py-4">
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
