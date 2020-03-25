import axios from 'axios';

const API_ACCESS_KEY = 'c63d49f3856e9c506332aa131495ed76';

export const detectTextLanguage = (text) => {
  return axios
  .get('http://api.languagelayer.com/detect?access_key=' + API_ACCESS_KEY + '&query='+ text)
  .then(response => response.data)
}
