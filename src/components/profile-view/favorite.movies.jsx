import React from "react";
import { Link } from "react-router-dom";
import {Col, Row, Figure, Button, Card} from 'react-bootstrap'
import axios from "axios";
import './profile-view.scss'

function FavoriteMovies (favoriteMoviesList) {

    const removeFav = (id) => {
        let token = localStorage.getItem('token');
        let url = `https://limitless-sierra-99077.herokuapp.com/users${localStorage.getItem('user')}/movies/${id}`;
        axios.delete(url, {
            headers: {Authorization: `Bearer ${token}`} 
        })
    }
    return (
       <Card>
           <Card.Body>
           <Row>
                <Col xs={12}>
                    <h4>Favorite Movies</h4>
                </Col>
            </Row>    

            <Row>
                {favoriteMoviesList.map((ImagePath, Title, _id) => {
                    return (
                        <Col xs={12} md={6} lg={3} key={_id} className="fav-movie">
                            <Figure>
                            <Link to={`/movies/${_id}`}>
                                <Figure.Image
                                        src={ImagePath}
                                        alt={Title}
                                    /> 
                                <Figure.Caption>
                                {Title} 
                                </Figure.Caption>
                            </Link>
                            </Figure>

                            
                            <Button variant="primary" onClick={() => removeFav( _id)}>Remove from list</Button>
                        </Col>
                    )
                })}

            </Row>

           </Card.Body>
       </Card>

          


    )
}

export default FavoriteMovies