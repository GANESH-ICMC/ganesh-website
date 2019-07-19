import React from 'react';
import HeadNext from 'next/head';
import { string } from 'prop-types';

const defaultTitle = '';
const defaultDescription = '';
const defaultOGURL = '';
const defaultOGImage = '';

const Head = props => (
  <HeadNext>
    <meta charSet="UTF-8" />
    <title>{props.title || defaultTitle}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
    <link rel="apple-touch-icon" href="/static/touch-icon.png" />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/static/favicon-32x32.png" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || defaultTitle} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <link rel="stylesheet" href="/static/styles/tailwind.min.css" />
    <link rel="stylesheet" href="/static/styles/style.css" />
    <link
      rel="stylesheet"
      media="screen and (max-width:769px)"
      href="/static/styles/mobile/navbar.css"
    />
    <link
      rel="stylesheet"
      media="screen and (min-width:769px)"
      href="/static/styles/desktop/navbar.css"
    />
    <link
      rel="stylesheet"
      media="screen and (max-width:769px)"
      href="/static/styles/mobile/navbar-nojs.css"
    />
    <link
      rel="stylesheet"
      media="screen and (min-width:769px)"
      href="/static/styles/desktop/navbar-nojs.css"
    />
    <link href="/static/webfonts/roboto/stylesheet.css" rel="stylesheet" />
    <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
    <link rel="manifest" href="/static/manifest.json" />
    <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#000000" />
    <meta name="apple-mobile-web-app-title" content="Ganesh" />
    <meta name="application-name" content="Ganesh" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="msapplication-TileImage" content="/static/mstile-144x144.png" />
    <meta name="theme-color" content="#ffffff" />
  </HeadNext>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
};

export default Head;
