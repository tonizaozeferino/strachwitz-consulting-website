interface KPIStat {
  value: string;
  label: string;
  description: string;
  industry: string;
}

interface KPIStatsProps {
  stats: KPIStat[];
  title: string;
  subtitle: string;
}

export default function KPIStats({ stats, title, subtitle }: KPIStatsProps) {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl lg:text-5xl font-heading font-bold text-secondary mb-2">
                {stat.value}
              </div>
              <h3 className="text-lg font-heading font-semibold text-primary mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-600 mb-3">
                {stat.description}
              </p>
              <div className="inline-block bg-accent text-primary text-sm font-semibold px-3 py-1 rounded-full">
                {stat.industry}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
