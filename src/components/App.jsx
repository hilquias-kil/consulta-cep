import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEqual from 'lodash/isEqual';

import getAddress from '../actions/getAddress';
import { removeAddress } from '../actions';

import CepField from './CepField/CepField';
import Addresses from './Addresses/Addresses';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addresses: [],
      loading: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(nextProps.addresses, this.state.addresses)) {
      this.setState(
        {
          addresses: nextProps.addresses,
        },
        () => this.scroll(),
      );
    }
    this.setState({
      loading: nextProps.loading,
    });
  }

  scroll() {
    let el = document.querySelector('.Addresses');
    el.scrollTo(0, el.scrollHeight);
  }

  render() {
    const { pushCep, removeAddress } = this.props;
    const { addresses, loading } = this.state;
    return (
      <main className="App">
        <CepField pushCep={pushCep} />
        <Addresses
          addresses={addresses}
          remove={address => removeAddress(address)}
          loading={loading}
        />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  addresses: state.addresses,
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  pushCep: cep => dispatch(getAddress(cep)),
  removeAddress: obj => dispatch(removeAddress(obj)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
