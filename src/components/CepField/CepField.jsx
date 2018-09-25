import React from 'react';
import PropTypes from 'prop-types';
import Input from 'react-number-format';
import './CepField.css';

const CepField = ({ pushCep }) => {
  let input;
  return (
    <div className="CepField">
      <span className="title">Consultar</span>
      <form
        onSubmit={e => {
          e.preventDefault();
          pushCep(input.value);
        }}
      >
        <div className="field">
          <label htmlFor="cep">CEP</label>
          <Input
            id="cep"
            name="cep"
            getInputRef={node => (input = node)}
            format="#####-###"
          />
          <button type="submit">Buscar</button>
        </div>
      </form>
    </div>
  );
};

CepField.propTypes = {
  pushCep: PropTypes.func.isRequired,
};

export default CepField;
