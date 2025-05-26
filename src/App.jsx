import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Table from './pages/home/Table'
import Nav from './components/common/header/Nav'

function App() {
  return (
    <>
      <Router>

        <Nav />
       
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/table' element={<Table/>} />


        </Routes>
      </Router>
    </>
  )
}

export default App
