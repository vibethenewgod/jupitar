import Image from 'next/image';

export default function Books() {
  const books = [
    { id: 1, img: '/assets/book 1.jpg', title: 'Book 1' },
    { id: 2, img: '/assets/book 2.jpg', title: 'Book 2' },
    { id: 3, img: '/assets/book 3.jpg', title: 'Book 3' },
    { id: 4, img: '/assets/book 4.jpg', title: 'Book 4' },
    { id: 5, img: '/assets/book 5.jpg', title: 'Book 5' },
    { id: 6, img: '/assets/book 6.jpg', title: 'Book 6' },
    { id: 7, img: '/assets/book 7.jpg', title: 'Book 7' },
    { id: 8, img: '/assets/book 8.jpg', title: 'Book 8' },
  ];

  return (
    <main>
      <div className="max-w-7xl mx-auto px-5 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-normal text-gray-800 leading-relaxed">
            Peters Ikechukwu Adonu is also an accomplished author, having published several books that are available on Amazon. His literary works reflect his vast knowledge and experiences, offering valuable insights to readers worldwide.
          </h1>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-5 py-12">
        <h1 className="text-4xl font-bold text-[#000e40] text-center mb-12 uppercase">
          Books by Dr. Peters Ikechukwu Adonu
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <a
              key={book.id}
              href="#"
              className="group block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={book.img}
                  alt={book.title}
                  width={300}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center bg-[#000f40] text-white">
                <h3 className="text-lg font-semibold">View on Amazon</h3>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
