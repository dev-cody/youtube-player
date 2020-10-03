import axios from 'axios';

const KEY = "AIzaSyDNn6SI7oFmiTfqF44zMWrafzjs-yO0G-0";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});

