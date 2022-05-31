import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { setNameUser } from '../../reducers/userReducer';


const Home = () =>{
    const dispatch = useDispatch();
    const name = useSelector((state)=>state.user.name);
    const Logged = Cookies.get('token');


    useEffect(()=>{
        let user = localStorage.getItem('user');
        let userSaved = JSON.parse(user);
       dispatch(setNameUser(userSaved.name))
    },[dispatch])
    return (
        <div>
            {Logged && name && 
            <h4>Olá,{name}</h4>
             }
            <Link to="/about">About</Link>
        </div>
    )
};

export default Home;