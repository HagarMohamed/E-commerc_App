import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RegisterHook from '../../hook/auth/register-hook'
import { ToastContainer } from 'react-toastify';


const RegisterPage = () => {

  const [name, setName, email, setEmail, phone, setPhone, password, setPassword, confirmPassword, 
    setConfirmPassword, loading, onChangeName, onChangeEmail, onChangePhone, onChangePassword,
     onChangeConfirmPassword, onClick] = RegisterHook();
     
    return (
        <Container style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center hieght-search">
          <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login">Register a new account  </label>
            <input
              value={name}
              onChange={onChangeName}
              placeholder="user name ..."
              type="text"
              className="user-input mt-3 text-center mx-auto"
            />
            <input
            value={email}
            onChange={onChangeEmail}
              placeholder="email..."
              type="text"
              className="user-input my-3 text-center mx-auto"
            />
            <input
            value={phone}
            onChange={onChangePhone}
              placeholder="phone.."
              type="text"
              className="user-input my-3 text-center mx-auto"
            />
            <input
            value={password}
            onChange={onChangePassword}
              placeholder="password ..."
              type="password"
              className="user-input text-center mx-auto"
            />
            <input
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
              placeholder="confirm password ..."
              type="password"
              className="user-input text-center mx-auto"
            />
            <button onClick={onClick} className="btn-login mx-auto mt-4">Register an account </button>
            <label className="mx-auto my-4">
            You already have an account?{" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                <span style={{ cursor: "pointer" }} className="text-danger">
                  Press here
                </span>
              </Link>
            </label>
          </Col>
        </Row>
        <ToastContainer/>
      </Container>
    )
}

export default RegisterPage