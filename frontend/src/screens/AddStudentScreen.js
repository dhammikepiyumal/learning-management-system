import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'

const AddStudentScreen = () => {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    age: '',
    teacher: '',
  })

  const navigate = useNavigate()

  const onValueChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value })
  }

  const onSubmitData = async (event) => {
    event.preventDefault()
    console.log('called', student)
    await axios.post('http://localhost:9822/insert', student)
    navigate('/')
  }

  return (
    <blockquote class="blockquote text-center">
      <Container className="mt-4">
        <Form onSubmit={onSubmitData}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control
              placeholder="First Name"
              value={student.firstName}
              type="name"
              required
              onChange={onValueChange}
              name="firstName"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control
              placeholder="Last Name"
              value={student.lastName}
              type="name"
              required
              onChange={onValueChange}
              name="lastName"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Control
              placeholder="Age"
              value={student.age}
              type="age"
              required
              onChange={onValueChange}
              name="age"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAdvisor">
            <Form.Control
              placeholder="Teacher"
              value={student.teacher}
              type="name"
              required
              onChange={onValueChange}
              name="teacher"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </blockquote>
  )
}

export default AddStudentScreen
