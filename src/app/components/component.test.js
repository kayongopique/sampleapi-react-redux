import React from 'react';
import { shallow, mount } from 'enzyme';
import '../../setupTests';
import { Switch } from '../components/toggler/Switch';
import Toggle from '../components/toggler/toggle';
import OrderMeta from './orderMeta'
import MainView from './mainView';
import checkPropTypes from 'check-prop-types';
import configureMockStore from 'redux-mock-store';
import  thunk from 'redux-thunk';



// utilities 
const findBytestAttr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}
const check_props = (compoonent, expected_props) => {
    const propsError = checkPropTypes(compoonent.propTypes, 
                        expected_props, 'props', compoonent.name);
    return propsError;
 }

 // creating teststore
 const middlewares = [thunk];
 export const mockStore = configureMockStore(middlewares);



// -----end-------

const toggleSetUp = (initialState={}) => {
    const store= mockStore(initialState);
    const component = shallow(<Toggle store={store}/>).childAt(0).dive();
    return component;
}

const switchSetup = (props={}) => {
    const component = shallow(<Switch {...props}/>);
    return component;
}

const orderItemSetup = (props={}) => {
    const component = shallow(<OrderMeta {...props}/>);
    return component;
}

const setUpMainView = (initialState={}) => {
    const store = mockStore(initialState);
    const wrapper = shallow(<MainView store={store}/>).childAt(0).dive();
    return wrapper;
}


describe('Switch component', () => {

    let component;
    let mockFunc;
    beforeEach(() => {
        mockFunc = jest.fn();
        const props = {
            onClick:  mockFunc,
        }
       
        component = switchSetup(props);
    });

    it('Should render without errors', () => {
        const wrapper = findBytestAttr(component, 'switchComponent');
        expect(wrapper.length).toBe(1);   
    });

    it('Should perform a click event', () =>{
        const toggler =findBytestAttr(component, 'toggle-input');
        toggler.simulate('click');
        expect(mockFunc.mock.calls.length).toBe(1);
    });

});

describe('Toggle component', ()=>{
    let component;
    beforeEach(()=> {
        const initialState = {
            tab: false,
        }
        component = toggleSetUp(initialState);
    });

   it('should render without errors', ()=> {
        const wrapper = findBytestAttr(component, 'ToggleComponent');
        expect(wrapper.length).toBe(1);
   });

    it('should access state and props', () =>{
    const classInstance = component.instance();
    const state = classInstance.props.store.getState();
    expect(classInstance.props.tab).toBe(false);
    expect(state.tab).toBe(false)
});

});

describe('OrderMeta component', () => {

    let component;
    beforeEach(() => {
        const props ={
           "order": 
               {
                "worker": {"worker":{"name":"kayongo david","company": "cisco"}},
               "deadline": "2012-09-06 09:02:23"
            }
            
        }
        component = orderItemSetup(props);
    });

    describe('Checking PropTypes ' , () =>{
        it('Should not throw an error', () => {
            const expected_props ={
                "order": 
                    {
                     "worker": {"worker":{"name":"kayongo david","company": "cisco"}},
                    "deadline": "2012-09-06 09:02:23"
                 }   
             }
            const propsError = check_props(OrderMeta, expected_props);
            expect(propsError).toBeUndefined();
        });
    });

    it('Should render without errors', () => {
        const wrapper = findBytestAttr(component, 'orderMetaComponent');
        expect(wrapper.length).toBe(1);   
    });

    it('Should render order-date ', () => {
        const order_date = findBytestAttr(component, 'order-date');
        expect(order_date.length).toBe(1);

    });


    it('Should render worker name and company  ', () => {
        const worker = findBytestAttr(component, 'worker-info');
        expect(worker.length).toBe(1);

    });

});

describe(' MainView component', () =>{
    let wrapper;
    beforeEach(() =>{
        const initialState ={'orders': [{
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
        wrapper = setUpMainView(initialState);
    });
    

    it('should render without errors', ()=> {
        const component = findBytestAttr(wrapper, 'mainviewComponent');
        expect(component.length).toBe(1);
    });
});





