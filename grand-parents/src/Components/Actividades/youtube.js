import axios from 'axios';
const KEY = 'AIzaSyAt8uCAsvQxU2aJ5yov__nBMo8zChoC3pU'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})