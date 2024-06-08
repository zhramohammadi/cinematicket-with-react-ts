
import {Routes,Route} from 'react-router-dom'
import Login from './components/auth/login'
import Home from "./components/home/home"

function App() {
  return (
    <>
       <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/login'} element={<Login/>}/>
       </Routes>
    </>
  )
}

export default App
