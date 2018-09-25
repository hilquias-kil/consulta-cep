import React from 'react';
import PropTypes from 'prop-types';

const Map = ({ cep }) => (
  <iframe
    title="map"
    width="100%"
    height="500"
    frameBorder="0"
    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDv9kntKJh7fDNYeh086s0e4JtyYUqMsnw&q=${cep}`}
    allowFullScreen=""
  />
);

Map.propTypes = {
  cep: PropTypes.string.isRequired,
};

export default Map;
