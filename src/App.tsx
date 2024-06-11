
import {Routes,Route} from 'react-router-dom'
import Login from './components/auth/login'
import Home from "./components/home/home"
import Register from './components/auth/register';
import Verify from './components/auth/verify';
import LoginPassword from './components/auth/login-password';
import ForgetPassword from './components/auth/forget-password';

function App() {
  return (
    <>
       <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/register'} element={<Register/>}/>
                <Route path={'/verify'} element={<Verify/>}/>
                <Route path={'/login-password'} element={<LoginPassword/>}/>
                <Route path={'/forget-password'} element={<ForgetPassword/>}/>
       </Routes>
    </>
  )
}

export default App
