import Title from "../components/Title";
import {useEffect, useState} from "react";

const API_KEY = "c3a6fcbe2573a7042c0822d6d34ea043"

export default function Index() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        (async () => {
            const {results} = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
            ).json()
            setMovies(results)
        })()
    }, [])
    return (
        <div className="container">
            <Title title="Home"/>
            {!movies && <h4>Loading...</h4>}
            {movies?.map((movie: any) => (
                <div className="movie" key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                    <h4>{movie.original_title}</h4>
                </div>
            ))}
            <style jsx>{`
              .container {
                display: grid;
                grid-template-columns: 1fr 1fr;
                padding: 20px;
                gap: 20px;
              }

              .movie img {
                max-width: 100%;
                border-radius: 12px;
                transition: transform 0.2s ease-in-out;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
              }

              .movie:hover img {
                transform: scale(1.05) translateY(-10px);
              }

              .movie h4 {
                font-size: 18px;
                text-align: center;
              }
            `}
            </style>
        </div>
    )
}