//state,action
export const postReducer= (listings=[],action)=>{
switch(action.type){
    case 'CREATE':
        return [...listings,action.payload]
    case 'FETCH':
        return {...listings,listings:action.payload}

    case 'MORE':
       
        return {...listings,listings:action.payload}

    case 'MESSAGE_DATA':
        console.log('actionpayload',action.payload)
      return {...listings,listings:action.payload}  
default:
    return listings
    }
}

export default postReducer