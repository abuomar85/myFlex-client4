import React from "react";
import {Button} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; 
export class MovieView extends React.Component{

  keypressCallback(event) {
    console.log(event.key);
  }

  componentDidMount() {
    document.addEventListener('keypress', this.keypressCallback);
  }

    render()  {
        const {movie, onBackClick} = this.props; 

        return (
            <div className="movie-view">
            <div className="movie-poster">
              <img src={movie.ImagePath} 
                crossOrigin ="anonymous"
              />
            </div>
            <div className="movie-title">
              <span className="label">Title: </span>
              <span className="value">{movie.Title}</span>
            </div>
            <div className="movie-description">
              <span className="label">Description: </span>
              <span className="value">{movie.Description}</span>

            </div>

{/* {            <div className="movie-genre">
              <span className="label">Genre: </span>
              <span className="value">{movie.Genre.Title}</span>

            </div> }

         {    <div className="movie-director">
              <span className="label">Director: </span>
              <span className="value">{movie.Director.Title}</span>

            </div>} */}
            <Link to={`/directors/${movie.Director.Title}`}>
              <Button variant="link">Director</Button>
            </Link>

            <Link to={`/genres/${movie.Genre.Title}`}>
              <Button variant="link">Genre</Button>
            </Link>
            <Button variant="primary"  onClick={() => { onBackClick(null); }}>Back</Button>

          </div>
        )
    }
}