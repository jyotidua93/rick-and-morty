import React, { Component } from 'react';

class Filters extends Component {

        filterItems = [
          {
            value: 'female',
            checked: false,
            name: 'gender'
          },
          {
            value: 'male',
            checked: false,
            name: 'gender'
          },
          {
            value: 'genderless',
            checked: false,
            name: 'gender'
          },
          {
            value: 'unknown',
            checked: false,
            name: 'gender'
          },
          {
            value: 'human',
            checked: false,
            name: 'species'
          },
          {
            value: 'alien',
            checked: false,
            name: 'species'
          },
          {
            value: 'humanoid',
            checked: false,
            name: 'species'
          }
        ];

      render() {
        return (
            <div id="sidebar">
                 <h2>Filters</h2>
                 <button onClick={this.props.filterCharacters} value="reset" type="button">Reset</button>
                    <div className="form form-inline">
                        {this.filterItems.map((item,index) => ( 
                            <div key={index}>
                                <h3>
                                    {(index === 0 || index === 4 ) ? item.name : ''}
                                </h3>
                                
                                <label htmlFor="">
                                    <input type='radio' value={item.value} name={item.name} onChange={this.props.filterCharacters} />
                                    {item.value}
                                </label>
                          </div>
                        ))}                    
                   </div>
            </div>               
          );
      }
    
}

export default Filters;