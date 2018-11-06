import axios from 'axios';
import apiKey from '../assets/apiKey';

export default {
  getPeriod() {
    return axios
      .get(`/exhibition?venue=HAM&apikey=${apiKey}`)
      .then(response => {
        return response.data;
      });
  }
};
