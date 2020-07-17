import React from 'react';

const SelectedFilter = (props) => {
     
        return (
            <div>
                  <h2>Selected Filters</h2>
                  {props.checkedFilter.length > 0 && 
                        props.checkedFilter.map((filter,index) => {
                        return <span className="filter-label" key={index}>{filter}</span>;
                        })  
                  }     
                  {props.checkedFilter.length == 0 &&
                        <div>Filter not selected</div>
                  }
            </div>
            );
      }
    


export default SelectedFilter;