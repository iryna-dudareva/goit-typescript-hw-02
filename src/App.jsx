import './App.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'


import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import Loader from './components/Loader/Loader'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import ImageModal from './components/ImageModal/ImageModal'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'



const ACCESS_KEY = 'kot6MaQOJxV7GzM-FzCJJgw-MKlr9MHK--3pFwT-x8U';
function App() {
    const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos`,
          {
            params: {
              query,
              page,
              per_page: 12,
              client_id: ACCESS_KEY,
            },
          }
        );

        if (page === 1) {
          setImages(response.data.results);
        } else {
          setImages((prev) => [...prev, ...response.data.results]);
        }
        setTotalPages(response.data.total_pages);
      } catch (error) {
        setError(error.message);
        toast.error('Failed to fetch images.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearchSubmit = (searchQuery) => {
    if (searchQuery === query) return; 
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
    setError(null);
  };

  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearchSubmit} />

      <Toaster position="top-right" reverseOrder={false} />
      {error && <ErrorMessage message={error} />}

      <ImageGallery images={images} onImageClick={openModal} />

      {isLoading && <Loader />}
      {!isLoading && images.length > 0 && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}

      <ImageModal
        isOpen={Boolean(selectedImage)}
        onClose={closeModal}
        image={selectedImage}
      />

    </>
  )
}

export default App
