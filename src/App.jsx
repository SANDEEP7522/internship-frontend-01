
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Auth } from '@/pages/Auth/Auth';
import { SignupCard } from '@/Organisms/Auth/SignupCard';
import { SigninCard } from '@/Organisms/Auth/SiginCard';
import { NotFound } from '@/pages/NotFound/NotFound';


function App() {
  return (
   <Routes>
    <Route path="/auth/signup" element = {<Auth><SignupCard /></Auth>}/>
    <Route path="/auth/signin" element = {<Auth><SigninCard /></Auth>}/>


    <Route path="/*" element = {<Auth><NotFound /></Auth>}/>

   </Routes>
  )
}

export default App
