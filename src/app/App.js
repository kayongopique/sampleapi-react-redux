import React, { Component} from 'react'; 
import PropTypes from 'prop-types';  
import MainView from './components/mainView';
import SearchBar from './components/searchBar';
import Usage from './components/toggler/toggle'


class App extends Component {
 
  componentDidMount(){
    this.props.fetchOrders(); 
  }
  render() { 
    return (
    <div>
      <header>
        <div className="header-brand"> 
        <SearchBar />
        </div> 
      </header> 
      <div> <Usage />  </div>
      <MainView />
      
    </div> );   
} 
} 

export default App;  