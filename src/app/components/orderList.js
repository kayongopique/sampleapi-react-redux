import OrderMeta from './orderMeta';
import PropTypes from 'prop-types';
import React from 'react';

const OrderList = props => {

  if (!props.orders) {
    return (
      <div className="order-preview">Loading...</div>
    );
  }

  if (props.orders.length === 0) {
    return (
      <div className="article-preview">
        No orders yet here.......
      </div>
    );
  }

  if(!props.filtered_orders){
    return (
      <div className='workerOrders-center'>
        {
          props.orders.orders.map(order=> {
            return ( 
            
               <OrderMeta key={order.orderid} order={order} />
           );
          })
        }
  
      </div>
    );
}else{
  return (
    <div className='workerOrders-center'>
      {
        props.filtered_orders.map(order=> {
          return ( <OrderMeta key={order.orderid} order={order} />);
        })
      }

    </div>
  );
}
  
 
};

export default OrderList;
