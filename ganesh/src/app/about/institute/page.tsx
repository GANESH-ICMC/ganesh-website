import Terminal from "@/components/cards/terminal";
import Container from "@/components/container";
import Image from "next/image";

export default function Institute() {
  return (
    <>
      <main>
        <div className="flex flex-col gap-12 items-center pt-32 pb-12">
          <Container>
            <Terminal>
              <div className="text-2xl font-mono font-bold pb-4">
                Our Institute - ICMC
              </div>
              <div className="flex gap-10 items-center">
                The Institute of Computer and Mathematical Sciences (ICMC) at the University of São Paulo (USP) is a leading Brazilian institution in Computer Science, Mathematics, Applied Mathematics, and Statistics.
                <br /><br />
                Our mission is to advance and share knowledge and innovation in these fields, train undergraduate and graduate students, and engage in cultural and social initiatives. We are committed to fostering social, scientific, and technological progress in São Carlos, São Paulo, and across Brazil.
                <br /><br />
                The ICMC aims to be a global reference in education and research, significantly contributing to knowledge evolution, training highly skilled professionals, and supporting the region's scientific, technological, and social development.
                <Image
                  className="w-96 h-48"
                  alt="ganesh image"
                  src="/images/pages/aboutus_icmc_original.png"
                  width={300}
                  height={100}
                />
              </div>
            </Terminal>

            <div className="flex gap-12 justify-center">
              <div className="flex flex-col gap-12">
                <Terminal>
                  <div className="text-2xl font-mono font-bold pb-4">
                    Representative Video of ICMC
                  </div>
                  <iframe className='w-full' height={300}
                    src="https://www.youtube.com/embed/_7aU2zcof34"
                    allowFullScreen={true}>
                  </iframe>
                </Terminal>

                <Terminal>
                  <Image
                    className="w-96"
                    alt="ganesh image"
                    src="/images/pages/aboutus_jardim.png"
                    width={300}
                    height={200}
                  />
                </Terminal>
              </div>

              <div className="w-1/2">
                <Terminal>
                  <div className="text-2xl font-mono font-bold pb-4">
                    History and Infrastructure
                  </div>

                  Established in 1971, the Institute of Computer and Mathematical Sciences (ICMC) at the University of São Paulo (USP) spans 18,000 square meters and serves around 2,000 students across eight undergraduate programs and five graduate courses, supported by approximately 150 faculty members and 120 administrative staff. ICMC students receive a robust education that equips them for successful professional careers.
                  <br /><br />
                  Globally recognized as a center of excellence, ICMC impacts society by training skilled professionals and engaging in cutting-edge research and community outreach.
                  <br /><br />
                  Our modern facilities feature extensive green spaces, a library with about 140,000 volumes and 23,000 electronic journals, and state-of-the-art educational environments, including auditoriums and 24-hour open laboratories. The campus provides high-speed wireless internet throughout. Explore ICMC further through our virtual tour.
                  <br /><br />
                  Additionally, the USP campus in São Carlos offers various amenities, such as a restaurant, accommodation, transportation, medical and dental services, a daycare center, and a sports facility.
                  <br /><br />
                  Located 230 km from São Paulo, São Carlos is known as the "Capital of Science and Technology," renowned for its universities and researchers. It experiences all four seasons in a day, showcasing its unique climate. The city boasts the highest number of PhD holders per capita in South America and excels in innovation, hosting two major public universities (USP and UFSCar), a private university, technology faculties, research centers, technology parks, and numerous tech companies.

                </Terminal>
              </div>
            </div>

            <Terminal>
              <div className="text-2xl font-mono font-bold pb-10">
                Areas of Activity
              </div>

              <div className="flex gap-6 pb-10 items-center">
                <Image
                  className="w-64 rounded-md"
                  alt="ganesh image"
                  src="/images/pages/aboutus_ensino.jpg"
                  width={200}
                  height={200}
                />
                <div className="">
                  <div className="text-2xl font-mono font-bold pb-4">
                    Teaching
                  </div>
                  In addition to offering eight undergraduate courses, the ICMC is responsible for providing primary training courses for students in Architecture, Engineering, Physics and Chemistry courses, coordinated by the other units of the São Carlos campus. At the graduate level, the ICMC programs are among the best in the country, having trained Masters and Doctors who now occupy positions in prestigious teaching and research institutions, governmental organizations and companies in Brazil and abroad. ICMC graduates have a dynamic background that stands out in the market, whether in an academic career or any area of professional activity.
                </div>
              </div>

              <div className="flex flex-row-reverse gap-6 pb-10 items-center">
                <Image
                  className="w-96 h-72 rounded-md"
                  alt="ganesh image"
                  src="/images/pages/aboutus_pesquisa.jpg"
                  width={300}
                  height={200}
                />
                <div className="">
                  <div className="text-2xl font-mono font-bold pb-4">
                    Research
                  </div>
                  ICMC's research is published in leading journals and results in impactful products, technologies, and patents that address social issues. Faculty, postdoctoral researchers, and students actively participate in scientific events and collaborate on projects with international institutions, supported by development agencies like FAPESP, CNPq, CAPES, FINEP, and the European Commission.

                  The institute focuses on technological innovation, creating products with significant economic and social impact through partnerships with industry, research centers, and government agencies. ICMC’s studies have received national and international recognition and media coverage. Faculty members also engage in large-scale projects, including thematic research networks such as the National Institutes of Science and Technology (INCTs), Research Support Centers (NAPs), and the Research Innovation and Dissemination Center (CEPID).
                </div>
              </div>

              <div className="flex gap-6 pb-10 items-center">
                <Image
                  className="w-64 rounded-md"
                  alt="ganesh image"
                  src="/images/pages/aboutus_cultura.jpg"
                  width={300}
                  height={200}
                />
                <div className="">
                  <div className="text-2xl font-mono font-bold pb-4">
                    Culture
                  </div>
                  The ICMC extends the benefits from its cultural and extension activities to the community through courses, events, exhibitions, cultural presentations and social projects. One of the main features of the institute is the Professor Odelar Leite Linhares Computer Museum holding more than two hundred pieces of numerical calculus in its collection. In addition, we have been extending our activities to the community and developed partnership with society, to perform actions with broad impact and reach. These activities involve partnerships with industry, research centers, government agencies, private associations and NGOs.
                </div>
              </div>
            </Terminal>

          </Container>
        </div>
      </main>
    </>
  );
}