import Terminal from "@/components/cards/terminal";
import Container from "@/components/container";
import Image from "next/image";

export default function University() {
  return (
    <>
      <main>
        <div className="flex flex-col gap-12 items-center pt-32 pb-12">
          <Container>
            <Terminal>
              <div className="text-2xl font-mono font-bold pb-4">
                Our University - USP
              </div>
              <div className="flex flex-col gap-5 items-center">
                <div className="flex flex-row gap-10">
                  <div>
                    The <span className="text-terminal">University of São Paulo</span> (Portuguese: Universidade de São Paulo, USP) is a public university in the Brazilian state of São Paulo. It is the largest Brazilian public university and the country's most prestigious educational institution, the best university in Ibero-America, and holds a high reputation among world universities, being ranked 100 worldwide in reputation by the Times Higher Education World University Rankings. USP is involved in teaching, research and university extension in all areas of knowledge, offering a broad range of courses.
                  </div>
                  <Image
                    className="w-56 h-28 invert mr-8"
                    alt="ganesh image"
                    src="/images/pages/aboutus_usp.png"
                    width={300}
                    height={100}
                  />
                </div>
                The university was founded in 1934, regrouping already existing schools in the state of São Paulo, such as the Faculdade de Direito do Largo de São Francisco (Faculty of Law), the Escola Politécnica (Engineering School) and the Escola Superior de Agricultura Luiz de Queiroz (College of Agriculture). The university's foundation is marked by the creation in 1934 of the Faculdade de Filosofia, Ciências e Letras (Faculty of Philosophy, Sciences and Letters, 1934-1968), and has subsequently created new departments, becoming one of the largest institutions of higher education in Latin America, with approximately 90,000 enrolled students. Currently, it has eleven campuses, four of them in the city of São Paulo. The remaining campuses are in the cities of Bauru, Lorena, Piracicaba, Pirassununga, Ribeirão Preto and two in São Carlos.
              </div>
            </Terminal>

            <Terminal>
              <div className="text-2xl font-mono font-bold pb-10">
                Activity
              </div>

              <div className="flex gap-6 pb-10 items-center">
                <Image
                  className="w-72 rounded-md"
                  alt="ganesh image"
                  src="/images/pages/aboutus_usp_sanca.jpg"
                  width={300}
                  height={200}
                />
                <div className="">
                  <div className="text-2xl font-mono font-bold pb-4 items-center">
                    Statistics
                  </div>
                  Today USP has six hospitals and offers 247 undergraduate programs and 239 graduate programs in all areas of study. The university houses altogether 24 museums and galleries – with half a million visitors a year – two theaters, a cinema, a TV channel and an orchestra.The University of São Paulo welcomes people from all continents and stimulates this process via networks and consortiums (International Office – USP), such as Erasmus Mundus, Associação das Universidades de Língua Portuguesa, and Rede Magalhães (SMILE - Student Mobility in Latin America, Caribbean and Europe), among others.
                  <br /><br />
                  The university today has 3362298 participants in cultural and extension activities, 97982 students enrolled and 5631 teachers.
                </div>
              </div>

              <div className="flex flex-row-reverse gap-6 pb-10 items-center">
                <Image
                  className="w-72 rounded-md"
                  alt="ganesh image"
                  src="/images/pages/aboutus_international.jpg"
                  width={300}
                  height={200}
                />
                <div className="">
                  <div className="text-2xl font-mono font-bold pb-4">
                    International Cooperation
                  </div>
                  Universidade de São Paulo has an International Cooperation Office whose aim is to promote students, faculty and researchers’ mobility by enhancing cooperation and helping with mobility logistics. Nowadays, USP has over 1,000 international agreements with several institutions all over the world. Students and faculty members enjoy a multicultural environment with people of different cultural backgrounds. Access: <a className="text-terminal" href="https://internationaloffice.usp.br/en/">AUCANI USP</a>.
                </div>
              </div>
            </Terminal>

          </Container>
        </div>
      </main>
    </>
  );
}