import { useEffect, useState } from "react";
import { MovieService } from "../api/MovieService";
import { MoviesList } from "../components/MoviesList";
import { MovieContainer } from "../styles/MoviesComponent";

export const Home = () => {

    const [movies, setMovies] = useState([]);
    const fetchMovies = async () => {
      const { data } = await MovieService.getMovies();
      setMovies(data.results);
      console.log(data.results);
    }
  
    useEffect(() => {
      fetchMovies();
    }, []);
  
    return (
        <MovieContainer>
            <MoviesList movies={movies} />
        </MovieContainer>
    )

}