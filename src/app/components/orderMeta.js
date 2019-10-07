import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';


const OrderMeta = props => {
  const order = props.order;
  return (
       <article className="card">
              <div className="order-meta" data-test='orderMetaComponent'>
            <h1>#{order.orderid}</h1>
            <section>
            <div><img src='../actions/img/david.JPG' alt={order.worker.name} /></div>
              
              <div className="info" data-test='worker-info'>
                  <div className='name'>{order.worker.worker.name}</div>
                  <div className='company'>{order.worker.worker.company}</div>
                <span className="date" data-test='order-date'>
                  {new Date(order.deadline).toUTCString()}
                </span>
              </div>
            </section>
           

          </div>
           </article>
          
   
  );
};

OrderMeta.propTypes = {
order: PropTypes.object
}

export default OrderMeta;
