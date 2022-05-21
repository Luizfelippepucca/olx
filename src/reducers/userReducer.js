const initialState = {
    name:'Luiz Pucca',
    email:'lu1z_21@hotmail.com'
};

 const userReducer = (state = initialState, action)=>{

    if(action.type === 'SET_MAIL'){
        return {...state, email:action.payload.email };
    }

    return state;
}

export default userReducer;