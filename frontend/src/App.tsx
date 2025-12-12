import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Homepage } from './page/Homepage'
import { Signup } from './page/Signup'
import { Signin } from './page/Signin'
import { Dashboard } from './page/Dashboard'

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>          
      </Routes>
    </BrowserRouter>
  )
}

export default App
