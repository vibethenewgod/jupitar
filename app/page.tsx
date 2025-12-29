import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="w-full">
        <Image
          src="/assets/landing pagegg.jpg"
          alt="Landing Page"
          width={1920}
          height={800}
          className="w-full h-auto"
          priority
        />
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto my-8 px-5 text-justify animate-fadeInUp">
        <div className="text-center">
          <h1 className="text-[2.65rem] font-extrabold text-[#000e40] uppercase tracking-wider mt-12 mb-2.5 leading-relaxed relative pb-5 shadow-[3px_3px_6px_rgba(0,0,0,0.1)] font-serif before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[5px] before:bg-gradient-to-r before:from-[#cc7514] before:to-[#d88b2a] md:text-[2rem] max-md:text-[1.3rem] max-md:mt-8 max-md:tracking-normal max-md:-mb-5">
            A Multifaceted Leader and Visionary
            <span className="block text-[1.5rem] font-normal text-gray-700 normal-case tracking-normal mt-3 leading-snug italic md:text-[1.2rem] max-md:text-[0.8rem]">
              Embodying service and compassion in Law, Business, and Ministry.
            </span>
          </h1>

          <div className="flex flex-col md:flex-row items-start justify-start max-w-7xl mx-auto mt-12 bg-white p-8 gap-8 card-shadow rounded-lg">
            <div className="md:flex-[1] w-full md:w-auto min-w-[250px] text-center">
              <Image
                src="/assets/personal picture.jpg"
                alt="Doctor Peters"
                width={400}
                height={600}
                className="max-w-full h-auto rounded-lg"
              />
            </div>
            <div className="md:flex-[2] w-full p-0 text-justify text-[15px] space-y-4">
              <p className="leading-relaxed text-gray-700 line-height-1.8">
                Dr. Peters Ikechukwu Adonu is a distinguished leader whose contributions span across law, business, and ministry. As the Principal Partner of Peters Ike Adonu & Co (Zion's Chamber), he leads a respected law firm specialized in top-tier legal services. His entrepreneurial spirit is further exemplified by his role as Managing Director and CEO of Trinity Pharmacare, a wholesale pharmaceutical company. Beyond his professional endeavors, Dr. Peters is also a pastor, dedicated to uplifting communities through his spiritual and philanthropic work. His published works, available on Amazon and Google Books, further extend his influence and impact.
              </p>
              <p className="leading-relaxed text-gray-700">
                With 17 years of service in the Nigerian Army, Dr. Peters' legal expertise is deeply rooted in criminal and military law. During his tenure, he played a crucial role in the Special Investigation Bureau of the Nigeria Corps of Military Police, contributing significantly to the investigation and arrest of those involved in criminal activities within the military. His life and career, marked by dedication and visionary leadership, stand as a testament to his unwavering commitment to excellence and service, inspiring those around him to strive for positive change.
              </p>
              <Link href="/about">
                <button className="bg-[#cc7514] text-white py-3 px-8 border-none cursor-pointer text-sm font-bold transition-all duration-300 rounded-md hover:bg-[#000f40] hover:scale-105 mt-4 inline-block shadow-md hover:shadow-lg">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="experts" className="text-center py-12 bg-white rounded-xl max-w-[1400px] mx-auto w-[90%] mt-12 shadow-lg">
        <h2 className="text-[2.3rem] md:text-[2.5rem] max-md:text-[1.8rem] text-[#000f40] mb-4 font-bold tracking-tight">EXPERTISE</h2>
        <p className="text-gray-600 mb-12 text-lg">Our Areas of Excellence</p>
        <div className="flex flex-col md:flex-row justify-between mb-5 gap-6 px-4">
          <div className="relative w-full md:w-[30%] overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0px_8px_16px_rgba(0,0,0,0.2)] group">
            <Image
              src="/assets/law.jpg"
              alt="LAW"
              width={400}
              height={600}
              className="w-full h-full object-cover rounded-lg transition-transform duration-300"
            />
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col rounded-lg bg-black/30 opacity-100 transition-all duration-300 group-hover:bg-black/60 group-hover:cursor-pointer">
              <p className="text-white text-2xl font-medium transition-transform duration-300 group-hover:scale-125 group-hover:cursor-pointer group-hover:font-semibold">
                LAW
              </p>
              <Link
                href="/law"
                className="mt-2.5 py-2.5 px-5 bg-[#000f40] text-white text-sm font-bold no-underline rounded-md opacity-0 translate-y-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 hover:rounded-sm hover:scale-105 hover:shadow-[0px_2px_2px_rgba(0,0,0,0.2),0px_4px_4px_rgba(0,0,0,0.1),0px_8px_8px_rgba(0,0,0,0.05)]"
              >
                READ MORE
              </Link>
            </div>
          </div>

          <div className="relative w-full md:w-[30%] overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0px_8px_16px_rgba(0,0,0,0.2)] group">
            <Image
              src="/assets/healthcare.jpg"
              alt="HEALTHCARE"
              width={400}
              height={600}
              className="w-full h-full object-cover rounded-lg transition-transform duration-300"
            />
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col rounded-lg bg-black/30 opacity-100 transition-all duration-300 group-hover:bg-black/60 group-hover:cursor-pointer">
              <p className="text-white text-2xl font-medium transition-transform duration-300 group-hover:scale-125 group-hover:cursor-pointer group-hover:font-semibold">
                HEALTHCARE
              </p>
              <a
                href="https://www.trinitypharmacareltd.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 py-2.5 px-5 bg-[#000f40] text-white text-sm font-bold no-underline rounded-md opacity-0 translate-y-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 hover:rounded-sm hover:scale-105 hover:shadow-[0px_2px_2px_rgba(0,0,0,0.2),0px_4px_4px_rgba(0,0,0,0.1),0px_8px_8px_rgba(0,0,0,0.05)]"
              >
                READ MORE
              </a>
            </div>
          </div>

          <div className="relative w-full md:w-[30%] overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0px_8px_16px_rgba(0,0,0,0.2)] group">
            <Image
              src="/assets/religion.jpg"
              alt="MINISTRY"
              width={400}
              height={600}
              className="w-full h-full object-cover rounded-lg transition-transform duration-300"
            />
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col rounded-lg bg-black/30 opacity-100 transition-all duration-300 group-hover:bg-black/60 group-hover:cursor-pointer">
              <p className="text-white text-2xl font-medium transition-transform duration-300 group-hover:scale-125 group-hover:cursor-pointer group-hover:font-semibold">
                MINISTRY
              </p>
              <Link
                href="/ministry"
                className="mt-2.5 py-2.5 px-5 bg-[#000f40] text-white text-sm font-bold no-underline rounded-md opacity-0 translate-y-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 hover:rounded-sm hover:scale-105 hover:shadow-[0px_2px_2px_rgba(0,0,0,0.2),0px_4px_4px_rgba(0,0,0,0.1),0px_8px_8px_rgba(0,0,0,0.05)]"
              >
                READ MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="bg-gradient-to-r from-[#000e40] to-[#001659] text-white text-center py-16 px-5 mt-12">
        <h2 className="text-[2.5rem] md:text-[2rem] mb-3 font-bold tracking-tight">Get the Insights That Matter</h2>
        <p className="text-lg mb-10 text-gray-100 max-w-2xl mx-auto">Keep up to date with events, updates, and expert insights for your legal and business needs.</p>
        <Link href="/contact">
          <button className="py-3 px-8 text-lg font-bold text-white bg-[#cc7514] border-none rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#d88b2a] hover:scale-105 shadow-lg hover:shadow-xl inline-block">
            GET IN TOUCH TODAY
          </button>
        </Link>
      </section>
    </main>
  );
}
