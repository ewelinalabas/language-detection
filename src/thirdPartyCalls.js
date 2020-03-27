import axios from 'axios';
import { THIRD_PARTY } from './constants';
import { API_ACCESS_KEY } from './APIkey';


export const detectTextLanguage = async (text) => {
  const response = await axios
    .get('http://api.languagelayer.com/detect?access_key=' + API_ACCESS_KEY + '&query=' + text);
  return response.data;
}

export const openSource = (searchTerm, source) => {
  let URL
  if(source === THIRD_PARTY.wikipedia) {
    URL = 'https://en.wikipedia.org/wiki/' + searchTerm + '_language'
  } else if(source === THIRD_PARTY.google) {
    URL = 'https://www.google.com/search?q=' + searchTerm + '+language'
  }
  window.open(URL, "_blank")
}
