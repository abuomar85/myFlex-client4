import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Button, Form, Card, CardGroup,Container,Col,Row  } from 'react-bootstrap';
import './registration-view.scss';

import axios from 'axios'

export function RegistrationView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://limitless-sierra-99077.herokuapp.com/users', {
      Username: username,
      Password: password,
      Email: email
    })
    .then (response => {
      const data = response.data;
      console.log(data);
      window.open('/', '_self');
    }).catch (e=> {
      console.log('error registeration the user ');
      alert('Some thing not right');
    })
  }

  return (
    <Container>
      <Row>
        <Col>
          <CardGroup>
              <Card>
                <Card.Body>
                <Card.Title>Welcome </Card.Title>
              <Form>
                <Form.Group>
                  <Form.Lable> Username:</Form.Lable>
                  <Form.Control 
                  type="text" 
                  value={username} 
                  onChange={e => setUsername(e.target.value) } 
                  required 
                  placeholder="Enter a username" />
                </Form.Group>

                <Form.Group>
                  <Form.Lable> Password:</Form.Lable>
                  <Form.Control 
                  type="password" 
                  value={password} 
                  onChange={e => setPassword(e.target.value)}  
                  required minLength={6} 
                  placeholder="Enter a password min 6 char" />
                </Form.Group>

                <Form.Group>
                  <Form.Lable>  Email::</Form.Lable>
                  <Form.Control 
                  type="email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  required 
                  placeholder="Enter email" />
                </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>Register</Button>
            </Form>
          </Card.Body>
              </Card>
          </CardGroup>

        </Col>
      </Row>
     

    </Container>
    
   

  );
}