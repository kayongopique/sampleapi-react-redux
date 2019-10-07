import { logger } from "./store";



describe(' should process actions ', () => {
    let next, dispatch, getState, middleware
    beforeEach(()=> {
        // setting up middleware for the tests
        next = jest.fn();
        dispatch = jest.fn();
        getState = jest.fn();
        middleware = logger({dispatch, getState})(next);
    });
    
    it('should process action down the chain', () =>{
        const loggerAction = {type: 'SAMPLE_ACTION'}
        middleware(loggerAction);

        expect(next.mock.calls.length).toBe(1);
        expect(next.mock.calls[0].length).toBe(1);
        expect(next.mock.calls[0][0]).toEqual(loggerAction);
       
    });
    
});
