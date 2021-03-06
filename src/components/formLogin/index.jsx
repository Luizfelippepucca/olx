import { useState,useId, useEffect} from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import {Form} from './styles';
import {doLoggin} from '../../helpers/authHandler';
import { useCallback } from 'react';
import { ErrorMessage,SuccesMessage } from '../template/mainComponents';
import {urlStates} from './constants';

const FormLogin = ()=>{
    const [emailLogin,setEmailLogin] = useState('');
    const [password,setPassword] = useState('');
    const [remmemberPass,setRememberPass] = useState(false);
    const [disable,setDisable] = useState(false);
    const [error,setError] = useState('');
    const [name,setName] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [stateLoc, setStateLoc] = useState('');
    const [stateList,setStateList] = useState([]);
    const id = useId();
    const route  = useLocation();
    const [succesResgistration,setSuccesResgistration] = useState('');
    const navigation = useNavigate();
   
   
    
    const handleEmail = useCallback((e) =>{
    setEmailLogin(e.target.value);
    setError('');
    },[]);

    const handleName = useCallback((e) =>{
        setName(e.target.value);
        setError('');
        },[]);

    const handlePassword = useCallback((e)=>{
        setPassword(e.target.value);
        setError('');
    },[]);

    const handleConfirmPassword = useCallback((e)=>{
        setConfirmPassword(e.target.value);
        setError('');
    },[]);

    const handleRemmemberPassword = useCallback(()=>{
        setRememberPass(!remmemberPass);
        setError('');
       
    },[remmemberPass]);

    const handleStateLoc= useCallback((e)=>{
        setStateLoc(e.target.value);
        setError('');
    },[]);
  
   
    const handleSubmitLogin = useCallback( async (e) =>{ 
       
        e.preventDefault();
        setDisable(true);
        let userString = localStorage.getItem('user');
        let userSaved= JSON.parse(userString);
        
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

       if(userSaved.email !==emailLogin){
          setError('Email n??o encontrado');
          setDisable(false);
          return ;
       }

       if(userSaved.password !== password){
           setError('senha inv??lida');
           setDisable(false);
           return;
       }

        doLoggin(id,remmemberPass);
        window.location.href="/"
    
    },[emailLogin,id,password,remmemberPass]);

    const handleRegistration = useCallback((e)=>{
        e.preventDefault();
        setDisable(true);
        
        if(name ==="" | name.length <5){
             setError('Preencha o nome completo');
             setDisable(false);
             return;
        } 


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

        if(password !== confirmPassword){
            setError('Confirme sua senha,lembrando que precisa ser identica');
            setDisable(false);
            return;
        }

        if(stateLoc === ''){
            setError('selecione seu estado');
            return;
        }

        localStorage.setItem('user', JSON.stringify({email:emailLogin,password:password,name:name,state:stateLoc}));
        setSuccesResgistration('Cadastro feito com sucesso');

        setTimeout(()=>{
          navigation('/signin');
        },3000);
        
    },[confirmPassword,emailLogin,name,navigation,password,stateLoc])

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
          return clearTimeout();
    },[route.pathname])

    return(
        <>
            {error && 
                <ErrorMessage>{error}</ErrorMessage>
            }
            {!error && succesResgistration && 
               <SuccesMessage>{succesResgistration}</SuccesMessage>
            }
            <Form  onSubmit={route.pathname === '/signin'? handleSubmitLogin :handleRegistration}>
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
                                    <option value={item.sigla} key={item.id}>
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