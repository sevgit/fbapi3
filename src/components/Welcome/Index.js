import React from 'react';



const Welcome = (props) => {

    return (
      <h2>
        ¡Bienvenido, {props.name ||" por favor logueate"}!
      </h2>

    );
  }


export default Welcome;
