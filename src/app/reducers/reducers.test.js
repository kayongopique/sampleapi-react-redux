import orders from './orders'; 
import { RECIEVE_WORK_ORDERS, SEARCH_INPUT, TOGGLE_SWITCH} from '../constants'; 
import  deepFreeze  from 'deep-freeze';

describe(' Orders Reducer ', () => {
    const initialstate = deepFreeze(orders(undefined, {}));

    it(' should return default state on unknown actions  ', () => {
        expect(orders(initialstate, {type: 'UNKNOWN'})).toEqual(initialstate);
    });

    it('Should add orders to empty initialState ', () => {
        expect(orders(initialstate, {type: RECIEVE_WORK_ORDERS, 
                payload:{"orders": [{
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
                            } ]}
                         })).toMatchSnapshot();
    });

    it('Should add orders to non empty initialState ', () => {
        const baseState = deepFreeze(orders(initialstate, {type: RECIEVE_WORK_ORDERS,
                    payload: {"orders": [{
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
                    } ]}}));
        expect(orders(baseState, {type: RECIEVE_WORK_ORDERS, 
                payload: {"orders": [{
                    "worker": {"worker":{"name":"paul david","company": "cisco"}},
                   "deadline": "2012-09-06 09:02:23"
                } 
                 ]} })).toMatchSnapshot();
    });

});

