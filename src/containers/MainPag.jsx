import React, {useState} from "react";
import {connect} from "react-redux";
import {MovieList} from "../components/MovieLis";
import {Filter} from "../components";

export const MainPage = ({movies, genres}) => {
    console.log(movies);
    const [filteredMovies, setFilteredMovies] = useState([]);

    return (
        <React.Fragment>
            <Filter movies={movies}
                    genres={genres}
                    setFilteredMovies={setFilteredMovies}/>
            <div className={`movie-list${filteredMovies.length ? " js-fs" : ""}`}>
                {filteredMovies.length
                    ? filteredMovies.map(item => (<MovieList key={item._id} movie={item}/>))
                    : movies.map(item => (<MovieList key={item._id} movie={item}/>))
                }
            </div>
        </React.Fragment>
    )
};

const mapStateToProps = (state) => ({
    movies: state.data.movies,
    genres: state.data.genres
});

export const MainPageContainer = connect(mapStateToProps)(MainPage);