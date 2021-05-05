import React from 'react';

const Footer = () => (
  <footer className="Footer">
    <div className="container mx-auto">
      <div className="flex flex-row items-center py-8">
      
        <div className="Footer__Icons px-8 flex-grow">
          <a href="https://www.facebook.com/ganeshICMC/" target="_blank" className="inline-block mr-2">
            <img src="/static/images/icons/facebook-sign.svg" className=' w-12'/>
          </a>

          <a href="https://github.com/ganesh-icmc" target="_blank" className="inline-block mr-2">
            <img src="/static/images/icons/github-sign.svg" className=' w-12'/>
          </a>

          <a href="https://www.instagram.com/ganeshicmc/" target="_blank" className="inline-block mr-2">
            <img src="/static/images/icons/instagram-sign.svg" className=' w-12'/>
          </a>

          <a href="https://twitter.com/GaneshICMC" target="_blank" className="inline-block mr-2">
            <img src="/static/images/icons/twitter-sign.svg" className=' w-12'/>
          </a>

          <a href="https://www.youtube.com/c/ganeshicmc" target="_blank" className="inline-block mr-2">
            <img src="/static/images/icons/youtube-sign.svg" className=' w-12'/>
          </a>
        </div>

        <div className="Footer__Copyright px-8">
          <p>Copyright &copy; 2021 GANESH</p>
        </div>
    
      </div>
    </div>    
    {/*  */}
  
    <style jsx>{`
      .Footer p { 
        color: #dadada;
      }

      .Footer__Icons img { 
        filter: opacity(0.85) invert();
      }

      @media (max-width: 768px) {
        .Footer .container > * { 
          flex-flow: column nowrap;
          text-align: center;
        }
      }
    `}</style>
  </footer>
);

export default Footer;
