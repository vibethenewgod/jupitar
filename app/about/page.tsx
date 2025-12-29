import Image from 'next/image';

export default function About() {
  return (
    <main>
      <section className="max-w-7xl mx-auto px-5 py-10">
        <div className="flex flex-wrap items-center gap-8 mb-16 max-md:flex-col">
          <div className="flex-[2] min-w-[300px]">
            <h1 className="text-4xl font-bold text-[#000e40] mb-4">Dr. Peters Ikechukwu Adonu</h1>
            <h2 className="text-2xl text-[#cc7514] mb-6">The Person</h2>
            <p className="text-justify mb-4 leading-relaxed">
              Dr. Peters Ikechukwu Adonu is a distinguished legal expert with a deep commitment to justice and human rights. His life's journey reflects an unwavering dedication to service, beginning with a notable career in the Nigerian military and extending into his influential work in the legal profession. From an early age, Dr. Peters' passion for law and order propelled him into roles where he has shaped critical legal and military frameworks, earning him recognition as a leading figure in both fields.
            </p>
            <p className="text-justify leading-relaxed">
              In addition to his professional accomplishments, Dr. Peters is a pastor, mentor, and visionary leader whose impact transcends the courtroom. His spiritual and moral guidance has touched the lives of many, inspiring those who seek direction and encouragement. As an author of several books available on Amazon and Google Books, Dr. Peters continues to share his insights on justice, faith, and leadership, embodying resilience, courage, and an unwavering belief in the principles of fairness and integrity.
            </p>
          </div>
          <div className="flex-[1] min-w-[300px]">
            <Image
              src="/assets/THE PERSON.jpg"
              alt="Dr. Peters"
              width={400}
              height={600}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-8 mb-16 max-md:flex-col">
          <div className="flex-[2] min-w-[300px]">
            <h1 className="text-4xl font-bold text-[#000e40] mb-6">Legal Expertise and Military Service</h1>
            <p className="text-justify mb-4 leading-relaxed">
              Dr. Peters' legal career is marked by his extensive expertise in criminal law and military law consultancy. With a notable tenure of 17 years in the Nigerian Army (1988-2006), he is a Veteran and a pensioner with the Military Pension Board. His time in the military was characterized by critical roles such as serving in the Special Investigation Bureau of the Nigerian Army Corps of Military Police and Nigerian Army Legal Services. Here, he was deeply involved in investigating and arresting individuals implicated in various criminal activities within the military. As a Military Attorney with the Nigerian Army legal Services, he prosecuted both the rank and files involved in all sorts of criminalities. He also reviewed cases from distressed soldiers and officers of the Military assigned by the Chief of Army Staff.
            </p>
            <p className="text-justify leading-relaxed">
              His proficiency extends to providing legal counsel to the authorities, prosecuted erring personnels, and represented the Nigerian Army in civil courts. As an investigator in the Military Police, Dr. Peters demonstrated exceptional skill and dedication. He handled complex cases, ensuring that justice was served while maintaining the integrity of the military justice system.
            </p>
          </div>
          <div className="flex-[1] min-w-[300px]">
            <Image
              src="/assets/LAW1.jpg"
              alt="Dr. Peters Legal Expertise"
              width={400}
              height={600}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-8 mb-16 max-md:flex-col">
          <div className="flex-[2] min-w-[300px]">
            <h1 className="text-4xl font-bold text-[#000e40] mb-6">International Peacekeeping Missions</h1>
            <p className="text-justify mb-4 leading-relaxed">
              Dr. Peters' military career also saw him participating in international peacekeeping missions. He was part of the first batch of the Economic Community of West African States Monitoring Group (ECOMOG) deployed to Liberia. His service extended to conflict zones in Yugoslavia and Sierra Leone, showcasing his dedication to global peace and security.
            </p>
            <p className="text-justify leading-relaxed">
              During his peacekeeping missions, Dr. Peters played a crucial role in maintaining peace and stability in regions plagued by conflict. His contributions were instrumental in fostering a sense of security and hope among local populations. His experiences in these missions have profoundly shaped his perspective on the importance of international cooperation and humanitarian efforts.
            </p>
          </div>
          <div className="flex-[1] min-w-[300px]">
            <Image
              src="/assets/inter.jpg"
              alt="International Peacekeeping Missions"
              width={400}
              height={600}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-8 mb-16 max-md:flex-col">
          <div className="flex-[2] min-w-[300px]">
            <h1 className="text-4xl font-bold text-[#000e40] mb-6">Entrepreneurial Ventures</h1>
            <p className="text-justify mb-4 leading-relaxed">
              Beyond his distinguished legal and military career, Dr. Peters Ikechukwu Adonu has made remarkable strides in the business world. As the Managing Director and CEO of Trinity Pharmacare Limited, he spearheads a successful pharmaceutical company that plays a pivotal role in the healthcare sector. His business acumen has propelled Trinity Pharmacare Limited to new heights, ensuring the provision of essential medications and enhancing access to quality healthcare for communities.
            </p>
            <p className="text-justify leading-relaxed">
              Under Dr. Peters' leadership, Trinity Pharmacare Limited has significantly expanded its reach and influence, becoming a leader in the industry. The company's commitment to excellence is evident in its reliable pharmaceutical products and its strategic vision for improving public health outcomes. Additionally, Dr. Peters has established a global network of partnerships, collaborating with major stakeholders worldwide to further strengthen Trinity Pharmacare's impact on the global healthcare landscape.
            </p>
          </div>
          <div className="flex-[1] min-w-[300px]">
            <Image
              src="/assets/DD (34).jpg"
              alt="Entrepreneurial Ventures"
              width={400}
              height={600}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
