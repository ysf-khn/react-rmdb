import { useState, useEffect } from 'react';

//API
import API from '../API';

//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

//Components

//Hook

//Image
import NoImage from '../images/no_image.jpg';

const Home = () => {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (page, searchTerm = '') => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(page, searchTerm);
      console.log(movies);
    } catch (error) {
      setError(true);
    }
  };

  //Initial render
  useEffect(() => {
    fetchMovies(1);
  }, []);

  return <div>Homepage</div>;
};

export default Home;
