import axios from 'axios';
import { WIKIPEDIA, GOOGLE } from './constants';

const API_ACCESS_KEY = 'c63d49f3856e9c506332aa131495ed76';

export const detectTextLanguage = async (text) => {
  const response = await axios
    .get('http://api.languagelayer.com/detect?access_key=' + API_ACCESS_KEY + '&query=' + text);
  return response.data;
}

export const openSource = (searchTerm, source) => {
  let URL
  if(source === WIKIPEDIA) {
    URL = 'https://en.wikipedia.org/wiki/' + searchTerm + '_language'
  } else if(source === GOOGLE) {
    URL = 'https://www.google.com/search?q=' + searchTerm + '+language'
  }
  window.open(URL, "_blank")
}
