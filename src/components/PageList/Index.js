import React from 'react';
import PageCard from './PageCard/Index';


const PageList = (props) => {

    return (

      <div>
        {
        	props.name.map((val,index) => {
    			<PageCard name={ val || "Punch" } likes={ props.|| 9.999} />
    		})
        }
      </div>

    );
  }


export default PageList;
