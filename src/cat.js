var Cat = props => {
      const mouse = props.mouse;
      console.log("Mouse ", mouse);
      return (
//        <div>Cat {mouse}</div>
        <img src="../public/logo192.png" alt="Oh no, pussy gato" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
      );
    }

export default Cat;
  