import './App.css';
import helloThere from './hello-there.jpg';

function App() {
  return (
      <div className="App">
        <img src={helloThere} alt="Hello There"/>
        <p>Welcome to the greatest site on the interweb.</p>
        <p>Please enjoy one of the greatest memes of our generation while I finish the rest of the site.</p>
      </div>
  );
}

export default App;
