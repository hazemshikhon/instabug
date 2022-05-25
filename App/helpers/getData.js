import axios from 'axios';
import {I18nManager} from 'react-native';

export default function getData(url) {
  return axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
