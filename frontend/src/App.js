import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import AddStudent from './screens/AddStudentScreen'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container fluid style={{ height: '70vh' }}>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/insert" element={<AddStudent />} exact />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
