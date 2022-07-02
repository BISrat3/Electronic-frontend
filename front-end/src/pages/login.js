import React from "react";
import {Link} from 'react-router-dom'
import { useState, useEffect } from "react";
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {login} from '../users/userAction'


function Login(location, history) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispath = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispath(login(email, password));
  };
  return (
    <>
      <h1>Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' value={email}
            onChange={(e)=>setEmail(e.target.value)}>
            </Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e)=> setPassword(e.target.value)}></Form.Control>
        </Form.Group>
        <Button type='submit' variant='success'>
            Sign In
        </Button>
      </Form>
      <Row >
        <Col>
            <Link to={redirect ? `/register ? redirect =${redirect}` : '/register'}>
                Register
            </Link>
        </Col>
      </Row>
    </>
  );
}

export default Login;
