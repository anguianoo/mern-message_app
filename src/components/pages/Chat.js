import React, { useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import MessageForm from "../MessageForm"
import Sidebar from "../Sidebar"

export default function Chat() {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Sidebar />
        </Col>
        <Col md={8}>
          <MessageForm />
        </Col>
      </Row>
    </Container>
  )
}
