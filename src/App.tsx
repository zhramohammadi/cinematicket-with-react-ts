
import {Routes,Route} from 'react-router-dom'
import Login from './components/auth/login'
import Home from "./components/home/home"
import Register from './components/auth/register';
import Verify from './components/auth/verify';
import LoginPassword from './components/auth/login-password';
import ForgetPassword from './components/auth/forget-password';
import FooterLg from "./components/home/footer/footerLg.tsx";
import Footer from './components/home/footer/footer.tsx';
import Dashboard from './components/dashboard/dashboard';
import Wallet from './components/dashboard/wallet/wallet.tsx';
import EditProfile from "./components/dashboard/editProfile/editProfile.tsx";
import Transaction from './components/dashboard/transaction/transaction.tsx';
import Tickets from "./components/dashboard/tickets/tickets.tsx";
import Authentication from './components/dashboard/authentication/authentication.tsx';
import Header from "./components/home/header/header.tsx";
import Cinema from './components/pages/cinema/cinema.tsx'


function App() {
  return (
    <>
       <div className='fixed-top'>
           <Header/>
       </div>
       <Routes>
                <Route path={'/home'} element={<Home/>}/>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/register'} element={<Register/>}/>
                <Route path={'/verify'} element={<Verify/>}/>
                <Route path={'/login-password'} element={<LoginPassword/>}/>
                <Route path={'/forget-password'} element={<ForgetPassword/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/wallet" element={<Wallet/>}/>
                <Route path={"/editProfile"} element={<EditProfile/>}/>
                <Route path={'/transaction'} element={<Transaction/>}/>
                <Route path={"/tickets"} element={<Tickets/>}/>
                <Route path={'/authentication'} element={<Authentication/>}/>
                <Route path={'/cinema'} element={<Cinema/>}/>
       </Routes>
        <FooterLg/>
        <Footer/>
    </>
  )
}

export default App
