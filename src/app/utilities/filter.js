const findOrder = function(orders, searchTerm){
    const orderReturned = orders.filter(
        (order) => order.worker.worker.name.toLowerCase().includes(searchTerm.toLowerCase() || '')
        
        // order.worker.worker.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >
        // -1,
    )
    return orderReturned;

}

export default findOrder;