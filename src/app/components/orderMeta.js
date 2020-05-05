import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';


const OrderMeta = props => {
  const order = props.order;
  return (
       <article className="card">
              <div className="order-meta" data-test='orderMetaComponent'>
            <h1>Work Order #{order.id}</h1>
            <section>
            <div><img src={order.worker.worker.image} alt={order.worker.worker.name} /></div>
              
              <div className="info" data-test='worker-info'>
                  <div className='name'>{order.worker.worker.name}</div>
                  <div
                  style={{
                    color: 'white',
                    fontSize: 16
                  }}
                  className='company'>{order.worker.worker.companyName}</div>
                  <div 
                   style={{
                    color: 'white',
                    fontSize: 14
                  }}
                  className='email'>{order.worker.worker.email}</div>
                <div className="date" data-test='order-date'>
                  {new Date(order.deadline).toUTCString()}
                </div>
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
