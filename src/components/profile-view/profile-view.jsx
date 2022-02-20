import React, {useEffect, useState} from "react";
import {Form, Button, Card, Container} from "react-bootstrap"
import { Link } from "react-router-dom";
import './profile-view.scss';
import axios from "axios";
import UserInfo from "./user-info";
import FavoriteMovies from "./favorite.movies";
import UpdateUser from "./update-user";

export function ProfileView({movies, onUpdateUserInfo}) {
    const [user, setUser] = useState({

    })
    const favoriteMovieList = movies.filter((movies) => {

    })

    const getUser = () => {

    }
    const handleSubmit = (e) => {

    }
    const removeFav = (id) => {

    }
    const handleUpdate =(e) => {

    }

    useEffect(()=> {
        
    }, [])

    return 
    <Container>
        <Row>
            <Col xs={12} sm={4}>
                <Card>
                    <Card.Body>
                    <UserInfo name={user.Username} email={user.email}/>
                    </Card.Body>
                </Card>
            
            </Col>

            <Col xs={12} sm={4}>
                <Card>
                    <Card.Body>
                        <UpdateUser user={user} setUser={setUser}/>
                    </Card.Body>
                </Card>
            
            </Col>
        </Row>
            
            <FavoriteMovies favoriteMovieList={favoriteMovieList} />
    </Container>
}