import React from "react";

import { Container, Row, Col } from "react-bootstrap";

const Login = () => {
  return (
    <div className="loginBg">
      <Container>
        <Row className="navMain">
          <Col>
            <img alt="logo" src="/images/airbnb-logo.png" height="30" />
          </Col>
          <Col className="loginBtnMainCol">
            <button className="loginBtnMain">Sign In</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
