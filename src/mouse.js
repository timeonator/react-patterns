import React, {useState} from 'react';


var Mouse = props => {
    const [mouse, setPosition] = useState();

    function handleMouseMove(event) {
//      console.log("Event: ", event.clientX, event.clientY);
     setPosition(event.clientX);
      console.log("Mouse", mouse);
    }

    return (
      <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}> 
        {props.render(mouse)}
      </div>
    );
  }
  export default Mouse;

  