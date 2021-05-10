import { useEffect } from 'react'
import React from 'react';

import Head from '../shared/components/head';
import Navbar from '../shared/components/navbar/navbar';
import Footer from '../shared/components/footer';

import initMaps from '../public/static/scripts/customMap'

import { Trans, withTranslation } from 'react-i18next';

function aboutus ({ t }){

  useEffect(() => { 
    initMaps()
  }, [])

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
                <h1 className="text-4xl text-left font-bold"><Trans i18nKey="aboutus:goals_title">Objetivos do Ganesh</Trans></h1>
                
                <p className="my-4"><Trans i18nKey="aboutus:ganesh_god">Ganesh é um dos deuses mais venerados do hinduísmo, referido como <strong>"Destruidor de Obstáculos"</strong> e <strong>"Mestre do Intelecto"</strong>. Inspirados por essa divindade e pela crescente importância da <strong>Segurança da Informação</strong> no contexto atual, alguns estudantes do ICMC-USP (Instituto de Ciências Matemáticas e de Computação) decidiram criar um grupo extracurricular na área.</Trans></p>

                <p className="my-4"><Trans i18nKey="aboutus:goals">Por meio do estudo e do desenvolvimento de técnicas e algoritmos voltados para a segurança de sistemas computacionais e redes de computadores, o grupo visa o aprendizado, difusão e troca de conhecimentos e experiências entre os membros.</Trans></p>
                
                <p className="my-4"><Trans i18nKey="aboutus:external">Além disto, o grupo também visa a integração e interação com outros grupos externos à Universidade, bem como a difusão de suas experiências e conhecimentos junto a comunidade externa por meio de atividades, minicursos e palestras.</Trans></p>
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
              
              <div className="AboutUs__Organization_Org text-justify text-white px-8 md:px-12 md:w-1/2">
                <h1 className="text-4xl text-left font-bold"><Trans i18nKey="aboutus:organization_title">Organização do Grupo</Trans></h1>
                
                <p className="my-4"><Trans i18nKey="aboutus:formal_start">Com a sua fundação dada formalmente em 2017, o Ganesh é organizado em <strong>Frentes de Estudos e Pesquisa</strong>, tendo atualmente as seguintes frentes ativas: Criptografia, Redes e Pentesting, Engenharia Reversa, Segurança Web e Hardware Hacking. </Trans></p>

                <p className="my-4"><Trans i18nKey="aboutus:meetings">Desta forma, fica ao critério dos membros decidir quais dos temas possui mais interesse e participar das diversas reuniões semanais que ocorrem durante o semestre letivo.</Trans></p>

                <p className="my-4"><Trans i18nKey="aboutus:colaborators">Por fim, o grupo permite a participação de pessoas não vinculadas à USP como colaboradores, permitindo sua participação nas demais atividades e possui uma estrutura bastante flexível e horizontal que pode ser vista com mais detalhes no nosso <a href="#" target="_blank">Estatuto de Regras</a>.</Trans></p>
              </div>

              <div className="AboutUs__Organization_Ping text-justify text-white px-8 md:px-12 md:w-1/2">
                <h1 className="text-4xl text-left font-bold"><Trans i18nKey="aboutus:ping_title">Quero me tornar Membro!</Trans></h1>
                
                <p className="my-4"><Trans i18nKey="aboutus:ping1">Para se tornar um membro do Ganesh, o unico pré-requisito é a participação ativa do <strong>PIng</strong> (Processo de Ingresso) que ocorre no decorrer do primeiro semestre letivo todos os anos.</Trans></p>

                <p className="my-4"><Trans i18nKey="aboutus:ping2">Durante o processo, cada participante irá participar de aulas que introduzem conceitos básicos das diferentes frentes, além de resolver desafios práticos semanais no CTF do processo (Obs: não é necessário possuir conhecimentos prévios para participar). </Trans></p>

                <p className="my-4"><Trans i18nKey="aboutus:ping3">Ao fim do PIng, os participantes que se engajaram e tiverem interesse de continuar no grupo podem iniciar suas participações nas frentes desejadas após assinarem um <a href="#" target="_blank">Termo de Responsabilidade</a>. Esse termo define as diretivas éticas que devem ser respeitadas mediante risco de afastamento temporário ou permanente em caso de infrações.</Trans></p>
              </div>

            </div>
          </div>
        </section>

        <section className="AboutUs__Map">
          <div id="map"></div>
        </section>

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

          @media (max-width: 768px) {
            .AboutUs__GroupIntro .container > *,
            .AboutUs__Organization .container > * { 
              flex-flow: column nowrap;
              text-align: center;
            }

            .AboutUs__GroupIntro_Image img { 
              max-width: 100%;
            }

            .AboutUs__Organization_Ping h1 {
              border-top: solid 1px #666;
              margin-top: 1rem;
              padding-top: 1rem; 
            }
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
