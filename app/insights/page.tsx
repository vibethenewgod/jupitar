import Image from "next/image";
import Link from "next/link";

export default function Insights() {
  const insightsItems = [
    {
      title: "Selected professional recognitions and notable moments",
      description: "Dr. Peters Ikechukwu Adonu's distinguished career spans law, business, and ministry. As Principal Partner of Peters Ike Adonu & Co (Zion's Chamber), he leads a respected law firm. His entrepreneurial spirit is exemplified by his role as Managing Director and CEO of Trinity Pharmacare.",
      image: "/assets/Barrister Peter 1.jpg",
      date: "December 2025"
    },
    {
      title: "Military Service Excellence",
      description: "With 17 years of service in the Nigerian Army, Dr. Peters' legal expertise is deeply rooted in criminal and military law. During his tenure in the Special Investigation Bureau of the Nigeria Corps of Military Police, he contributed significantly to investigations and arrests.",
      image: "/assets/PEACEKEPING.jpg",
      date: "December 2025"
    }
  ];

  const newsItems = [
    {
      publication: 'Nigerian Tribune',
      date: 'Monday, 7 December, 2009',
      title: 'Treason: 27 Soldiers Appeal Against Judgement',
      link: '#',
    },
    {
      publication: 'Vanguard',
      date: 'Saturday, February 13, 2010',
      title: "National Assembly's Resolution on Jonathan in Order, Says Adonu",
      link: '#',
    },
    {
      publication: 'Vanguard',
      date: 'Friday, May 29, 2009',
      title: 'Mutiny: Counsel Faults Army on Notice of Appeal',
      link: '#',
    },
    {
      publication: 'Tell Magazine',
      date: 'Various Dates',
      title: 'Featured Articles and Interviews',
      link: '#',
    },
    // Add more news items here as needed
  ];

  return (
    <main className="max-w-7xl mx-auto px-5 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left side - Insights (larger) */}
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-[#000e40] mb-8 uppercase">Insights & Recognition</h1>

          <div className="space-y-12">
            {insightsItems.map((item, idx) => (
              <article key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:flex-1">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:flex-1 p-6">
                    <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                    <h3 className="text-2xl font-bold text-[#000e40] mb-4">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Right side - News (smaller column) */}
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold text-[#000e40] mb-6 uppercase">Latest News</h2>

          <div className="space-y-6">
            {newsItems.map((item, idx) => (
              <article key={idx} className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-lg font-semibold text-[#cc7514] mb-2">{item.publication}</h3>
                <p className="text-sm text-gray-600 mb-2">{item.date}</p>
                <a
                  href={item.link}
                  className="text-[#000f40] hover:text-[#cc7514] hover:underline transition-colors font-medium"
                >
                  {item.title}
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}