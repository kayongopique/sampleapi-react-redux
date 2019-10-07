import React from 'react';
import {Switch} from './Switch';
import {connect} from 'react-redux';
import HatchActionCreators from '../../actions/hatchActionCreators';

class Toggle extends React.Component {

  toggle = (e) => {
    e.preventDefault();
    this.props.onToggle(!this.props.tab)
  }
  render() {
    
    
    const on = this.props.tab;
    return <Switch on={on} onClick={this.toggle} data-test="ToggleComponent"/>
  }
}


const mapStateToProps = (state) => ({ 
  tab: state.orders.tab
} ); 

const mapDispatchToProps = (dispatch) => ({
onToggle: (tab) => dispatch(HatchActionCreators.onToggle(tab)),  
} ); 

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);

