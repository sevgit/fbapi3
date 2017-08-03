import React from 'react';
import PageCard from './PageCard/Index';


const PageList = (props) => {

    return (

      <div>
        {
          console.log(props)
        	props.map((val,index) => {
    			<PageCard name={ val.name || "Punch" } likes={ val.fan_count|| 9.999} />
    		})
        }
      </div>

    );
  }


export default PageList;
