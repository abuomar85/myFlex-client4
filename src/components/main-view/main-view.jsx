import React from "react";
import axios from "axios";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import {Container, Row, Col, Button }from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link, Redirect  } from "react-router-dom"; 
import { connect } from "react-redux";
import { setMovies  } from "../../actions/actions";
import MoviesList from '../movies-list/movies-list';
// new code for navigating
import { Menubar } from "../navbar/navbar";

 class MainView extends React.Component {

    constructor() {
        super();
        this.state = {
            user: null
        }
    }

    getMovies(token) {
      axios.get('https://limitless-sierra-99077.herokuapp.com/movies', {
        headers: { Authorization: `Bearer ${token}`}
      })
      .then(response => {
        this.props.setMovies(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
 

    componentDidMount() {
      let accessToken = localStorage.getItem('token');
      if (accessToken !== null) {
        this.setState({
          user: localStorage.getItem('user')
        });
        this.getMovies(accessToken)
      }
    }

    
    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        })
    }

    

    onLoggedIn(authData) {
      console.log(authData);
      this.setState({
        user: authData.user.Username
      });
    
      localStorage.setItem('token', authData.token);
      localStorage.setItem('user', authData.user.Username);
      this.getMovies(authData.token);
    } 

    onRegistration(user) {
      this.setState({
        user
      }); 
    }

    onLoggedOut() {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.setState({
        user: null
      });
    }

      render() {
        let {movies} = this.props;
        let {user} = this.props;

        // if (!user) return <Row>
        //   <Col>
        //     <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
        //   </Col>
        // </Row>
        // if (movies.length === 0) return <div className="main-view" />;

    
        return (
          <Router>
            <Menubar user={user}/>
            

            <Row className="main-view justify-content-md-center">
            
              <Routes>               
              <Route exact path="/" element={
                 movies.map(m => (
                  <Col md={3} key={m._id}>
                    <MovieCard movie={m} />
                  </Col>
                ))
              } />

              {/* <Route exact path="/" render={() => {
                          if (!user) return <Col>
                            <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                          </Col>
                          if (movies.length === 0) return <div className="main-view" />;
                          // #6
                          return <MoviesList movies={movies}/>;
                        }} /> */}


              <Route path="/register" render={() => {
                if (user) return <Redirect to="/" />
                return <Col>
                  <RegistrationView user={user} />
                </Col>
              }} />

              <Route exact path="/movies/:movieId" render={({ match,history }) => {
                if (movies.length === 0) return <div className="main-view" />;
                return <Col md={8}>
                  <MovieView movie={movies.find(m => m._id === match.params.movieId)} onBackClick={() => history.goBack()} />
                </Col>
              }} /> 





              {/* Create the routes for navbar views */}

{/*               
              <Route  path="/movies/:id" render={({match, history}) => {
                return <Col md={8}>
                  <MovieView movie={movies.find(m=> m._id === match.params.id)} onBackClick={() => history.goBack()}/>
                </Col>
              }} 

              /> */}

       
              
              {/* <Route  path="/movie-director/:id" render={({match, history}) => {
                return <Col><DirectorView movie={movies.find(m=> m._id === match.params.id)} onBackClick={() => history.goBack()} /> </Col>
              }}/>

              <Route  path={`/users/${user}`} render={({match,history}) => {
                if(!user) return <Redirect to="/"/>
                return <Col>
                  <ProfileView movies={movies} user={user} onBackClick={() => history.goBack()} />
                </Col>
              }}

              />

              <Route  path={`/user-update/${user}`}
              render={({match, histroy}) => {
                if(!user) return <Redirect to="/" />
                return <Col>
                  <UserUpdate user={user} onBackClick={() => histroy.goBack()} />
                </Col>
              }}

              /> */}
              {/* <Route path="/directors/:name" render={({ match, history }) => {
                if (movies.length === 0) return <div className="main-view" />;
                return <Col md={8}>
                  <DirectorView director={movies.find(m => m.Director.Name === match.params.name).Director} onBackClick={() => history.goBack()} />
                </Col>
              }
              } /> */}
       
            </Routes>
            </Row>
  
          </Router>

          



        );
      }
}
let mapStateToProps = state => {
  return { movies: state.movies }
}

// #8
export default connect(mapStateToProps, { setMovies } )(MainView);