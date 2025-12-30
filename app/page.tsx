import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Insights & Recognition – editorial featured block with grid */}
      <section className="w-full bg-gradient-to-b from-[#f9fafb] to-[#f3f4f6] py-12 md:py-16">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 md:px-10">
          <div className="bg-white shadow-[0_10px_40px_rgba(15,22,43,0.08)] ring-1 ring-gray-100 p-8 md:p-12 transition-all duration-300 hover:shadow-[0_16px_60px_rgba(15,22,43,0.12)] rounded-xl">
            {/* Featured block */}
            <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-10 md:gap-12 pb-12 border-b border-gray-100">
              {/* Left: label, meta, headline, paragraph */}
              <div className="md:flex-1 text-center md:text-left space-y-5">
                <div className="text-[11px] tracking-[0.2em] uppercase text-gray-500 font-medium mb-3">
                  Insights & Recognition
                </div>
                <div className="text-[13px] text-gray-400 font-light">
                  December 2025
                </div>
                <h1 className="text-[1.8rem] md:text-[2rem] lg:text-[2.2rem] font-bold text-[#0f162b] leading-[1.2] mb-5">
                  Selected professional recognitions and notable moments from the career of Dr. Peters Ikechukwu Adonu.
                </h1>
                <div className="mt-8">
                  <Link
                    href="/insights"
                    className="inline-block w-full sm:w-auto rounded-lg border-2 border-gray-300 px-4 py-2 text-xs font-semibold text-[#0f162b] bg-white hover:bg-gray-50 hover:border-gray-400 shadow-sm transition-all duration-200"
                  >
                    View More
                  </Link>
                </div>
              </div>

              {/* Right: large rounded image */}
              <div className="md:flex-1 w-full">
                <div className="overflow-hidden ring-1 ring-gray-200 shadow-[0_16px_48px_rgba(15,22,43,0.1)] rounded-2xl">
                  <Image
                    src="/assets/Barrister Peter 1.jpg"
                    alt="Recognition image"
                    width={1200}
                    height={700}
                    className="w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Lower grid section */}
            <div className="pt-12">
              <h2 className="text-[1.65rem] md:text-[1.95rem] font-bold text-[#0f162b] mb-9 leading-tight">
                Recent Honours & Insights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
                {/* Card 1 */}
                <Link href="/about">
                  <article className="rounded-xl ring-1 ring-gray-200 overflow-hidden bg-white shadow-[0_4px_16px_rgba(15,22,43,0.06)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(15,22,43,0.12)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer">
                    <Image
                      src="/assets/withci1.jpg"
                      alt="Service Plaque"
                      width={600}
                      height={400}
                      className="w-full h-[240px] object-cover"
                    />
                    <div className="px-5 py-4 text-center md:text-left space-y-1">
                    
                    </div>
                  </article>
                </Link>
                {/* Card 2 */}
                <Link href="/about">
                  <article className="rounded-xl ring-1 ring-gray-200 overflow-hidden bg-white shadow-[0_4px_16px_rgba(15,22,43,0.06)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(15,22,43,0.12)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer">
                    <Image
                      src="/assets/withci2.jpg"
                      alt="Professional Excellence"
                      width={600}
                      height={400}
                      className="w-full h-[240px] object-cover"
                    />
                    <div className="px-5 py-4 text-center md:text-left space-y-1">
                     
                    </div>
                  </article>
                </Link>
                {/* Card 3 */}
                <Link href="/about">
                  <article className="rounded-xl ring-1 ring-gray-200 overflow-hidden bg-white shadow-[0_4px_16px_rgba(15,22,43,0.06)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(15,22,43,0.12)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer">
                    <Image
                      src="/assets/withci3.jpg"
                      alt="Judicial Commendation"
                      width={600}
                      height={400}
                      className="w-full h-[240px] object-cover"
                    />
                    <div className="px-5 py-4 text-center md:text-left space-y-1">
                    </div>
                  </article>
                </Link>
                {/* Card 4 */}
                <Link href="/about">
                  <article className="rounded-xl ring-1 ring-gray-200 overflow-hidden bg-white shadow-[0_4px_16px_rgba(15,22,43,0.06)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(15,22,43,0.12)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer">
                    <Image
                      src="/assets/withci4.jpg"
                      alt="Legal Scholarship"
                      width={600}
                      height={400}
                      className="w-full h-[240px] object-cover"
                    />
                    <div className="px-5 py-4 text-center md:text-left space-y-1">
                    </div>
                  </article>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="w-full shadow-[0_6px_24px_rgba(15,22,43,0.08)]">
        <Image
          src="/assets/landing pagegg.jpg"
          alt="Landing Page"
          width={1920}
          height={800}
          className="w-full h-[340px] sm:h-[420px] md:h-[520px] lg:h-auto object-cover"
          priority
        />
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto py-12 md:py-16 px-4 sm:px-5 text-justify animate-fadeInUp">
        <div className="text-center">
          <h1 className="text-[2.6rem] md:text-[2.8rem] lg:text-[3rem] max-md:text-[1.8rem] font-bold text-[#000e40] uppercase tracking-wide mb-3 leading-tight relative pb-6 font-serif before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-32 before:h-1 before:bg-gradient-to-r before:from-[#cc7514] before:to-[#d88b2a] before:rounded-full">
            A Multifaceted Leader and Visionary
            <span className="block text-[1.3rem] md:text-[1.5rem] max-md:text-[1rem] font-normal text-gray-600 normal-case tracking-normal mt-5 leading-relaxed italic">
              Embodying service and compassion in Law, Business, and Ministry.
            </span>
          </h1>

          <div className="flex flex-col md:flex-row items-start justify-start max-w-7xl mx-auto mt-12 md:mt-16 bg-white p-7 sm:p-8 md:p-10 gap-7 md:gap-10 shadow-[0_10px_40px_rgba(15,22,43,0.08)] hover:shadow-[0_16px_50px_rgba(15,22,43,0.12)] transition-shadow duration-300 rounded-xl ring-1 ring-gray-100">
            <div className="md:flex-[1] w-full md:w-auto min-w-[240px] text-center">
              <Image
                src="/assets/personal picture.jpg"
                alt="Doctor Peters"
                width={400}
                height={600}
                className="max-w-full h-auto rounded-2xl mx-auto shadow-[0_8px_24px_rgba(15,22,43,0.1)] ring-1 ring-gray-100"
              />
            </div>
            <div className="md:flex-[2] w-full p-0 text-justify space-y-5">
              <p className="leading-[1.8] text-gray-700 text-[15px] sm:text-[16px]">
                Dr. Peters Ikechukwu Adonu is a distinguished leader whose
                contributions span across law, business, and ministry. As the
                Principal Partner of Peters Ike Adonu & Co (Zion's Chamber), he
                leads a respected law firm specialized in top-tier legal
                services. His entrepreneurial spirit is further exemplified by
                his role as Managing Director and CEO of Trinity Pharmacare, a
                wholesale pharmaceutical company. Beyond his professional
                endeavors, Dr. Peters is also a pastor, dedicated to uplifting
                communities through his spiritual and philanthropic work. His
                published works, available on Amazon and Google Books, further
                extend his influence and impact.
              </p>
              <p className="leading-[1.8] text-gray-700 text-[15px] sm:text-[16px]">
                With 17 years of service in the Nigerian Army, Dr. Peters' legal
                expertise is deeply rooted in criminal and military law. During
                his tenure, he played a crucial role in the Special
                Investigation Bureau of the Nigeria Corps of Military Police,
                contributing significantly to the investigation and arrest of
                those involved in criminal activities within the military. His
                life and career, marked by dedication and visionary leadership,
                stand as a testament to his unwavering commitment to excellence
                and service, inspiring those around him to strive for positive
                change.
              </p>
              <Link href="/about">
                <button className="bg-[#cc7514] hover:bg-[#000f40] text-white py-3 px-6 border-2 border-[#cc7514] hover:border-[#000f40] cursor-pointer text-sm font-semibold transition-all duration-300 rounded-lg hover:scale-[1.02] active:scale-[0.98] mt-6 inline-block shadow-[0_4px_12px_rgba(204,117,20,0.25)] hover:shadow-[0_6px_20px_rgba(0,15,64,0.35)] w-full sm:w-auto">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials/Quotes Carousel Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#000e40] mb-4">What People Say</h2>
            <p className="text-gray-600 text-lg">Testimonials and endorsements from colleagues and clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#cc7514] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  J
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-[#000e40]">Justice Adebayo</h4>
                  <p className="text-gray-600 text-sm">Chief Justice, Lagos State</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Dr. Peters Adonu's expertise in military law and criminal justice is unparalleled. His contributions to legal scholarship and practice have been invaluable to the Nigerian legal community."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#cc7514] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  P
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-[#000e40]">Pastor Emmanuel</h4>
                  <p className="text-gray-600 text-sm">Senior Pastor, RCCG</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "As both a legal expert and a man of faith, Dr. Peters embodies the perfect balance of wisdom and compassion. His ministry work continues to inspire many."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#cc7514] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  C
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-[#000e40]">Colonel Ibrahim</h4>
                  <p className="text-gray-600 text-sm">Nigerian Army (Retired)</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "During his service in the Special Investigation Bureau, Dr. Peters demonstrated exceptional dedication to justice and military discipline. A true professional."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section
        id="experts"
        className="text-center py-12 md:py-16 bg-white max-w-[85rem] mx-auto w-[92%] sm:w-[90%] mt-12 md:mt-16 shadow-[0_10px_40px_rgba(15,22,43,0.08)] hover:shadow-[0_16px_50px_rgba(15,22,43,0.12)] transition-shadow duration-300 px-6 sm:px-8 md:px-10 rounded-xl ring-1 ring-gray-100"
      >
        <h2 className="text-[2.6rem] md:text-[2.8rem] lg:text-[3rem] max-md:text-[1.9rem] text-[#000f40] mb-3 font-bold tracking-tight">
          EXPERTISE
        </h2>
        <p className="text-gray-600 mb-12 md:mb-14 text-base sm:text-lg font-medium">
          Areas of Excellence
        </p>
        <div className="flex flex-col md:flex-row justify-between mb-6 gap-6 sm:gap-7 md:gap-8 px-0">
          <Link href="/law" className="relative w-full md:w-[30%] overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0px_8px_16px_rgba(0,0,0,0.2)] group">
            <Image
              src="/assets/law.jpg"
              alt="LAW"
              width={400}
              height={600}
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-lg transition-transform duration-300"
            />
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col rounded-lg bg-black/30 opacity-100 transition-all duration-300 group-hover:bg-black/60 group-hover:cursor-pointer">
              <p className="text-white text-lg sm:text-xl font-semibold transition-transform duration-300 group-hover:scale-110 group-hover:cursor-pointer">
                LAW
              </p>
            </div>
          </Link>

          <Link href="/contact" className="relative w-full md:w-[30%] overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0px_8px_16px_rgba(0,0,0,0.2)] group">
            <Image
              src="/assets/healthcare.jpg"
              alt="HEALTHCARE"
              width={400}
              height={600}
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-lg transition-transform duration-300"
            />
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col rounded-lg bg-black/30 opacity-100 transition-all duration-300 group-hover:bg-black/60 group-hover:cursor-pointer">
              <p className="text-white text-lg sm:text-xl font-semibold transition-transform duration-300 group-hover:scale-110 group-hover:cursor-pointer">
                HEALTHCARE
              </p>
            </div>
          </Link>

          <Link href="/ministry" className="relative w-full md:w-[30%] overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0px_8px_16px_rgba(0,0,0,0.2)] group">
            <Image
              src="/assets/religion.jpg"
              alt="MINISTRY"
              width={400}
              height={600}
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-lg transition-transform duration-300"
            />
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col rounded-lg bg-black/30 opacity-100 transition-all duration-300 group-hover:bg-black/60 group-hover:cursor-pointer">
              <p className="text-white text-lg sm:text-xl font-semibold transition-transform duration-300 group-hover:scale-110 group-hover:cursor-pointer">
                MINISTRY
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="bg-gradient-to-br from-[#000e40] via-[#001659] to-[#000e40] text-white text-center py-16 md:py-20 px-4 sm:px-5 mt-12 md:mt-16">
        <h2 className="text-[2.6rem] md:text-[2.8rem] lg:text-[3rem] max-md:text-[1.9rem] mb-4 font-bold tracking-tight">
          Get the Insights That Matter
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-10 md:mb-12 text-gray-200 max-w-3xl mx-auto px-2 leading-relaxed font-light">
          Keep up to date with events, updates, and expert insights for your
          legal and business needs.
        </p>
        <Link href="/contact">
          <button className="py-3 px-6 text-base font-semibold text-white bg-[#cc7514] hover:bg-[#d88b2a] border-2 border-[#cc7514] hover:border-[#d88b2a] rounded-lg cursor-pointer transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_6px_20px_rgba(204,117,20,0.4)] hover:shadow-[0_8px_28px_rgba(216,139,42,0.5)] inline-block w-full sm:w-auto">
            GET IN TOUCH TODAY
          </button>
        </Link>
      </section>
    </main>
  );
}
