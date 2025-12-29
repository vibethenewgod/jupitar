export default function News() {
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
  ];

  return (
    <main className="max-w-7xl mx-auto px-5 py-16">
      <section className="bg-white">
        <h2 className="text-4xl font-bold text-[#000e40] text-center mb-12 uppercase">News Page</h2>
        <div className="space-y-8">
          {newsItems.map((item, idx) => (
            <article key={idx} className="border-b border-gray-200 pb-6">
              <h3 className="text-2xl font-semibold text-[#cc7514] mb-2">{item.publication}</h3>
              <p className="text-gray-700">
                <span className="font-medium">{item.date}</span> - {' '}
                <a
                  href={item.link}
                  className="text-[#000f40] hover:text-[#cc7514] hover:underline transition-colors"
                >
                  {item.title}
                </a>
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
