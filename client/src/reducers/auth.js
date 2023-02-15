const authReducer = (state=[],action)=>{
    switch(action.type){
        case 'AUTH':
                           setTimeout(()=>
            window.location.reload(),1000
            ) 
            localStorage.setItem('profile',JSON.stringify(action.data))

            return state
       
            case 'SIGNOUT':

            localStorage.clear();
            return state
    default:
        return state
        }


}

export default authReducer