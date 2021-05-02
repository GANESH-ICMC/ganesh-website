import React from 'react';
import { Component, useState } from 'react';


import i18n from '../locale/locale.js';
import { Trans, withTranslation, useTranslation } from 'react-i18next';

import classNames from "classnames";

import Head from '../shared/components/head';
import Navbar from '../shared/components/navbar/navbar';
import Footer from '../shared/components/footer';

/* import '../public/static/styles/style.css'*/ 

// FAQ Stuff
function FAQ({
  children,
  defaultOpen = [0, 1],
  open: openFromProps,
  onToggle: onToggleFromProps = () => {}
}) {
  const isControlled = () => (openFromProps ? true : false);
  const [open, setIsOpen] = useState(defaultOpen);
  const getOpen = () => (isControlled() ? openFromProps : open);
  const isOpen = index => {
    return getOpen().includes(index) ? false : true;
  };
  const onToggle = index => {
    if (isControlled()) {
      onToggleFromProps(index);
    } else {
      if (getOpen().includes(index)) {
        setIsOpen(getOpen().filter(item => item !== index));
      } else {
        setIsOpen([...getOpen(), index]);
      }

      onToggleFromProps(index);
    }
  };
  return (
    <dl>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          isOpen: isOpen(index),
          onToggle: () => onToggle(index)
        });
      })}
    </dl>
  );
}

function Question({ children, isOpen, answerId, onToggle }) {
  return (
    <dt>
      <button
        className="FAQ__question"
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={onToggle}
      >
        {children(isOpen, onToggle)}
      </button>
    </dt>
  );
}

function Answer({ children, id, isOpen }) {

  const answers = children.split('\n')


  const mergedClassname = classNames("FAQ__answer", {
    "FAQ__answer--hidden": !isOpen
  });
  return (
    <dd>
      <div className={mergedClassname} id={id}>
        
        { answers.map((v,i) => <p key={'answer-p-'+i}>{v}</p>) }
        
        {/* {children} */}
      </div>
    </dd>
  );
}

function QAItem({ children, isOpen, onToggle }) {
  return React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      isOpen: isOpen,
      onToggle: onToggle
    });
  });
}

FAQ.QAItem = QAItem;
FAQ.Question = Question;
FAQ.Answer = Answer;


function App() {
	const { t, i18n } = useTranslation();
	var cards = t('faq:dropdown', { returnObjects: true});

  return (
    <div className='container mx-auto'>
        {
          cards.map((info, index) => (
            <li key={index} className='FAQ__item  w-full flex flex-col mb-4'>
            <FAQ>                   
              <FAQ.QAItem>
                <FAQ.Question answerId={info.id}>
                  {(isOpen, onToggle) => {
                    return (
                      <>
                        <span>{info.question}</span>
                      </>
                    );
                  }}
                </FAQ.Question>
                <FAQ.Answer id={info.id}>{info.answer}</FAQ.Answer>
               </FAQ.QAItem>                 
            </FAQ>
            </li>
          ))
        }
    </div>
  );
	
}
const AppComponent = withTranslation()(App);




function activities ({ t }){
return (
  <React.Fragment>
    <Head
      title='Ganesh - FAQ'
      description='Extracurricular group focused on information security.'
    />
    <Navbar />
    <main>
      <div className='flex justify-center items-center bg-fixed bg-cover bg-center container-top shadow-md'>
        <h1 className='text-4xl text-center text-white'>FAQ</h1>
      </div>

	<div className='container mx-auto flex flex-col items-center justify-center h-full p-4'>
        <AppComponent/>
  </div>


      <style jsx>{`
        .container-top {
          background-image: url(/static/images/bgfull.jpg);
          height: 250px;
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
          width: "64px";
          vertical-align:middle;
        }
      `}</style>
    </main>
    <Footer />
  </React.Fragment>
);
}

export default withTranslation()(activities);
