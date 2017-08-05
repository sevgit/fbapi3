import React from 'react';
import './Index.css';


const PageCard = (props) => {

    return (
      <div className="cardContainer">
        <div className="cardPhoto"> 
        <img src={props.photo || 'cardPhoto.png'} alt="img" />
        </div>
        <div className="cardName"> 
        {props.name || 'Punch'}
        </div>
        <div className="cardStats"> 
        <span className="cardLikes">
        {props.likes || '0'}
        
        </span>
        </div>
      </div>

    );
  }


export default PageCard;
