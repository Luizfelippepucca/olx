import { useState} from 'react';
import {Form} from './styles';
import { useDispatch} from 'react-redux';
import { setEmail } from '../../reducers/userReducer';
import  useOlxApi  from '../../helpers/olxApi';
import {doLoggin} from '../../helpers/authHandler';
import { useCallback } from 'react';

const FormLogin = ()=>{
    const [emailLogin,setEmailLogin] = useState('');
    const [password,setPassword] = useState('');
    const [remmemberPass,setRememberPassa] = useState('');
    const [disable,setDisable] = useState(false);
    const [error,setError] = useState('');
    const api = useOlxApi();
    const dispatch = useDispatch();
    
    const handleWriteEmail = useCallback((e) =>{
    setEmailLogin(e.target.value);
    },[emailLogin]);

    const handleSubmit = async (e) =>{ 
        e.preventDefault();
        //setDisable(true);
        dispatch(setEmail(emailLogin));
       const json = await api(emailLogin,password);
       if(json.error){
           setError(json.error);
           return;
       }
        doLoggin(json.token,remmemberPass);
        window.location.href="/";
    
    };

    return(
        <Form onSubmit={handleSubmit}>
            <label className='area'>
                 <div className='area-title'>E-mail</div>
                 <div className='area-input'>
                    <input type="email" disabled={disable} 
                    placeholder="digite seu e-mail" value={emailLogin} 
                    onChange={handleWriteEmail}/>
                 </div>
            </label>
            <label className='area'>
               <div className='area-title'>Senha</div>
                <div className='area-input'>
                    <input type="password" disabled={disable} 
                    placeholder="digite sua senha"/>
                </div>
            </label>
             <label className='area'>
                <div className='area-title'>Lembrar senha</div>
                <input type="checkbox" placeholder="digite sua senha" disabled={disable} className='checkbox'/>
            </label>
            <label className='area'>
                <button>Fazer Login</button>
            </label>
       </Form>
    )
}

export default FormLogin;