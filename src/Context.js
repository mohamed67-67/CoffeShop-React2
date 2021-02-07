import React ,{createContext, useReducer} from 'react';
import data from './data.json'
import { shopReducer } from './Reducer';


export const ShopContext = createContext();


const ContextProvider = ({children}) => {

    const categories = ["all", ...new Set(data.map(item => item.category))]

    const [state, dispatch] = useReducer(shopReducer, data)

    const Hot = ()=>{
        dispatch({type : 'HOT'})
    }
    const Cold = ()=>{
        dispatch({type : 'COLD'})
    }
    const Beans = ()=>{
        dispatch({type : 'BEANS'})
    }

    const Bakery = ()=>{
        dispatch({type: 'BAKERY'})
    }
    const All =() => {
        dispatch({type: 'ALL'})
    }

    return ( 
        <ShopContext.Provider value={{All, Hot, Cold, Beans,Bakery,state,categories}}>
            {children}
        </ShopContext.Provider>
    );
    

}
 
export default ContextProvider;