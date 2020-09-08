import React from 'react';
import { useState } from 'react';

import Head from '../shared/components/head';
import Navbar from '../shared/components/navbar/navbar';
import Footer from '../shared/components/footer';

/* import '../public/static/styles/style.css'*/ 

function Bloco({title, description, imagesrc}) {
  return (
      <div className='rounded shadow-md bg-white mx-4'>
        <div className='border-gray-700 border-4 rounded-t h-64 frame'>
          <img src={imagesrc}/>
        </div>
        <div className='flex flex-col my-2 mx-4'>
          <span className='text-gray-800 text-lg'>{title}</span>
          <span className='text-gray-800 text-base'>{description}</span>
        </div>
      </div>
  )
}

function App() {
  const [information, setInformation] = useState([
    {title: "PlaceHolder Title", description:"Placeholder Description", imagesrc:"/static/images/no_image_available.svg"},
    {title: "in-silico Reverse Engineering Lecture", description:"September 14, 2019 - Lecture about techniques for analysing integrated cirtuits at silicon level. It was organized by us and presented by an IME-USP student", imagesrc:"/static/images/thumb_revsilicio_0.jpg"},
    {title: "Vacation Course", description:"July 1-5, 2019 - Vacation Course with theory and practice on various topics on attack and defense techniques.2", imagesrc:"/static/images/no_image_available.svg"},
    {title: "CryptoRave 2019 Travel", description:"May 3-4, 2019 - Travel to visit the CryptoRave event at São Paulo", imagesrc:"/static/images/thumb_cryptorave2019_0.jpg"},
    {title: "VIM Course", description:"March 16, 2019 - Course about the basic usage of the VIM text editor", imagesrc:"/static/images/no_image_available.svg"},
    {title: "2019 Entry Process", description:"February 25, 2019 - The Entry process is composed of a series of classes introducing information security to prepare new members for the group's work", imagesrc:"/static/images/no_image_available.svg"},
    {title: "Safe Internet Day TV Report", description:"February 5, 2019 - TV report at Futura channel about information security", imagesrc:"/static/images/thumb_futura_0.jpg"},
    {title: "WHOAMI movie", description:"October 31, 2018 - In a partnership with the PET group we have organized the Screening of the German film \"Whoami\", which has the main themes being information security and privacy", imagesrc:"/static/images/no_image_available.svg"},
    {title: "15th H2HC Travel", description:"October 20-21, 2018 - Travel to visit the Hacker to Hacker Conference security event at São Paulo", imagesrc:"/static/images/thumb_h2hc2018_0.jpg"},
    {title: "Car Hacking Lecture", description:"September 13, 2018 - Lecture about cybernetic vehicular security organized by us and presented by the Secure Force enterprise", imagesrc:"/static/images/thumb_carhacking_0.jpg"},
    {title: "Pint of Science Presentation", description:"May 15, 2018 - Presentation with the theme \"Help: I was hacked and the drone vanished!\" in the Pint of Science event. Pint of Science is a festival that aims to deliver talks on science research in an accessible format to the public, mainly across bars, pubs, cafes and other public spaces", imagesrc:"/static/images/thumb_pintofscience_0.jpg"},
    {title: "Admission Process of 2018", description:"March 23, 2018 - The admission process is composed of a series of classes introducing information security to prepare new members for the group's work", imagesrc:"/static/images/no_image_available.svg"},
    {title: "Regional Informatics School", description:"March 12-14, 2018 - Course about Information Security Attack Techniques for the Regional Informatics School of Presidente Prudente, Marília and São Carlos cities", imagesrc:"/static/images/thumb_ris_0.jpg"},
    {title: "VIM Course", description:"November 25, 2017 - Course about the basic usage of the VIM text editor", imagesrc:"/static/images/no_image_available.svg"},
    {title: "BlueBorne Presentation for Roadsec", description:"November 11, 2017 - Demonstration about BlueBorne attack, witch exploits a Bluetooth vulnerability. The presentation was in Roadsec, the biggest security event on Latin America", imagesrc:"/static/images/thumb_blueborne_0.jpg"},
    {title: "UNESP Rio Claro Course", description:"October 23, 2017 - Course about Information Security Attack Techniques at UNESP Rio Claro University", imagesrc:"/static/images/thumb_unesp_0.jpg"},
    {title: "SEnC 2017 Course", description:"September 19, 2017 - Course about Information Security Attack Techniques for USP's Computer Engineering Week (SEnC). This course had a duration of 8 hours and aimed to give a general vision on digital security through presentations on theory and practice", imagesrc:"/static/images/thumb_senc2017_0.jpg"}
  ]);

  return (
    <div className='container mx-auto px-4 py-8'>
      <ul className='flex flex-row flex-wrap my-4'>
        {
          information.map((info, index) => (
            <li key={index} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col mb-4'>
              <Bloco title={info.title} description={info.description} imagesrc={info.imagesrc} />
            </li>
          ))
        }
      </ul>
    </div>
  );
}


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

      <App/>

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
	.activity_014 {
	  background-image: url(/static/images/thumb_cryptorave2019_0.jpg);
	  background-size: cover;
	  background-position: center;
	}
	.activity_009 {
	  background-image: url(/static/images/thumb_h2hc2018_0.jpg);
	  background-size: cover;
	  background-position: center;
	}
	.activity_008 {
	  background-image: url(/static/images/thumb_carhacking_0.jpg);
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
        .img {
          width=64px;
          vertical-align:middle;
        }
      `}</style>
    </main>
    <Footer />
  </React.Fragment>
);

export default Activities;
