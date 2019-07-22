import React from 'react';
import HeadNext from 'next/head';
import { string } from 'prop-types';

const defaultTitle = '';
const defaultDescription = '';

const Head = props => (
  <HeadNext>
    <meta charSet='UTF-8' />
    <title>{props.title || defaultTitle}</title>
    <meta
      name='description'
      content={props.description || defaultDescription}
    />
    <link
      rel='apple-touch-icon'
      sizes='180x180'
      href='/static/favicon/apple-touch-icon.png'
    />
    <link
      rel='icon'
      type='image/png'
      sizes='32x32'
      href='/static/favicon/favicon-32x32.png'
    />
    <link
      rel='icon'
      type='image/png'
      sizes='16x16'
      href='/static/favicon/favicon-16x16.png'
    />
    <link
      rel='manifest'
      href='/static/manifest.json'
    />
    <link
      rel='mask-icon'
      href='/static/favicon/safari-pinned-tab.svg'
      color='#000000'
    />
    <link rel='shortcut icon' href='/static/favicon/favicon.ico' />
    <meta name='apple-mobile-web-app-title' content='Ganesh' />
    <meta name='application-name' content='Ganesh' />
    <meta name='msapplication-TileColor' content='#ffffff' />
    <meta
      name='msapplication-config'
      content='/static/favicon/browserconfig.xml'
    />
    <meta name='theme-color' content='#ffffff' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <link rel='stylesheet' href='/static/styles/tailwind.min.css' />
    <link rel='stylesheet' href='/static/styles/style.css' />
    <link
      rel='stylesheet'
      media='screen and (max-width:769px)'
      href='/static/styles/mobile/navbar.css'
    />
    <link
      rel='stylesheet'
      media='screen and (min-width:769px)'
      href='/static/styles/desktop/navbar.css'
    />
    <link
      rel='stylesheet'
      media='screen and (max-width:769px)'
      href='/static/styles/mobile/navbar-nojs.css'
    />
    <link
      rel='stylesheet'
      media='screen and (min-width:769px)'
      href='/static/styles/desktop/navbar-nojs.css'
    />
    <link href='/static/webfonts/roboto/stylesheet.css' rel='stylesheet' />
  </HeadNext>
);

Head.propTypes = {
  title: string,
  description: string
};

export default Head;
