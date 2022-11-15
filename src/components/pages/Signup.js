import React, { useEffect } from "react"
import { useState } from "react"
import { Form, Button, Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Signup.css"
import cat_proPic from "../../assests/cat_proPic.jpg"

export default function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const [image, setImage] = useState(null)
  const [uploadingImg, setUploadingImg] = useState(false)
  const [imagePreview, setImagePreview] = useState(null)

  function validateImg(e) {
    const file = e.target.files[0]
    if (file.size >= 1048576) {
      return alert("Max file size is 1mb")
    } else {
      setImage(file)
      setImagePreview(URL.createObjectURL[file])
    }
  }

  async function uploadImage() {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_present", "q8ips7xi")
    try {
      setUploadingImg(true)
      let res = await fetch(
        "https://api.cloudinary.com/v1_1/dgc7wj4u3/image/upload",
        {
          method: "posts",
          body: data
        }
      )
      const urlData = await res.json()
      setUploadingImg(false)
      return urlData.url
    } catch (error) {
      setUploadingImg(false)
      console.log(error)
    }
  }

  async function handleSignup(e) {
    if (!image) return alert("Please upload your profile picture")
    const url = await uploadingImg(image)
    console.log(url)
    // signup the user
  }
  return (
    <Container>
      <Row>
        <Col
          md={5}
          className="d-flex align-items-center justify-content-center flex-direction-column"
        >
          <Form style={{ width: "80%", maxWidth: 500 }} onSubmit={handleSignup}>
            <h1 className="text-center">Create Account</h1>
            <div className="signup-profile-pic__container">
              <img
                src={imagePreview || cat_proPic}
                className="signup-profile-pic"
              />
              <label htmlFor="image-upload" className="image-upload-label">
                <i className="fas fa-plus-circle add-picture-icon"></i>
              </label>
              <input
                type="file"
                id="image-upload"
                hidden
                accept="image/png, image/jpeg"
                onChange={validateImg}
              />
            </div>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              {uploadingImg ? "Signing you up..." : "Sign up"}
            </Button>
            <div className="py-4">
              <p className="text-center">
                Already have an account? <Link to="/signup">login</Link>
              </p>
            </div>
          </Form>
        </Col>
        <Col md={7} className="signup__bg"></Col>
      </Row>
    </Container>
  )
}
