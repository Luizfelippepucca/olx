import { useState,useId, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import {Form} from './styles';
import { useDispatch} from 'react-redux';
import { setEmail } from '../../reducers/userReducer';
import {doLoggin} from '../../helpers/authHandler';
import { useCallback } from 'react';
import { ErrorMessage } from '../template/mainComponents';
import {urlStates} from './constants';

const FormLogin = ()=>{
    const [emailLogin,setEmailLogin] = useState('');
    const [password,setPassword] = useState('');
    const [remmemberPass,setRememberPass] = useState(false);
    const [disable,setDisable] = useState(false);
    const [error,setError] = useState('');
    const [name,setName] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [ stateLoc, setStateLoc] = useState('');
    const [stateList,setStateList] = useState([]);
    const id = useId();
    const route  = useLocation();
    const dispatch = useDispatch();
    
    const handleEmail = useCallback((e) =>{
    setEmailLogin(e.target.value);
    },[]);

    const handleName = useCallback((e) =>{
        setName(e.target.value);
        },[]);

    const handlePassword = useCallback((e)=>{
        setPassword(e.target.value)
    },[]);

    const handleConfirmPassword = useCallback((e)=>{
        setConfirmPassword(e.target.value)
    },[]);

    const handleRemmemberPassword = useCallback(()=>{
        setRememberPass(!remmemberPass);
       
    },[remmemberPass]);

    const handleStateLoc= useCallback((e)=>{
        setStateLoc(e.target.value)
    },[]);
  
   
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

    const LoadStateList = async () =>{

         try{
            const response = await fetch(urlStates);
            const data = await response.json();
            setStateList(data); 
         }catch(err){
            setError('Ops algo deu errado, tente novamente em instantes');
         }   
    };
    

    useEffect(()=>{
        if(route.pathname === '/signup'){
            LoadStateList();
        }
   
    },[route.pathname])

    return(
        <>
            {error && 
                <ErrorMessage>{error}</ErrorMessage>
            }
            <Form  onSubmit={handleSubmit}>
                {route.pathname === '/signup' &&
                    <label className='area'>
                        <div className='area-title'>Nome Completo</div>
                        <div className='area-input'>
                            <input 
                            type="text" 
                            disabled={disable} 
                            placeholder="digite seu nome" 
                            value={name} 
                            onChange={handleName}/>
                        </div>
                    </label>
                }
            
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
                {route.pathname === '/signup' &&
                    <label className='area'>
                        <div className='area-title'>Confirmar senha</div>
                        <div className='area-input'>
                            <input 
                            type="password" 
                            disabled={disable} 
                            placeholder="confirme sua senha"
                            value={confirmPassword}
                            onChange={handleConfirmPassword}
                            />
                        
                        </div>
                    </label>
                }

                { route.pathname === '/signin' && 
                <label className='area'>
                    <div className='area-title'>Lembrar senha</div>
                        <div>
                            <input 
                            type='checkbox' 
                            disabled={disable} 
                            onChange={handleRemmemberPassword}
                            checked={remmemberPass}
                        />
                    </div>
                </label>
                }

                {route.pathname === '/signup' &&
                   <label className='area'>
                        <div className='area-title'>Selecionar Estado</div>
                        <div className='area-input'>
                            <select value={stateLoc} onChange={handleStateLoc}>
                                <option></option>
                              {stateList.map((item)=>(
                                    <option value={item.id} key={item.id}>
                                        {item.sigla}
                                    </option>

                                ))}
                            </select>
                        </div>
                   </label>
                }
                <label className='area'>
                    <button>
                        {route.pathname === '/signin' ? 'Fazer Login': 'Cadastrar'}
                    </button>
                </label>
            </Form>
       </>
    )
}

export default FormLogin;