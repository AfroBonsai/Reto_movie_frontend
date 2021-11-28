import '../../Scss/Styles.scss';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Movies = () => {

    //Hooks
    const [movies, setMovies] = useState([]);

    //El componente se ha montado, entonces ejecuta el primer useEffect (con corchetes vacios).
    useEffect(() => {
        getMovies(); // Llamada a la API
    }, []);

    useEffect(() => {
        console.log("Las películas ahora valen....", movies);
    });

    const getMovies = async () => { // Enlazamos la API
        let res = await axios.get("https://notflix-database.herokuapp.com/movie/");
        setMovies(res.data);
    }


    const getMovie = (chooseMovie) => {
        console.log(chooseMovie);
    }

    if (movies[1]?.title !== '') {
        return (
            <div className="Moviess">
            <div className="designMovies">
                {movies.map((movie) => {
                    return (
                        <div className="movie" key={movie._id}>
                            <div><img className="thumbnail" alt={movie._id}
                                src={movie.poster_path}
                                onClick={() => getMovie(movie)} /></div>
                            <div>{movie.title}</div>
                            <div>{movie.cast}</div>
                        </div>
                    )
                })}
            </div>
            </div>
        )
    } else (
        <div className="designMovies">
            <p>_Movies_</p>
        </div>
    )


};


//     return (
//         <div className="designMovies">
//             <p>_Movies_</p>                
//             </div>
//     )

// };

export default Movies;