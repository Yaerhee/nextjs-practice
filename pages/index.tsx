import Title from "../components/Title";
import {useEffect, useState} from "react";

const API_KEY = "c3a6fcbe2573a7042c0822d6d34ea043"

export default function Index() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        (async () => {
            const { results } = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
                ).json()
            setMovies(results)
        })()
    }, [])
    return (
        <div>
            <Title title="Home"/>
            {!movies && <h4>Loading...</h4>}
            {movies.map((movie: any) =>
                <div key={movie.id}>
                    <h4>{movie.original_title}</h4>
                </div>
            )}
        </div>
    )
}