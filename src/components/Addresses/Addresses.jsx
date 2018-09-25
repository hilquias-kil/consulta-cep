import React from 'react';
import PropTypes from 'prop-types';
import Map from '../Map/Map';
import './Addresses.css';

const Addresses = ({ addresses, remove, loading }) => (
  <div className={`Addresses ${loading ? 'loading' : ''}`}>
    {addresses.map(address => (
      <div className="Address" key={address.id}>
        <div className="text">
          <h2>{address.logradouro}</h2>
          <span>{address.bairro}</span>
          <span>
            {address.localidade}
            {' - '}
            {address.uf}
          </span>
        </div>
        <Map cep={address.cep} />
        <button
          type="button"
          className="closeButton"
          onClick={() => remove(address.id)}
        >
          X
        </button>
      </div>
    ))}
  </div>
);

Addresses.propTypes = {
  addresses: PropTypes.arrayOf(
    PropTypes.shape({
      logradouro: PropTypes.string.isRequired,
      bairro: PropTypes.string.isRequired,
      localidade: PropTypes.string.isRequired,
      cep: PropTypes.string.isRequired,
      uf: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  remove: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

Addresses.defaultProps = {
  loading: false,
};

export default Addresses;
