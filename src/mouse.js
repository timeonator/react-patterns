import React, {useState} from 'react';


var Mouse = props => {
    const [mouse, setPosition] = useState({
      x:0,
      y:0
    });

    function handleMouseMove(event) {
//      console.log("Event: ", event.clientX, event.clientY);
     setPosition({
       x: event.clientX,
       y: event.clientY
     });
      console.log("Mouse", mouse);
    }

    return (
      <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}> 
        {props.render(mouse)}
      </div>
    );
  }
  export default Mouse;

  