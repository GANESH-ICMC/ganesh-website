import React from 'react';

import Head from '../shared/components/head';

// Full page with custom ganesh map, to use call this page with an iframe
// to avoid load problems and state bugs
const Map = () => (
  <>
    <Head
      title='Ganesh - Map Location'
      description=""
    />

    <section className="AboutUs__Map">
      <div id="map" style={{
        display: "block", overflow: "hidden",
        width: "100vw", height: "100vh",  
      }}  ></div>
    </section>

    {/* Google Maps Scripts */}
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDAeBwdE6sYsi91nCp7tS1JDaUfFz4v0zU&callback=initMaps" type="text/javascript"></script>
    <script src="/static/scripts/customMap.js" type="text/javascript"></script>
  </>
);

export default Map;
