import Cookies from 'js-cookie';

export const isLogged =()=>{
    let token = Cookies.get('token');

    return (token) ? true: false;
}

export const doLoggin = (token,remmeberPassaword)=>{
    if(remmeberPassaword){
        Cookies.set('token',token,{expires:999});
    }else{
        Cookies.set('token',token);
    }
  
}


export const doLogOut = ()=>{
    let token = Cookies.get('token');
    if(token){
       Cookies.remove('token');
    }
}