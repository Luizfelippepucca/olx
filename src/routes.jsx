import { Route,Routes } from 'react-router-dom';
import Home from'./pages/home';
import About from './pages/about';


const RoutesApp = ()=>{
   return ( <Routes>
               <Route path='/' element={<Home/>}/> 
               <Route path='/about'element={ <About/>}/>
            </Routes>
   )
}

export default RoutesApp;