const authReducer = (state=[],action)=>{
    switch(action.type){
        case 'AUTH':
            localStorage.setItem('profile',JSON.stringify(action.data))

            return state
       
            case 'SIGNOUT':
            console.log('clearing')
            localStorage.clear();
            return state
    default:
        return state
        }


}

export default authReducer