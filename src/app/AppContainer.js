import App from './App';
import HatchActionCreators from '../app/actions/hatchActionCreators';
import {connect} from 'react-redux';


const mapStateToProps = (state) => ({ 
        orders: state.orders,
        filtered_orders: state.filtered_orders,
} ); 

const mapDispatchToProps = (dispatch) => ({
    fetchOrders: () => dispatch(HatchActionCreators.fetchOrders()),
    onToggle: (tab) => dispatch(HatchActionCreators.onToogle(tab)),  
} ); 

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;