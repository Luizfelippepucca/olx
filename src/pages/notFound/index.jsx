import { Link } from "react-router-dom"

const NotFound = ()=>{
    return(
     <div>
          <h2>Page Not Found 404 error</h2>
          <Link to="/">voltar para home</Link>
    </div>
    )
}

export  default NotFound