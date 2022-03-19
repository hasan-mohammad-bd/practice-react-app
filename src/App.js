import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Countries from "./components/Header/countries/Countries";

function App() {
  return (
    <div className="body">
      <div className="App container">
        <Header></Header>
        <Countries></Countries>
      </div>
    </div>
  );
}

export default App;
