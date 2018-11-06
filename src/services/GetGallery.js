import axios from 'axios';

export default {
  getAllObjects(url) {
    return axios.get(url).then(response => {
      return response.data;
    });
  }
};
