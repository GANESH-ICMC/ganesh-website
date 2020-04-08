import React from 'react';

import Head from '../shared/components/head';
import Navbar from '../shared/components/navbar/navbar';
import Footer from '../shared/components/footer';

const Activities = () => (
  <React.Fragment>
    <Head
      title='Ganesh - Activities'
      description='Extracurricular group focused on information security.'
    />
    <Navbar />
    <main>
      <div className='flex justify-center items-center bg-fixed bg-cover bg-center container-top shadow-md'>
        <h1 className='text-4xl text-center text-white'>Activities</h1>
      </div>
      <div className='container mx-auto px-4 py-8'>
        <ul className='flex flex-row flex-wrap my-4'>

              <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col mb-4'>
                <div className='rounded shadow-md bg-white mx-4'>
                  <div className='border-gray-700 border-4 rounded-t h-64 activity_016' />
                  <div className='flex flex-col my-2 mx-4'>
                    <span className='text-gray-800 text-lg'>in-silico Reverse Engineering Lecture</span>
                    <span className='text-gray-800 text-base'>September 14, 2019 - Lecture about techniques for analysing integrated cirtuits at silicon level. It was organized by us and presented by an IME-USP student</span>
                  </div>
                </div>
              </li>

	      <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col mb-4'>
                <div className='rounded shadow-md bg-white mx-4'>
                  <div className='border-gray-700 border-4 rounded-t h-64 NOME' />
                  <div className='flex flex-col my-2 mx-4'>
                    <span className='text-gray-800 text-lg'>Vacation Course</span>
                    <span className='text-gray-800 text-base'>July 1-5, 2019 - Vacation Course with theory and practice on various topics on attack and defense techniques.</span>
                  </div>
                </div>
              </li>

              <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col mb-4'>
                <div className='rounded shadow-md bg-white mx-4'>
                  <div className='border-gray-700 border-4 rounded-t h-64 NOME' />
                  <div className='flex flex-col my-2 mx-4'>
                    <span className='text-gray-800 text-lg'>CryptoRave 2019 Travel</span>
                    <span className='text-gray-800 text-base'>May 3-4, 2019 - Travel to visit the CryptoRave event at São Paulo</span>
                  </div>
                </div>
              </li>

              <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col mb-4'>
                <div className='rounded shadow-md bg-white mx-4'>
                  <div className='border-gray-700 border-4 rounded-t h-64 NOME' />
                  <div className='flex flex-col my-2 mx-4'>
                    <span className='text-gray-800 text-lg'>VIM Course</span>
                    <span className='text-gray-800 text-base'>March 16, 2019 - Course about the basic usage of the VIM text editor</span>
                  </div>
                </div>
              </li>

              <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col mb-4'>
                <div className='rounded shadow-md bg-white mx-4'>
                  <div className='border-gray-700 border-4 rounded-t h-64 NOME' />
                  <div className='flex flex-col my-2 mx-4'>
                    <span className='text-gray-800 text-lg'>Ingress Process 2019</span>
                    <span className='text-gray-800 text-base'>February 25, 2019 - The Ingress process is composed of a series of classes introducing information security to prepare new members for the group's work</span>
                  </div>
                </div>
              </li>

              <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col mb-4'>
                <div className='rounded shadow-md bg-white mx-4'>
                  <div className='border-gray-700 border-4 rounded-t h-64 NOME' />
                  <div className='flex flex-col my-2 mx-4'>
                    <span className='text-gray-800 text-lg'>Safe Internet Day TV Report</span>
                    <span className='text-gray-800 text-base'>February 5, 2019 - TV report at Futura channel about information security</span>
                  </div>
                </div>
              </li>

              <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col mb-4'>
                <div className='rounded shadow-md bg-white mx-4'>
                  <div className='border-gray-700 border-4 rounded-t h-64 NOME' />
                  <div className='flex flex-col my-2 mx-4'>
                    <span className='text-gray-800 text-lg'>WHOAMI movie </span>
                    <span className='text-gray-800 text-base'>October 31, 2018 - In a partnership with the PET group we have organized the Screening of the German film "Whoami", witch has themes of security and privacy</span>
                  </div>
                </div>
              </li>

              <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col mb-4'>
                <div className='rounded shadow-md bg-white mx-4'>
                  <div className='border-gray-700 border-4 rounded-t h-64 NOME' />
                  <div className='flex flex-col my-2 mx-4'>
                    <span className='text-gray-800 text-lg'>15th H2HC Travel</span>
                    <span className='text-gray-800 text-base'>October 20-21, 2018 - Travel to visit the Hacker to Hacker Conference security event at São Paulo</span>
                  </div>
                </div>
              </li>

              <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col mb-4'>
                <div className='rounded shadow-md bg-white mx-4'>
                  <div className='border-gray-700 border-4 rounded-t h-64 NOME' />
                  <div className='flex flex-col my-2 mx-4'>
                    <span className='text-gray-800 text-lg'>Car Hacking Lecture</span>
                    <span className='text-gray-800 text-base'>September 13, 2018 - Lecture about cybernetic vehicular security organized by us and presented by the Secure Force enterprise</span>
                  </div>
                </div>
              </li>

              <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col mb-4'>
                <div className='rounded shadow-md bg-white mx-4'>
                  <div className='border-gray-700 border-4 rounded-t h-64 activity_007' />
                  <div className='flex flex-col my-2 mx-4'>
                    <span className='text-gray-800 text-lg'>Pint of Science Presentation</span>
                    <span className='text-gray-800 text-base'>May 15, 2018 - Presentation with the theme "Help: I was hacked and the drone vanished!" in the Pint of Science event. Pint of Science is a festival that aims to deliver talks on science research in an accessible format to the public, mainly across bars, pubs, cafes and other public spaces
</span>
                  </div>
                </div>
              </li>

              <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col mb-4'>
                <div className='rounded shadow-md bg-white mx-4'>
                  <div className='border-gray-700 border-4 rounded-t h-64 NOME' />
                  <div className='flex flex-col my-2 mx-4'>
                    <span className='text-gray-800 text-lg'>Admission Process of 2018</span>
                    <span className='text-gray-800 text-base'>March 23, 2018 - The admission process is composed of a series of classes introducing information security to prepare new members for the group's work</span>
                  </div>
                </div>
              </li>

              <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col mb-4'>
                <div className='rounded shadow-md bg-white mx-4'>
                  <div className='border-gray-700 border-4 rounded-t h-64 activity_005' />
                  <div className='flex flex-col my-2 mx-4'>
                    <span className='text-gray-800 text-lg'>Regional Informatics School</span>
                    <span className='text-gray-800 text-base'>March 12-14, 2018 - Course about Information Security Attack Techniques for the Regional Informatics School of Presidente Prudente, Marília and São Carlos cities</span>
                  </div>
                </div>
              </li>

              <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col mb-4'>
                <div className='rounded shadow-md bg-white mx-4'>
                  <div className='border-gray-700 border-4 rounded-t h-64 NOME' />
                  <div className='flex flex-col my-2 mx-4'>
                    <span className='text-gray-800 text-lg'>VIM Course</span>
                    <span className='text-gray-800 text-base'>November 25, 2017 - Course about the basic usage of the VIM text editor</span>
                  </div>
                </div>
              </li>

              <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col mb-4'>
                <div className='rounded shadow-md bg-white mx-4'>
                  <div className='border-gray-700 border-4 rounded-t h-64 activity_003' />
                  <div className='flex flex-col my-2 mx-4'>
                    <span className='text-gray-800 text-lg'>BlueBorne Presentation for Roadsec</span>
                    <span className='text-gray-800 text-base'>November 11, 2017 - Demonstration about BlueBorne attack, witch exploits a Bluetooth vulnerability. The presentation was in Roadsec, the biggest security event on Latin America</span>
                  </div>
                </div>
              </li>

              <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col mb-4'>
                <div className='rounded shadow-md bg-white mx-4'>
                  <div className='border-gray-700 border-4 rounded-t h-64 activity_002' />
                  <div className='flex flex-col my-2 mx-4'>
                    <span className='text-gray-800 text-lg'>UNESP Rio Claro Course</span>
                    <span className='text-gray-800 text-base'>October 23, 2017 - Course about Information Security Attack Techniques at UNESP Rio Claro University</span>
                  </div>
                </div>
              </li>

              <li className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col mb-4'>
                <div className='rounded shadow-md bg-white mx-4'>
                  <div className='border-gray-700 border-4 rounded-t h-64 activity_001' />
                  <div className='flex flex-col my-2 mx-4'>
                    <span className='text-gray-800 text-lg'>SEnC 2017 Course</span>
                    <span className='text-gray-800 text-base'>September 19, 2017 - Course about Information Security Attack Techniques for USP's Computer Engineering Week (SEnC). This course had a duration of 8 hours and aimed to give a general vision on digital security through presentations on theory and practice</span>
                  </div>
                </div>
              </li>
        </ul>
      </div>
      <style jsx>{`
        .container-top {
          background-image: url(/static/images/bgfull.jpg);
          height: 250px;
        }
	.activity_016 {
	  background-image: url(/static/images/thumb_revsilicio_0.jpg);
	  background-size: cover;
	  background-position: center;
	}
	.activity_007 {
	  background-image: url(/static/images/thumb_pintofscience_0.jpg);
	  background-size: cover;
	  background-position: center;
	}
	.activity_005 {
	  background-image: url(/static/images/thumb_ris_0.jpg);
	  background-size: cover;
	  background-position: center;
	}
	.activity_003 {
	  background-image: url(/static/images/thumb_blueborne_0.jpg);
	  background-size: cover;
	  background-position: center;
	}
	.activity_002 {
	  background-image: url(/static/images/thumb_unesp_0.jpg);
	  background-size: cover;
	  background-position: center;
	}
	.activity_001 {
	  background-image: url(/static/images/thumb_senc2017_0.jpg);
	  background-size: cover;
	  background-position: center;
	}
      `}</style>
    </main>
    <Footer />
  </React.Fragment>
);

export default Activities;
