import axios from 'axios';

const Base_URL = 'https://youtube-v31.p.rapidapi.com';
//const Base_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    url:Base_URL,
    params: {
        maxResults:'50'
    },
    headers: {
    
    'X-RapidAPI-Key': '80c2cc647amsh885e2441f5d57e4p16a3e0jsn27ecb49809d8',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
// /baseUrl/getVides/
// this function is utlis function which helps to make any api
// request by direct calling this and passing the data;
//noise na!
  export const fetchFromAPI = async (url)=>{
    const {data} = await axios.get(`${Base_URL}/${url}`,options);
    return data;
  }



