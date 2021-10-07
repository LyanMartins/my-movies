import axios from 'axios';

const apiKey = '49e003c76f129d759594d1483a7235ba';
const BASE_URL = 'https://api.themoviedb.org/3/';
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${apiKey}`;

export class MovieService {

    static getMovies() {
        return axios(withBaseUrl('movie/popular'));
    }
    
}