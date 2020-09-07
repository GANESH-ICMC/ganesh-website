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
    {id:1, title: "in-silico Reverse Engineering Lecture", description:"September 14, 2019 - Lecture about techniques for analysing integrated cirtuits at silicon level. It was organized by us and presented by an IME-USP student", imagesrc:"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"},
    {id:2, title: "Vacation Course", description:"July 1-5, 2019 - Vacation Course with theory and practice on various topics on attack and defense techniques.2", imagesrc:"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"},
    {id:3, title: "CryptoRave 2019 Travel", description:"May 3-4, 2019 - Travel to visit the CryptoRave event at São Paulo", imagesrc:"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"},
    {id:4, title: "VIM Course", description:"March 16, 2019 - Course about the basic usage of the VIM text editor", imagesrc:"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"},
    {id:5, title: "2019 Entry Process", description:"February 25, 2019 - The Entry process is composed of a series of classes introducing information security to prepare new members for the group's work", imagesrc:"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"},
    {id:6, title: "Safe Internet Day TV Report", description:"February 5, 2019 - TV report at Futura channel about information security", imagesrc:"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"},
    {id:7, title: "WHOAMI movie", description:"October 31, 2018 - In a partnership with the PET group we have organized the Screening of the German film \"Whoami\", which has the main themes being information security and privacy", imagesrc:"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"},
    {id:8, title: "15th H2HC Travel", description:"October 20-21, 2018 - Travel to visit the Hacker to Hacker Conference security event at São Paulo", imagesrc:"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"},
    {id:9, title: "Car Hacking Lecture", description:"September 13, 2018 - Lecture about cybernetic vehicular security organized by us and presented by the Secure Force enterprise", imagesrc:"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"},
    {id:10, title: "Pint of Science Presentation", description:"May 15, 2018 - Presentation with the theme \"Help: I was hacked and the drone vanished!\" in the Pint of Science event. Pint of Science is a festival that aims to deliver talks on science research in an accessible format to the public, mainly across bars, pubs, cafes and other public spaces", imagesrc:"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"},
    {id:11, title: "Admission Process of 2018", description:"March 23, 2018 - The admission process is composed of a series of classes introducing information security to prepare new members for the group's work", imagesrc:"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"},
    {id:12, title: "Regional Informatics School", description:"March 12-14, 2018 - Course about Information Security Attack Techniques for the Regional Informatics School of Presidente Prudente, Marília and São Carlos cities", imagesrc:"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"},
    {id:13, title: "VIM Course", description:"November 25, 2017 - Course about the basic usage of the VIM text editor", imagesrc:"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"},
    {id:14, title: "BlueBorne Presentation for Roadsec", description:"November 11, 2017 - Demonstration about BlueBorne attack, witch exploits a Bluetooth vulnerability. The presentation was in Roadsec, the biggest security event on Latin America", imagesrc:"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"},
    {id:15, title: "UNESP Rio Claro Course", description:"October 23, 2017 - Course about Information Security Attack Techniques at UNESP Rio Claro University", imagesrc:"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"},
    {id:16, title: "SEnC 2017 Course", description:"September 19, 2017 - Course about Information Security Attack Techniques for USP's Computer Engineering Week (SEnC). This course had a duration of 8 hours and aimed to give a general vision on digital security through presentations on theory and practice", imagesrc:"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"},
    {id:17, title: "PlaceHolder Title", description:"Placeholder Description", imagesrc:"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"}
  ]);

  return (
    <div className='container mx-auto px-4 py-8'>
      <ul className='flex flex-row flex-wrap my-4'>
        {
          information.map(info => (
            <li key={info.id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col mb-4'>
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
