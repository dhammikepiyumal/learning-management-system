/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Table } from 'reactstrap'

const HomeScreen = () => {
  const [students, setStudents] = useState([])

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
