import React from 'react'
import { Route,  BrowserRouter as Router, Routes } from 'react-router-dom'
import Monthly from './Componant/Monthly'
import Yearly from './Componant/Yearly'

const App = () => {
  return (
    <div>

      <Router>
        <Routes>
          <Route path='/' element={<Yearly/>}></Route>
          <Route path='/monthly' element={<Monthly/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
