
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Auth } from '@/pages/Auth/Auth';
import { SignupCard } from '@/Organisms/Auth/SignupCard';
import { SigninCard } from '@/Organisms/Auth/SiginCard';
import { NotFound } from '@/pages/NotFound/NotFound';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SignupContainer } from './Organisms/Auth/SignupContainer';
import { Toaster } from './components/ui/toaster';


function App() {

  const queryClient = new QueryClient();

  return (

  <QueryClientProvider client={queryClient}>
   <Routes>
    <Route path="/auth/signup" element = {<Auth><SignupContainer /></Auth>}/>
    <Route path="/auth/signin" element = {<Auth><SigninCard /></Auth>}/>


    <Route path="/*" element = {<Auth><NotFound /></Auth>}/>

   </Routes>

   <Toaster />

   </QueryClientProvider>
  )
}

export default App
