import React, {Component} from 'react';
import {connect } from 'react-redux';
import {bindActionCreators } from 'redux';
import { search }  from '../../app/actions/hatchActionCreators';

class SearchBar extends Component {

    render() { 
        const {search, searchItem} = this.props;
        const handleChange = (e) => {
            e.preventDefault();
            search(e.target.value)
        }
        
        return ( 
            <div>
               <div className="input-group">
        <input type="text" className="form-control" onChange={handleChange.bind(this)} value={searchItem} placeholder="filter by worker"/>
              </div>
            </div>
         );
    }
}

const mapStateToProps = (state) => ({
    searchItem: state.searchItem,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({search}, dispatch)


 
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);