
import { Link} from 'react-router-dom';
import { isLogged } from '../../../helpers/authHandler';
import { HeaderArea, Container, LogoArea ,LogoLetter1, LogoLetter2, LogoLetter3,NavMenu,ButtonMenu} from './styles';
//import { useSelector } from 'react-redux';


const Header = () =>{
   // const mail = useSelector((state)=>state.user.email);
    const logged = isLogged();
    return (
        <HeaderArea>
            <Container>
                <LogoArea>
                   <Link to="/">
                       <LogoLetter1>O</LogoLetter1>
                       <LogoLetter2>L</LogoLetter2>
                       <LogoLetter3>X</LogoLetter3>
                   </Link>
                </LogoArea>
                {/* <div>{mail}</div> */}
                <NavMenu>
                    <ul>
                        {!logged &&
                            <>
                             <li><Link to="/signin">Login</Link></li>
                             <li><Link to="/signup">Cadastrar</Link></li>
                            </>
                        }
                       {logged && 
                       <>
                        <li><Link to="/my-account">Minha conta</Link></li>
                        <li><Link to="/logout">Sair</Link></li>
                        <li><ButtonMenu>Poste um anúncio</ButtonMenu></li>
                       </>
                       } 
                      
                    </ul>
                </NavMenu>
            </Container>
        
        </HeaderArea>
    );
}

export default Header;