import { Route,Routes } from 'react-router-dom';
import Home from'./pages/home';
import About from './pages/about';
import NotFound from './pages/notFound';
import Signin from './pages/signin';
import Signup from './pages/signup';


const RoutesApp = ()=>{
   return ( <Routes>
               <Route path='/' element={<Home/>}/> 
               <Route path='/about'element={ <About/>}/>
               <Route path="*" element={<NotFound/>}/>
               <Route path="/signin" element={<Signin/>}/>
               <Route path="/signup" element={<Signup/>}/>
            </Routes>
   )
}

export default RoutesApp;