import React from 'react';

import Head from '../shared/components/head';
import Navbar from '../shared/components/navbar/navbar';
import Footer from '../shared/components/footer';

import { Trans, withTranslation } from 'react-i18next';

function aboutus ({ t }){

  return (
    <React.Fragment>
      <Head
        title='Ganesh - About Us'
        description={t('index:description')}
      />
      <Navbar />
      <main>
        {/* Top-level Jumbotron */}
        <div className="flex justify-center items-center bg-fixed bg-cover bg-center container-top shadow-md">
          <h1 className="text-4xl text-center text-white"><Trans i18nKey="aboutus:title">About Us</Trans></h1>
        </div>

        {/* First Section - Group Name */}
        <section className="AboutUs__GroupIntro" style={{backgroundColor: "#fff" }}>
          <div className="container mx-auto">
            <div className="flex flex-row-reverse items-center py-8 md:py-12">
              
              <div className="AboutUs__GroupIntro_Text text-justify px-8 md:px-12 flex-grow">
                <h1 className="text-4xl font-bold">Objetivos do Ganesh</h1>
                
                <p className="my-4">Ganesh é um dos deuses mais venerados do hinduísmo, referido como <strong>"Destruidor de Obstáculos"</strong> e <strong>"Mestre do Intelecto"</strong>. Inspirados por essa divindade e pela crescente importância da <strong>Segurança da Informação</strong> no contexto atual, alguns estudantes do ICMC-USP (Instituto de Ciências Matemáticas e de Computação) decidiram criar um grupo extracurricular na área.</p>

                <p className="my-4">Por meio do estudo e do desenvolvimento de técnicas e algoritmos voltados para a segurança de sistemas computacionais e redes de computadores, o grupo visa o aprendizado, difusão e troca de conhecimentos e experiências entre os membros.</p>
                
                <p className="my-4">Além disto, o grupo também visa a integração e interação com outros grupos externos à Universidade, bem como a difusão de suas experiências e conhecimentos junto a comunidade externa por meio de atividades, minicursos e palestras.</p>
              </div>
              
              <div className="AboutUs__GroupIntro_Image px-8">
                <a href="https://pt.wikipedia.org/wiki/Ganexa" target="_blank">
                  <img src='/static/images/pages/aboutus_ganesh.jpg' alt='Ganesha God'/>
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* First Section - Group Organization */}
        <section className="AboutUs__Organization" style={{backgroundColor: "#333" }}>
          <div className="container mx-auto">
            <div className="flex flex-row items-start py-8 md:py-12">
              
              <div className="AboutUs__Organization_Text text-justify text-white px-8 md:px-12 w-1/2">
                <h1 className="text-4xl font-bold">Organização do Grupo</h1>
                
                <p className="my-4">Com a sua fundação dada formalmente em 2017, o Ganesh é organizado em <strong>Frentes de Estudos e Pesquisa</strong>, tendo atualmente as seguintes frentes ativas: Criptografia, Redes e Pentesting, Engenharia Reversa, Segurança Web e Hardware Hacking. </p>

                <p className="my-4">Desta forma, fica ao critério dos membros decidir quais dos temas possui mais interesse e participar das diversas reuniões semanais que ocorrem durante o semestre letivo.</p>

                <p className="my-4">Por fim, o grupo permite a participação de pessoas não vinculadas à USP como colaboradores, permitindo sua participação nas demais atividades e possui uma estrutura bastante flexível e horizontal que pode ser vista com mais detalhes no nosso <strong><a href="#" target="_blank">Estatuto de Regras</a></strong>.</p>
              </div>

              <div className="AboutUs__Organization_Text text-justify text-white px-8 md:px-12 w-1/2">
                <h1 className="text-4xl font-bold">Quero me tornar Membro!</h1>
                
                <p className="my-4">Para se tornar um membro do Ganesh, o unico pré-requisito é a participação ativa do <strong>PIng</strong> (Processo de Ingresso) que ocorre no decorrer do primeiro semestre letivo todos os anos.</p>

                <p className="my-4">Durante o processo, cada participante irá participar de aulas que introduzem conceitos básicos das diferentes frentes, além de resolver desafios práticos semanais no CTF do processo (Obs: não é necessário possuir conhecimentos prévios para participar). </p>

                <p className="my-4">Ao fim do PIng, os participantes que se engajaram e tiverem interesse de continuar no grupo podem iniciar suas participações nas frentes desejadas após assinarem um <strong><a href="#" target="_blank">Termo de Responsabilidade</a></strong>. Esse termo define as diretivas éticas que devem ser respeitadas mediante risco de afastamento temporário ou permanente em caso de infrações.</p>
              </div>

            </div>
          </div>
        </section>

        <section className="AboutUs__Map">
          <div id="map"></div>
        </section>

        {/* <section>
          <div className='container h-full mx-auto flex flex-col items-center text-center py-4'>
                      
            <div className='flex flex-row flex-wrap justify-center pb-8 md:pb-16'>
              <div className='w-full md:w p-4'>
                <div className='bg-white rounded-lg shadow-md font-bold flex flex-col items-center justify-center p-8 md:p-16 tracking-wide leading-relaxed'>
                  <p align="justify">
                    <Trans i18nKey="aboutus:ganesh_god">
                      Ganesh is one of the most venerated gods of hinduism, known as the simple of logical solutions, also referenced as the "Destroyer of Obstacles". Inspired by this divinity and by the growing importance of the security of the information on the context of the current life, some students from ICMC-USP decided to create an extracurricular group in this area. As the principal goal, the group pretends do spread a culture of awereness about the need of protecting data and systems. To do so, <a href="/atividades">activities</a> of research, education and extension related to the theme are realized by the group.
                    </Trans>
                  </p>
                </div>
              </div>

              <div className='w-full md:w-1/2 p-4'>
                <div className='bg-white rounded-lg shadow-md font-bold flex flex-col items-center justify-center p-8 md:p-16 tracking-wide leading-relaxed'>
                  <p align="justify">
                    <Trans i18nKey="aboutus:formal_start">
                      With the formal start in 2017, the group has been seeking to learn and teach the most it can about security in general.
                    </Trans>
                  </p>
                  <p align="justify">
                    <Trans i18nKey="aboutus:group_areas">
                    To do so, we are organized in five main study and research areas, they are: Cryptography, Network Security, Privacy and GDPR, Reverse Engineering and Web Security. Each of them is described with more details in the respective</Trans> <a href="/frentes"><Trans i18nKey="aboutus:area_page">area page.</Trans></a>
                  </p>
                </div>
              </div>
              <div className='w-full md:w-1/2 p-4'>
                <div className='bg-white rounded-lg shadow-md font-bold flex flex-col items-center justify-center p-8 md:p-16 tracking-wide leading-relaxed'>
                  <p align="justify">
                    <Trans i18nKey="aboutus:non_lucrative">
                    The group is a non lucrative association and it is open to partnerships. It is mainly formed by undergraduation students of the </Trans><a href="/aboutus/usp"><Trans i18nKey="aboutus:usp">University Of São Paulo</Trans></a> <Trans i18nKey="aboutus:location">and located in São Carlos, Brazil, although it is open to the participation of external colaborators if they wish to do so.</Trans>
                  </p>
                  <p align="justify"> 
                    <Trans i18nKey="aboutus:knowledge">In order to make the knowledge gained by the group public, most of our materials are currently stored at our</Trans> <a href="https://github.com/ganesh-icmc"> Github</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <style jsx>{`
          .container-top {
            background-image: url(/static/images/bgfull.jpg);
            height: 250px;
          }

          .AboutUs__GroupIntro_Image img { 
            display: block;
            max-width: 350px;
            overflow: hidden;
            border-radius: 50%;
            box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
            filter: grayscale(60%);
            transition: filter 0.5s;
            transition-timing-function: ease-in-out;
          }
          
          .AboutUs__GroupIntro_Image img:hover { 
            filter: grayscale(20%);
          }
          
          .AboutUs__Organization a,
          .AboutUs__GroupIntro a { 
            color: #0ca899;
          }
          
          .AboutUs__Organization a:hover,
          .AboutUs__GroupIntro a:hover { 
            color: #009688;
            text-decoration: underline;
          }
          
          .AboutUs__Map #map { 
            height: 300px;
          }

        `}</style>
      </main>
      <Footer
        title="Ganesh - About Us"
        description='Extracurricular group focused on information security.'
      />

      {/* Google Maps Scripts */}
      <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDAeBwdE6sYsi91nCp7tS1JDaUfFz4v0zU&callback=initMaps" type="text/javascript"></script>
	    <script src="/static/scripts/customMap.js" type="text/javascript"></script>

    </React.Fragment>
  );

}


export default withTranslation() (aboutus);
