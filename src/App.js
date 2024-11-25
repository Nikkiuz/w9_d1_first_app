import logo from "./logo.svg";
import "./App.css";
import MainComponent from "./components/MainComponent";
import ClassComponent from "./components/ClassComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <MainComponent student="Stefano" color="green" />
        <MainComponent student="Giulio" color="red" />
        <MainComponent student="Omar" color="blue" />
        <ClassComponent label="Cliccami 1" />
        <ClassComponent label="Cliccami 2" />
      </main>
    </div>
  );
}

export default App;
