import { Route,Routes } from 'react-router-dom';
import Home from'./pages/home';
import About from './pages/about';
import NotFound from './pages/notFound';


const RoutesApp = ()=>{
   return ( <Routes>
               <Route path='/' element={<Home/>}/> 
               <Route path='/about'element={ <About/>}/>
               <Route path="*" element={<NotFound/>}/>
            </Routes>
   )
}

export default RoutesApp;