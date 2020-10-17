import React from 'react';
import { useState } from 'react';

import Head from '../shared/components/head';
import Navbar from '../shared/components/navbar/navbar';
import Footer from '../shared/components/footer';

/* import '../public/static/styles/style.css'*/ 

function Bloco({title, description, date, imagesrc}) {
  return (
      <div className='rounded shadow-md bg-white mx-4'>
        <div className='border-gray-700 border-4 rounded-t h-64 frame'>
          <img src={imagesrc}/>
        </div>
        <div className='flex flex-col my-2 mx-4'>
          <span className='text-gray-800 text-lg'>{title}</span>
          <span className='text-gray-800 text-base'>{date} - {description}</span>
        </div>
      </div>
  )
}

function App() {
  const [information, setInformation] = useState([
    {title: "SEnC 2019 Course", date:"September 24, 2019", description:"Course about Malwares and Viruses at USP's Computer Engineering Week (SEnC). The course aimed to explain the basis of Malwares, how they work, and a simple way to create a keylogger.", imagesrc:"/static/images/thumb_senc2019.jpg"},
	  {title: "in-silico Reverse Engineering Lecture", date:"September 14, 2019 ", description:"Lecture about techniques for analysing integrated cirtuits at silicon level. It was organized by us and presented by an IME-USP student", imagesrc:"/static/images/thumb_revsilicio_0.jpg"},
    {title: "Vacation Course", date:"July 1-5, 2019 ", description:"Vacation Course with theory and practice on various topics on attack and defense techniques.2", imagesrc:"/static/images/thumb_vacation_course.jpg"},
    {title: "VIM Course", date:"March 16, 2019", description:" Course about the basic usage of the VIM text editor", imagesrc:"/static/images/thumb_vim.png"},
    {title: "SEnC 2018 Course", date:"October 24, 2018", description:"Course about Wireless Networks at USP's Computer Engineering Week (SEnC). The course aimed to explain Wireless Networks and some attacks.", imagesrc:"/static/images/thumb_senc2018.jpg"},
	  {title: "Car Hacking Lecture", date:"September 13, 2018", description:" Lecture about cybernetic vehicular security organized by us and presented by the Secure Force enterprise", imagesrc:"/static/images/thumb_carhacking_0.jpg"},
    {title: "Pint of Science Presentation", date:"May 15, 2018", description:" Presentation with the theme \"Help: I was hacked and the drone vanished!\" in the Pint of Science event. Pint of Science is a festival that aims to deliver talks on science research in an accessible format to the public, mainly across bars, pubs, cafes and other public spaces", imagesrc:"/static/images/thumb_pintofscience_0.jpg"},
    {title: "VIM Course", date:"November 25, 2017", description:" Course about the basic usage of the VIM text editor", imagesrc:"/static/images/thumb_vim.png"},
    {title: "BlueBorne Presentation for Roadsec", date:"November 11, 2017", description:" Demonstration about BlueBorne attack, witch exploits a Bluetooth vulnerability. The presentation was in Roadsec, the biggest security event on Latin America", imagesrc:"/static/images/thumb_blueborne_0.jpg"},
    {title: "UNESP Rio Claro Course", date:"October 23, 2017", description:" Course about Information Security Attack Techniques at UNESP Rio Claro University", imagesrc:"/static/images/thumb_unesp_0.jpg"},
    {title: "SEnC 2017 Course", date:"September 19, 2017", description:" Course about Information Security Attack Techniques for USP's Computer Engineering Week (SEnC). This course had a duration of 8 hours and aimed to give a general vision on digital security through presentations on theory and practice", imagesrc:"/static/images/thumb_senc2017_0.jpg"}
  ]);

  return (
    <div className='container mx-auto px-4 py-8'>
      <ul className='flex flex-row flex-wrap my-4'>
        {
          information.map((info, index) => (
            <li key={index} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col mb-4'>
              <Bloco title={info.title} description={info.description} date={info.date} imagesrc={info.imagesrc} />
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
