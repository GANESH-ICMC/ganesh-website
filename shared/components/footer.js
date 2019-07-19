import React from 'react';

const Footer = () => (
  <React.Fragment>
    <footer className="h-40"></footer>
    <script src="/static/libs/interpolation.js" />
    <script type="module" src="/static/libs/navbar/mobile/background.js" />
    <script type="module" src="/static/libs/navbar/mobile/hamburguer.js" />
    <script type="module" src="/static/libs/navbar/mobile/submenu.js" />
    <script type="module" src="/static/libs/navbar/desktop/submenu.js" />
    <script type="module" src="/static/libs/navbar/desktop/underbar.js" />
    <script type="module" src="/static/libs/navbar/desktop/background.js" />
		<script type="module" src="/static/libs/navbar/nojsDetection.js" />
  </React.Fragment>
);

export default Footer;
