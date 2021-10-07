import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MovieService } from "../api/MovieService";

export const MovieDetail = () => {
    const { id } = useParams();

    const [movie, setMovie] = useState([]);

    const fetchMovie = async () => {
      const { data } = await MovieService.getMoviesById(id);
      setMovie(data);
    }
  
    useEffect(() => {
      fetchMovie();
    }, []);

    return (
        <>
            <h1>{movie.title}</h1>
            <article>
                {movie.overview}
            </article>
        </>
    )

}