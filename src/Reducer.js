import data from './data.json'

export const shopReducer = (state, action) => {
    
    switch(action.type){
        case 'HOT':
            const newstate = data.filter(item => item.category === 'hot')
            return state = newstate
                
                    
        case 'COLD':
            const newerstate = data.filter(item => item.category === 'cold')
            return state = newerstate
    
        case 'BEANS':
            const newestate = data.filter(item => item.category === 'beans')
            return state = newestate
        
        case 'BAKERY':
            const neww = data.filter(item => item.category === 'bakery')
            return state = neww
        case 'ALL':
            return state = data
        default:
            return [...state]
    }   
    
    
}