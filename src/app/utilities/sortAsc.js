
const sortAscending = function(orders){
    function smallestToBiggest(a, b) {
        return a.deadline - b.deadline;
        }

    return orders.sort(smallestToBiggest);
}


export default sortAscending;
