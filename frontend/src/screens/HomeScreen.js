/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Table, Button } from 'reactstrap'

const HomeScreen = () => {
  const [students, setStudents] = useState([])

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:9822/delete/${id}`)
    axios
      .get('http://localhost:9822/list')
      .then(function (response) {
        setStudents(response.data)
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  useEffect(() => {
    axios
      .get('http://localhost:9822/list')
      .then(function (response) {
        setStudents(response.data)
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  return (
    <blockquote class="blockquote text-center">
      <Container className="mt-4">
        <Table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Advisor</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => {
              return (
                <tr>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.age}</td>
                  <td>{student.teacher}</td>
                  <td>
                    <Button
                      block
                      outline
                      color="danger"
                      onClick={() => deleteStudent(student.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Container>
    </blockquote>
  )
}

export default HomeScreen
