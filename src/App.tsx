
import {Routes,Route} from 'react-router-dom'
import Login from './components/auth/login'
import Home from "./components/home/home"
import Register from './components/auth/register';
import ForgetNumber from './components/auth/forgetNumber';

function App() {
  return (
    <>
       <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/register'} element={<Register/>}/>
                <Route path={'/forgetNumber'} element={<ForgetNumber/>}/>
       </Routes>
    </>
  )
}

export default App
