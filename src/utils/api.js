import axios from "axios";
import { option } from "yargs";


const BASE_URL = 'https://youtube-v311.p.rapidapi.com/'
const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.X_RapidAPI_KEY,
      'X-RapidAPI-Host': 'youtube-v311.p.rapidapi.com'
    }
  };
  

  export const fetch = async (url) => {
    const {data} = await axios.get(`${BASE_URL}${url}`, option);
    return data;
  }