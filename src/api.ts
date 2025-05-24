import axios from 'axios';
import { UnsplashImage, UnsplashResponse } from './types'

const ACCESS_KEY = 'kot6MaQOJxV7GzM-FzCJJgw-MKlr9MHK--3pFwT-x8U';
const BASE_URL = 'https://api.unsplash.com';

export const fetchImages = async (query: string, page: number = 1, perPage: number = 12): Promise<UnsplashResponse> => {
  const response = await axios.get<UnsplashResponse>(`${BASE_URL}/search/photos`, {
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
