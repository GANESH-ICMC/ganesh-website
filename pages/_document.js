import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en-us'>
        <Head />
        <body>
          <style type="text/css">{`
            .album .photo {
              float: left;
              width: 100px;
              padding: 10px;
            }
            .album .photo a {
              color: rgb(0, 0, 0);
              text-decoration: none;
              opacity: 0.8;
            }
            .album .photo a:hover {
              opacity: 1;
            }
            .album .photo a img {
              width: 100%;
            }
            .album .break {
              display: table;
              clear: both;
            }
            .album .container {
              position: relative;
              display: none;
            }
            .album .container img {
              display: block;
              margin: 0px auto;
              min-width: 100px;
              min-height: 100px;
              max-width: 100%;
              max-height: 80vh;
              cursor: zoom-in;
            }
            .album .container p {
              position: absolute;
              bottom: 15px;
              left: 15px;
              color: white;
              font-size: 20px;
            }
            .album .container .closebtn {
              position: absolute;
              top: 10px;
              right: 15px;
              color: black;
              text-shadow: 0px 0px 4px #FFFFFF;
              font-size: 35px;
            }
          `}</style>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
