import {mockStore } from '../app/components/component.test';
import HatchActionCreators from '../app/actions/hatchActionCreators';
import { RECIEVE_WORK_ORDERS} from '../app/constants'; 
jest.mock('../app/api/hatch-21Api');


describe(' fetchOrders action', () => {


    it('store is updated correctly ', () => {
        const expectedState = {
            "order":[
                {
                    "worker": {"worker":{"name":"kayongo david","company": "cisco"}},
                   "deadline": "2012-09-06 09:02:23"
                } ,
                {
                    "worker": {"worker":{"name":"kayongo david","company": "cisco"}},
                   "deadline": "2012-09-06 09:02:23"
                },
                {
                    "worker": {"worker":{"name":"kayongo david","company": "cisco"}},
                   "deadline": "2012-09-06 09:02:23"
                } 
            ] 
                  
         }
        const initialState = {}

        const store = mockStore(initialState);
        store.dispatch({ type: RECIEVE_WORK_ORDERS, success:true, 
                                    payload: expectedState });
        console.log(store.getState());
        expect(store.getState().orders).toEqual(expectedState);
    
    });
}); 