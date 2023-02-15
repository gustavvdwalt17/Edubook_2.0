

//state,action
export const postReducer= (listings=[],action)=>{
switch(action.type){
    case 'CREATE':
                setTimeout(()=>
            window.location.reload(),1000
            ) 
        return [...listings,action.payload]
    case 'FETCH':
   
        return {...listings,listings:action.payload}

    case 'MORE':
        console.log('paypay',action.payload)
        localStorage.setItem('info',JSON.stringify(action.payload))
       
        return {...listings,listings:action.payload}
    case 'UPDATE':
        console.log('update paulaod',action.payload)
        if (localStorage.getItem("update") === null) {
            console.log('yeyeyeyeyeye')
      localStorage.setItem('update',JSON.stringify(action.payload))
     
        }else{
               return {...listings,listings:action.payload}  
        }
    case 'DELETE':
          setTimeout(()=>
            window.location.reload(),1000
            ) 
            return listings
    case 'MESSAGE_DATA' :
    
      return {...listings,listings:action.payload}  
      
    case 'HANDLE_UPDATE':
         return {...listings,listings:action.payload}  

    case 'SEARCH':
        console.log('actionpaylod',action.payload)
         return {...listings,listings:action.payload} 
         
    case 'SORT':
        let arr = []
        console.log('logging',action.payload)
        action.payload.map((item)=>{
            arr.push(item)
        })
            arr.sort(function(a,b) {
            if (a.title<b.title){
                return -1
            }
              if (a.title > b.title) {
            return 1;
    }
            return 0;
        })

        return {...listings,listings:arr}
     
     
        case 'SORT_BY_PRICE_HIGH_TO_LOW':
           
        
        let highArray = []
             action.payload.map((item)=>{
            highArray.push(item)
        })
        function byPriceHigh(a,b){
            return parseInt(b.price) - parseInt(a.price)
        }

     
    highArray.sort(byPriceHigh)
    //  reverse(highArray)
    return {...listings,listings:highArray}

        case 'SORT_BY_PRICE_LOW_TO_HIGH':
        let array = []
             action.payload.map((item)=>{
            array.push(item)
        })
        function byPrice(a,b){
            return parseInt(a.price) - parseInt(b.price)
        }
        array.sort(byPrice)


return {...listings,listings:array}

default:
    return listings
    }
}

export default postReducer