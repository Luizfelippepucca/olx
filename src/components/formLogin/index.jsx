import { useState,useId} from 'react';
import {Form} from './styles';
import { useDispatch} from 'react-redux';
import { setEmail } from '../../reducers/userReducer';

import {doLoggin} from '../../helpers/authHandler';
import { useCallback } from 'react';
import { ErrorMessage } from '../template/mainComponents';

const FormLogin = ()=>{
    const [emailLogin,setEmailLogin] = useState('');
    const [password,setPassword] = useState('');
    const [remmemberPass,setRememberPass] = useState(false);
    const [disable,setDisable] = useState(false);
    const [error,setError] = useState('');
    const id = useId();
 
    const dispatch = useDispatch();
    
    
    const handleEmail = useCallback((e) =>{
    setEmailLogin(e.target.value);
    },[]);

    const handlePassword = useCallback((e)=>{
        setPassword(e.target.value)
    },[]);
    const handleRemmemberPassword = useCallback(()=>{
        setRememberPass(!remmemberPass);
       
    },[remmemberPass]);
  
   
  

    const handleSubmit = async (e) =>{ 
       
        e.preventDefault();
        setDisable(true);
        dispatch(setEmail(emailLogin));
       
      if(emailLogin === '' || emailLogin.length < 5){
          setError('Preencha o campo email');
          setDisable(false);
          return
      }

      if(password === '' || password.length < 5){
          setError('Preencha a senha');
          setDisable(false);
          return;
      }

        doLoggin(id,remmemberPass);
        window.location.href="/";
    
    };



    return(
        <>
        {error && 
            <ErrorMessage>{error}</ErrorMessage>
            }
        <Form  onSubmit={handleSubmit}>
          
            <label className='area'>
                 <div className='area-title'>E-mail</div>
                 <div className='area-input'>
                    <input 
                    type="email" 
                    disabled={disable} 
                    placeholder="digite seu e-mail" 
                    value={emailLogin} 
                    onChange={handleEmail}/>
                 </div>
            </label>
            <label className='area'>
               <div className='area-title'>Senha</div>
                <div className='area-input'>
                    <input 
                    type="password" 
                    disabled={disable} 
                    placeholder="digite sua senha"
                    value={password}
                    onChange={handlePassword}
                    />
                  
                </div>
            </label>
             <label className='area'>
                <div className='area-title'>Lembrar senha</div>
                <input 
                type="checkbox" 
                placeholder="digite sua senha" 
                disabled={disable} 
                onChange={handleRemmemberPassword}
                checked={remmemberPass}
                className='checkbox'/>
               
            </label>
            <label className='area'>
                <button >Fazer Login</button>
            </label>
       </Form>
       </>
    )
}

export default FormLogin;