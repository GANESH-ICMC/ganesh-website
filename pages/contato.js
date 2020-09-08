import React from 'react';
import { Component } from 'react';

import Head from '../shared/components/head';
import Navbar from '../shared/components/navbar/navbar';
import Footer from '../shared/components/footer';

class Contact extends Component {
  state = {
    email: {
      sender: '',
      subject: '',
      text: ''
    }
  }

  sendEmail = _ => {
    const { email } = this.state;
    console.log("Trying to send email");
    fetch('http://127.0.0.1:9999/send-email?sender=${email.sender}&topic=${email.topic}&text=${email.text}')
    .catch(err => console.log(err))
  }

  render() {
    const { email } = this.state;
    return (
      <React.Fragment>
        <Head
          title="Ganesh - Contact"
          description='Extracurricular group focused on information security.'
        />
        <Navbar />
          <main>
            <div className="flex justify-center items-center bg-fixed bg-cover bg-center container-top shadow-md">
              <h1 className="text-4xl text-center text-white">Contact</h1>
            </div>
            <div className="container mx-auto px-4 py-8">
              <div className="flex bg-white my-4 rounded-lg shadow-md">
                <div className="p-2 xl:p-4">
                  <div class="fb-page">
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FganeshICMC&tabs=messages%2Ctimeline%2Cevents&width=200&height=400&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="200" height="400" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                  </div>
                  <p className="hidden lg:block text-sm contact-a">
                    <a href="https://github.com/GANESH-ICMC" target="_blank">Github</a>
                    <a href="mailto:ganesh@icmc.usp.br">E-mail</a>
                  </p>
                </div>
                <div className="py-2 pr-2 xl:py-4 xl:pr-4 contact-form">
                  <h2 className="news-title sm:text-lg">
                    Visit our social pages or e-mail us.
                  </h2>
                  <p className="text-sm">
                    <form action="http://ganesh.icmc.usp.br:9999/send-email" method="get" className="form">
                      <div className="text-input">
                        <label for="form-contact-mail">Your e-mail:</label>
                        <span>
                          <input type="email" name="sender" id="form-contact-mail" required="required"
                          onChange={e => this.setState({email: { ...email, sender: e.target.value} })} />
                        </span>
                      </div>
                      <div className="text-input">
                        <label for="form-contact-subject">Subject:</label>
                        <span>
                          <input type="text" name="topic" id="form-contact-subject" required="required"
                          onChange={e => this.setState({email: { ...email, subject: e.target.value} })}   />
                        </span>
                      </div>
                      <div className="textarea-input">
                        <label for="form-contact-body">Message:</label>
                        <span>
                          <textarea name="text" id="form-contact-body" required="required"
                          onChange={e => this.setState({email: { ...email, text: e.target.value} })} ></textarea>
                        </span>
                      </div>
                      <div className="submit-input">
                        <button type="submit" onclick={this.sendEmail}>Send &#187;</button>
                      </div>
                    </form>
                  </p>
                </div>
              </div>
            </div>
            <style type="text/css">{`
              .fb-page iframe {
                border:none;
                overflow:hidden;
              }
              .contact-form {
                width: 100%;
              }
              .form {
                display: block;
                margin-top: 15px;
              }
              .form .text-input, .form .textarea-input, .form .submit-input {
                margin-bottom: 25px;
              }
              .form .text-input span, .form .textarea-input span {
                display: block;
                margin-top: 5px;
              }
              .form .text-input span input, .form .textarea-input span textarea {
                display: block;
                border-style: solid;
                border-width: 0px 0px 2px 0px;
                border-color: rgba(0, 0, 0, 0.25);
                outline-width: 0px;
                margin: 0px 0px;
                max-width: 500px;
                padding: 5px;
                box-sizing: border-box;
                width: 100%;
                transition: border-color 0.25s;
              }
              .form .textarea-input span textarea {
                border-width: 2px;
                min-width: 100%;
                max-width: 100%;
                width: 100%;
                min-height: 100px;
                height: 150px;
              }
              .form .text-input span input:hover, .form .textarea-input span textarea:hover {
                border-color: rgba(0, 0, 0, 1);
              }
              .form .text-input span input:focus, .form .textarea-input span textarea:focus {
                border-color: rgba(66, 220, 163, 1);
              }
              .form .text-input p, .form .textarea-input p {
                display: block;
                margin-top: 5px;
                font-size: 0.8em;
                text-align: justify;
              }
              .form .submit-input {
                text-align: center;
              }
              .form .submit-input button {
                display: inline-block;
                margin: 2px;
                padding: 10px;
                border-style: solid;
                border-width: 2px;
                border-color: rgb(66, 220, 163);
                cursor: pointer;
                color: rgb(66, 220, 163);
                background-color: rgb(255, 255, 255);
                transition: background-color,color 0.25s,0.25s;
              }
              .form .submit-input button:hover {
                color: rgb(0, 0, 0);
                background-color: rgb(66, 220, 163);
              }
              .fb-page, .fb-page * {
                position: static !important;
              }`}
            </style>
            <style jsx>{`
              .contact-a {
                display: block;
                margin-top: 15px;
                text-align: center;
              }
              .contact-a a {
                display: inline-block;
                background-color: transparent;
                color: #42dca3;
                border-color: #42dca3;
                border-style: solid;
                border-width: 1px;
                padding: 15px;
                margin: 5px;
              }
              .contact-a a:hover {
                background-color: #42dca3;
                color: black;
              }
              .container-top {
                background-image: url(/static/images/bgfull.jpg);
                height: 250px;
              }
              .news-image {
                background-image: url(/static/images/400.jpg);
                height: 75px;
                width: 75px;
              }
              .news-title {
                font-size: 0.75rem;
              }
              .news-date {
                display: none;
              }
              @media (min-width: 480px) {
                .news-title {
                  font-size: 1rem;
                }
              }
              @media (min-width: 580px) {
                .news-date {
                  display: block;
                }
              }
              @media (min-width: 640px) {
                .news-image {
                  height: 150px;
                  width: 150px;
                }
                .news-title {
                  font-size: 1.125rem;
                }
              }
              @media (min-width: 1024px) {
                .news-image {
                  height: 200px;
                  width: 200px;
                }
              }
            `}</style>
          </main>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Contact;
