
//import { useSelector } from 'react-redux';
import  {Template}  from './components/template/mainComponents';
import Header from './components/partials/header';
import Footer from './components/partials/footer';

import RoutesApp from './routes';

const App = () => {
 //const user = useSelector((state)=>state.user.name);

  return (
      <div>
      <Template>
        <Header/>
        <RoutesApp/>
        <Footer/>
      </Template>
    
       
       
      </div>
  
  )
};


export default App;
