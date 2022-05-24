

import  {Template}  from './components/template/mainComponents';
import Header from './components/partials/header';
import Footer from './components/partials/footer';
import "./App.css";

import RoutesApp from './routes';

const App = () => {
 
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
