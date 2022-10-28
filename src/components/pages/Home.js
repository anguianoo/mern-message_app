import React, { useEffect } from "react"
import { Row, Col, Button } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import "./Home.css"

export default function Home() {
  return (
    <>
      <Row>
        <Col
          md={6}
          className="d-flex flex-direction-column align-items-center justify-content-center"
        >
          <div>
            <h1>Share with your friends</h1>
            <p>Message app lets you connect with friends</p>
            <LinkContainer to="chat">
              <Button variant="success">
                Get Started{" "}
                <i className="fas fa-comments home-message-icon"></i>
              </Button>
            </LinkContainer>
          </div>
        </Col>
        <Col md={6} className="home__bg"></Col>
      </Row>
    </>
  )
}
