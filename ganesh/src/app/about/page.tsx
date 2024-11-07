"use client";

import Terminal from "@/components/cards/terminal";
import Image from "next/image";
import router from "next/router";

export default function AboutPage() {
  return (
    <main>
      <div className="flex flex-col gap-12 items-center pt-32 pb-12">
        <div className="w-2/3">
          <Terminal>
            <div className="flex gap-10">
              <Image
                className=""
                alt="ganesh image"
                src="/images/pages/aboutus_ganesh.jpg"
                width={400}
                height={300}
              />
              <div>
                <div className="text-2xl font-mono font-bold pb-4">
                  Our Values
                </div>

                Ganesh is one of the most venerated gods of hinduism, referenced as the <span className="text-terminal">"Destroyer of Obstacles"</span> and the <span className="text-terminal">"Master of Intelect"</span>. Inspired by this divinity and by the growing importance of <span className="text-terminal">Information Security</span> on the context of the current life, some students from ICMC-USP decided to create an extracurricular group in this area.
                <br /><br />
                Through studying and developing techniques and algorithms geared towared computer systems and computer networks security, the group aims to provide the members an easied learning and knowledge exchange experience.
                <br /><br />
                Other than that, the group also aims to integrate and interact with groups external to the University, as well as spreading its experiences and gathered knowledge along the external comunity through activities, mini courses and public talks.
              </div>
            </div>
          </Terminal>
        </div>

        <div className="w-2/3 flex flex-row gap-12">
          <Terminal>
            <div className="text-2xl font-mono font-bold pb-4">
              Group Organization
            </div>

            With the formal start in 2017, Ganesh is organized in <span className="text-terminal">Study and Research Areas</span>, being actually composed by the following active areas: Cryptography, Network and Pentesting, Reverse Engineering, Web Security and Hardware Hacking.
            <br /><br />
            That way, it is on the members criteria to decide which topics are the most interesting ones and to participate in several weekly meetings that happen during the school semester.
            <br /><br />
            Also, the group allows that people that are not linked to University of São Paulo participate as colaborators, allowing them to participate in its activities and meetings. The group has a really flexile and horizontal structure that can be checked with more detail in our Rule Statute (in Portuguese).
          </Terminal>

          <Terminal>
            <div className="text-2xl font-mono font-bold pb-4 flex items-center gap-5">
              Capture the Flags
              <a href="https://ctf-br.org/" target="_blank">
                <img className="w-8" src='/images/pages/aboutus_ctfbr_256x256.gif' alt='CTF.br Website Logo' />
              </a>
            </div>

            In addition to the educational objectives, Ganesh also acts as a CTF (Capture the Flag) team, currently the <span className="text-terminal">2nd best national team</span> and <span className="text-terminal">1st in the university category</span>. In these competitions, our members are challenged to find vulnerabilities in different scenarios and find the Flags, specific texts that prove the solution to a challenge.
            <br /><br />
            CTF's are a great way to test the security knowledge gained in controlled and exciting scenarios, as well as providing the learning of new topics and networking with other security enthusiasts.
            <br /><br />
            To find out more about our team and the competitions we participate in, visit our page on CTF Time. If you want to know more about the national CTF's we recommend a visit to the CTF-BR website where we are affiliated.
          </Terminal>
        </div>

        <div className="w-2/3">
          <Terminal>
            <div className="text-2xl font-mono font-bold pb-4">
              I want to join Ganesh!
            </div>

            To become a member at Ganesh, the only pre-requisite is to participate in our <span className="text-terminal">PIng (Ingress Process)</span> that occurs throughout the first semester of the school year, which happens yearly.
            <br /><br />
            During the process, every participant will participate in classes that will introduce them to basic concepts of different areas, other than solving practical weekly Capture the Flag challenges made for the process. It is not necessary to have previous knowledge to participate on it.
            <br /><br />
            At the end of the PIng, the participants that are interested in continuing to participate in the group can start their participations in the area weekly meetings after signing a Responsability Term. This term defines the ethical guidelines that should be followed, at risk of being temporarily of permanently removed from the group in case of infractions.
          </Terminal>
        </div>
      </div>
    </main>
  );
}