import axios from 'axios';

const ACCESS_KEY = 'kot6MaQOJxV7GzM-FzCJJgw-MKlr9MHK--3pFwT-x8U';
const BASE_URL = 'https://api.unsplash.com';

export const fetchImages = async (query, page = 1, perPage = 12) => {
  const response = await axios.get(`${BASE_URL}/search/photos`, {
    params: {
      query,
      page,
      per_page: perPage,
    },
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  });

  return response.data;
};
