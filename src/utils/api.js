import axios from "axios";


const BASE_URL = 'https://www.googleapis.com/youtube/v3'
const options = {
    url: BASE_URL,
    params: {
      maxResults:'50',
      key: process.env.REACT_APP_YOUTUBE_API_KEY
    },
    // headers: {
    //   'X-RapidAPI-Host': 'youtube-v311.p.rapidapi.com',
    //   'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY
    // }
  };
  

  export const fetch = async (url) => {
    return await axios.get(`${BASE_URL}/${url}`, options);
  }