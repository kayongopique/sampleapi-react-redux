import { search } from './hatchActionCreators';
import HatchActionCreators from './hatchActionCreators';
import {SEARCH_INPUT,TOGGLE_SWITCH, REQUEST_WORK_ORDERS, RECIEVE_WORK_ORDERS } from '../constants'; 
import { mockStore } from '../components/component.test';
import fetchMock from 'fetch-mock';
import 'whatwg-fetch'

 // create a fake response
 export const mockResponse = (status, statusText, response) => {
    return new window.Response(response, {
        status: status,
        statusText: statusText,
        headers: {'content-type': 'application/json'}
    });
}

// stub a successful fetch
export const mockFetch = (status, data)=> {
    window.fetch = jest.fn().mockImplementation(() => {
        Promise.resolve(mockResponse( status,null,data));
    })

}

// stub a failing fetch
export const mockFetchError = (state, error) => {
    window.fetch = jest.fn().mockImplementation(() => {
        Promise.reject(mockResponse(state,error,'{}'))

});
}


describe(' should create action creators ', ()=> {
    it(' should create search action creator ', () => {
        const searchItem = 'kayonggo pique';
        const expectedAction = {
            type: SEARCH_INPUT,
            searchItem
        }

        expect(search(searchItem)).toEqual(expectedAction);
    });


    it(' should create toggle action creator ', () => {
        const tab = true;
        const expectedAction = {
            type: TOGGLE_SWITCH,
            tab
        }

        expect(HatchActionCreators.onToggle(tab)).toEqual(expectedAction);
    });
});



describe('should create async action creators', () => {
    let store;
    beforeEach(()=>{
        store = mockStore({})
    });
    afterEach(() => {
        fetchMock.restore();
    });

    // it('Should fetch orders if exists', ()=>{
    //     mockFetch('orders',200, '{"title": "hello"}')
    //      return store.dispatch(HatchActionCreators.fetchOrders()).then(() => {
    //         expect(store.getActions()).toEqual([]);
    //     })
    // });

    it(' create async action to fetch orders ', () => {
        fetchMock.getOnce('orders' , {
            "orders" : {"orders": [{
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
            } ]},
            headers: 'content-type: application/json'
        });

        const expectedActions = [
            {type: REQUEST_WORK_ORDERS},
            {type: RECIEVE_WORK_ORDERS, success: true, payload : {'orders': [{
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
            } ]}, }
        ]

        const store = mockStore({orders: []});
        const pprint = store.dispatch(HatchActionCreators.fetchOrders());
        console.log(pprint)
        return store.dispatch(HatchActionCreators.fetchOrders()).then((data) => {
            expect(store.getActions()).toEqual(expectedActions);
        })
    });
});


