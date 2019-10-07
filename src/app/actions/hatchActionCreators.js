import {REQUEST_WORK_ORDERS, RECIEVE_WORK_ORDERS, SEARCH_INPUT,TOGGLE_SWITCH } from '../constants'; 
import HatchAPI from '../api/hatch-21Api';  

export function search(searchItem){
    return {type : SEARCH_INPUT, searchItem}
}

let HatchActionCreators = {  

    onToggle(tab){
        return {type: TOGGLE_SWITCH, tab}
    },
    
   
    // Thunk Action creator    
    fetchOrders() {
        return (dispatch) => {
            dispatch({ type: REQUEST_WORK_ORDERS }); 

            HatchAPI.fetchworker_orders()
            .then(
                (orders) => dispatch({ type: RECIEVE_WORK_ORDERS, success:true, payload: orders }),
                (errors) => dispatch({ type: RECIEVE_WORK_ORDERS, success:false, payload: errors}) 
                );   
        }
    }

}
export default HatchActionCreators;