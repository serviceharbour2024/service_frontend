import { lazy,Suspense } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Landing from './components/auth/Landing'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Forgotpassword from './components/auth/Forgotpassword'
import Updatepassword from './components/auth/Updatepassword'
import Homepage from './components/userpages/Homepage'

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route exact path="/" element={<Landing/>}/>
            <Route exact path="/signup" element={<Signup/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/forgotpassword" element={<Forgotpassword/>}/>
            <Route exact path="/upassword" element={<Updatepassword/>}/>
            <Route exact path="/home" element={<Homepage/>}/>
          </Routes>
        </Router>
    </>
  )
}

export default App
