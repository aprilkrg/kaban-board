// import './App.css';
import TakeText from "./TakeText/TakeText";
import ShowText from "./ShowText/ShowText";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Kabanshee
      </header>
        <TakeText text="Create a task" />
        {/* <ShowText task="buy cat food"/> */}
    </div>
  );
}

export default App;
