import Context from "../context/Context";
import { useContext, useState} from "react";
import {useHistory} from 'react-router-dom';
import {Container, Row, Col, Form} from 'react-bootstrap'

const Login = () => {
    const dbEmail = "engrayaz6@gmail.com";
    const dbPassword = "@abcd1234#";
    
    const history = useHistory();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { setAuth, setUser } = useContext(Context);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email !== dbEmail || password != dbPassword) {
            alert('Invalid email or password')
            return
        }
        setUser({name: 'Muhammmad Ayaz', email, role: 1})
        setAuth(true)
        history.push('/product/list');
    }
  return (
    <Container>
        <Row>
            <Col md={6} className={'offset-3'}>
            <form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type={'email'} name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email or username"/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type={'password'} name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password"/>
                </Form.Group>
                <Row className="d-flex align-items-center">
                    <Col className="text-center mt-2">
                        <button className="btn btn-sm btn-primary" type="submit">Submit</button>
                    </Col>
                </Row>
        </form>
            </Col>
        </Row>
    </Container>
  )
};

export default Login;
