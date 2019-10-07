import { createStore, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk'; 
import rootReducer from '../reducers/RootReducer'; 


export const logger = (store) => (next) => (action) => {
    if(typeof action !== "function"){ 
        console.log('dispatching:', action);   
    }   
    return next(action); 
} 



const HatchStore = createStore(
    rootReducer, 
    
    applyMiddleware(logger, thunk),
    // window.devTools.Extension && window.devTools.Extension()
    );  


export default HatchStore; 