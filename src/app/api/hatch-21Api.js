 import 'whatwg-fetch';  



const login = () => {

    const url = 'http://127.0.0.1:5000/api/auth/login';
   

    let data ={
        name:"admin",
        email:"admin@gmail.com"
    }
    fetch(url, {
        method:'POST',
        mode:'cors',
        headers:{
            'Content-Type': 'Application/json'
        },
        body:JSON.stringify(data)
    }).then(res=>res.json())
    .then(response=>{
        localStorage.setItem("token", response.token);
       
    })
}

login();

function client(endpoint, {body, ...customConfig} = {}) {
    const token = window.localStorage.getItem('token')
    const headers = {'content-type': 'application/json'}
    if (token) {
      headers.Authorization = `Bearer ${token}`
    }
    const config = {
      method: body ? 'POST' : 'GET',
      ...customConfig,
      headers: {
        ...headers,
        ...customConfig.headers,
      },
    }
    if (body) {
      config.body = JSON.stringify(body)
    }
  
    return window
      .fetch(`https://www.hatchways.io/api/assessment/${endpoint}`, config)
      .then(r => r.json())
  }


let HatchAPI = {
    
    
    fetchworker_orders() { 
       return this.fetchorders().then(orders => {
           console.log(orders);
           
            const ordersWithworkers = orders.orders.map(async order => {
                order.worker = await this.fetchworker(order.workerId)
                return order;
            });
        const resolvedorders = Promise.all(ordersWithworkers)
        return resolvedorders;
        }).then(function(data){
           return {orders: data} 
        });
       
    }, 

    fetchworker(worker_id) {
        return client(`workers/${worker_id}`);
    }, 

    fetchorders(){
        return client('work_orders');  
    }
    
};

  
export default HatchAPI; 
