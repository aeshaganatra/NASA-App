const NASA_API_URL = 'https://api.nasa.gov/planetary/apod';
const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY;
const NASA_AUTH_API = `${NASA_API_URL}?api_key=${NASA_API_KEY}&thumbs=${false}`;

export {
  NASA_AUTH_API,
};
