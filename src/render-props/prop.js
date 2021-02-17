import Mouse from './mouse';
import Cat from './cat';
// import RenderProps from './render-props/render-props'

function Prop() {
    return (
      <div className="Prop">
        <h1>Move the mouse around!</h1>
        <Mouse 
          render={mouse => ( <Cat mouse={mouse} />) }
        />
      </div>
    );
}
export default Prop;