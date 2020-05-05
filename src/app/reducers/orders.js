import { RECIEVE_WORK_ORDERS, SEARCH_INPUT, TOGGLE_SWITCH} from '../constants'; 
import findOrders from '../utilities/filter';
import sortAscending from '../utilities/sortAsc';
import sortDescending from '../utilities/sortDesc'


const orders = (state = [], action) => {
    switch (action.type) { 
        case RECIEVE_WORK_ORDERS:
            return {
                ...state,
                orders: action.payload.orders? 
                sortAscending(action.payload.orders ): sortAscending(action.payload.orders ),
                errors: action.payload.errors ? action.payload.errors : null, 
            }
    
        case SEARCH_INPUT:
           let  payload = state.orders;
            state = {
                searchItem: '',
                orders: payload
            }
            const searchItem = action.searchItem;
            const orders = state.orders;
        return {
            ...state,
            searchItem,
            filtered_orders: searchItem ? findOrders(orders, searchItem) : orders
            
        }
        case TOGGLE_SWITCH:
                const orders_arr = state.orders;
                state = {
                    tab: false,
                    orders: orders_arr
                }
            const tab = action.tab;
        return {
            ...state,
            tab,
            orders: tab ? sortDescending(state.orders) : sortAscending(state.orders)    
        }
        default:       
            return state;   
        } 
    };  
    
export default orders; 