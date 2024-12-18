import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import loginHook from '../../hook/auth/login-hook'

const LoginPage = () => {

    const [email, setEmail,password, setPassword, loading, onChangeEmail, onChangePhone, 
        onChangePassword, onClick] = loginHook();

    return (
            <Container style={{ minHeight: "680px" }}>
                <Row className="py-5 d-flex justify-content-center ">
                    <Col sm="12" className="d-flex flex-column ">
                        <label className="mx-auto title-login"> Login</label>
                        <input
                            value={email}
                            onChange={onChangeEmail}
                            placeholder="email..."
                            type="text"
                            className="user-input my-3 text-center mx-auto"
                        />
                        <input
                            value={password}
                            onChange={onChangePassword}
                            placeholder=" password..."
                            type="password"
                            className="user-input text-center mx-auto"
                        />
                        <button className="btn-login mx-auto mt-4"> Login</button>
                        <label className="mx-auto my-4">
                        Don't have an account?{" "}
                            <Link to="/register" style={{textDecoration:'none'}}>
                                <span style={{ cursor: "pointer" }} className="text-danger">
                                Press here
                                </span>
                            </Link>
                        </label>



                    </Col>


                    <label className="mx-auto my-4">
                    <Link to="/admin/allproducts" style={{textDecoration:'none'}}>
                        <span style={{ cursor: "pointer" }} className="text-danger">
                        Admin login
                        </span>
                    </Link>

                    <Link to="/user/allorders" style={{textDecoration:'none'}}>
                        <span style={{ cursor: "pointer" }} className="text-danger mx-3">
                        User login
                        </span>
                    </Link>
                </label>
                </Row>
            </Container>
    )
}

export default LoginPage