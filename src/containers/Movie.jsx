import React, {Component} from "react";
import {connect} from "react-redux";

import {MovieDetails} from "../components/MovieDetails"
import {BuyTicket} from "../components";

class Movie extends React.Component{
    state = {
        movie: {},
        showModal: false
    };

    componentDidMount() {
        const {match, movies} = this.props;
        const movieId = match.params.id;
        const movie = movies.find(item => item._id === movieId);

        this.setState({movie});
    }

    getInfoByArray = (arr) => {
      if(arr[arr.length-1]) {
          return arr.join(", ");
      }else {
          return arr.join(", ").slice(0, -2)
      }
    };

    handleModalWindow = () => {
        this.setState({showModal: true});
    };

    render(){
        console.log("this.state.movie", this.state.movie);
        const {movie, showModal} = this.state;
        const {session} = this.props;

        return (
            <React.Fragment>
            <div className="movie-page clearfix">

                <h1>{movie.title}</h1>
                <div className="movie-about">
                    <div className="movie-details">
                        <div>
                        <img src={movie.poster} alt={movie.title}/>
                        </div>
                        <div>
                            <MovieDetails
                                title="Страна: "
                                text={movie.country ? this.getInfoByArray(movie.country) : ""}
                            />
                            <MovieDetails
                                title="Жанр: "
                                text={movie.genre ? this.getInfoByArray(movie.genre) : ""}
                            />
                            <MovieDetails
                                title="В главных ролях: "
                                text={movie.actors ? this.getInfoByArray(movie.actors) : ""}
                            />
                            <MovieDetails
                                title="Возраст: "
                                text={`${movie.age}+`}
                            />
                            <MovieDetails
                                title="Продолжительность: "
                                text={movie.long ? `${movie.long * 60} мин.` : ""}
                            />
                        </div>
                    </div>
                    <div className="movie-description clearfix">
                        <div>
                            <h3>Описание</h3>
                            <p>{movie.description}</p>
                        </div>
                        <div>
                            <h3>Трейлер</h3>
                            <iframe src={movie.trailer}></iframe>
                            <button onClick={this.handleModalWindow}>Купить билет</button>
                        </div>

                    </div>
                </div>
            </div>
                {showModal && <BuyTicket session={session}/>}
            </React.Fragment>
        )
    }
};

const mapStateToProps = (state) => ({
    movies: state.data.movies
});


export const MovieContainer = connect(mapStateToProps)(Movie);