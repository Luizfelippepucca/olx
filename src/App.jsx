
import { useSelector } from 'react-redux';

import RoutesApp from './routes';

const App = () => {
 const user = useSelector((state)=>state.user.name);

  return (
      <div>
      name:{user}
      <RoutesApp/>
      </div>
  
  )
};


export default App;
