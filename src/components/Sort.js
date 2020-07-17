import React, { Component } from 'react';

class Sort extends Component {
    
    handleChange = (e) => {
        this.props.sortCharacters(e.target.value);
    }
    
     render() {
        return (
            <div className="sort-section">
                
                 <select onChange={this.handleChange}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>              
            </div>
            );
      }
    }
    


export default Sort;