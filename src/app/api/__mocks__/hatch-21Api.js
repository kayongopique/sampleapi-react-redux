const fakedata = [
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


let HatchAPI = {
    
    
    fetchworker_orders() { 
       return Promise.resolve({orders: fakedata});
       
    }
}
export default HatchAPI;