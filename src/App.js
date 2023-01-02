import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg"
import MovieCard from "./MovieCard";

//1e6bb081

const APIURL = 'https://www.omdbapi.com/?apikey=1e6bb081';


const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        searchMovies('batman');
    },[])

    const searchMovies = async (title) => {
        const responce = await fetch(`${APIURL}&s=${title}`);
        const data = await responce.json();

        setMovies(data.Search);
    };
    

    return(
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input type="text" placeholder="Search For Movies" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>
                <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)}/>
           </div>

            {movies?.length > 0 ? (
                <div className="container">
                {movies.map((movie) => (
                    <MovieCard movie={movie} />
                ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}
        </div>
    );
};

export default App;