
const sortDescending = function(orders){
    function biggestToSmallest(a, b) {
        return b.deadline - a.deadline;
      }

   return orders.sort(biggestToSmallest);
}

export default sortDescending;
