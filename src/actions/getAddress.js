import jsonp from 'jsonp';
import { addAddress, isLoading } from './index';

const getAddress = cep => {
  return dispatch => {
    dispatch(isLoading(true));
    jsonp(
      `https://viacep.com.br/ws/${cep.replace('-', '')}/json/`,
      (err, data) => {
        dispatch(addAddress(data));
        dispatch(isLoading(false));
      }
    );
  };
};

export default getAddress;
