import React from 'react';
import PropTypes, { string } from 'prop-types';
import './Movie.css'

function Movie({id,  year, title, summary, poster, genres}) {
    return (
        <div className="movie">
            <img src={poster} alt={poster} tilte={poster}></img>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <p className="movie__summary">{summary}</p>
                <ul className="movie__genres">
                    { genres.map((genre, index) => <li key={index} className="">{genre}</li>) }
                </ul> 
            </div>
        </div>
    )
}

//Moive + 소문자 propTypes
Movie.propTypes = {
    id : PropTypes.number.isRequired, 
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(string).isRequired,
};

export default Movie;