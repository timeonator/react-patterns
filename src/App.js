import './App.css';
import Mouse from './mouse';
import Cat from './cat';

function App() {
    return (
      <div className="App">
        <h1>Move the mouse around!</h1>
        <Mouse 
          render={mouse => ( <Cat mouse={mouse} />) }
        />
      </div>
    );
}
export default App;
