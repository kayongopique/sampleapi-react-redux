import React, {Component} from 'react';
import OrderList from './orderList';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import HatchActionCreators from '../actions/hatchActionCreators';



class MainView extends Component {

  render() {  
    return ( 
      <div className="mainviewComponent" data-test="mainviewComponent">
        <OrderList orders={this.props.orders} filtered_orders={this.props.filtered_orders}/>
     
  </div>
     );
  }
}
 

const mapStateToProps = (state) => ({ 
  orders: state.orders,
  filtered_orders: state.orders.filtered_orders
} ); 


export default connect(mapStateToProps)(MainView);