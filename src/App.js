import logo from './logo.svg';
import gojo from './gojo.jpg';
import './App.css';
import Shiba from "./component/Shiba";
import Anime from "./component/Anime";
import Search from "./component/Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={gojo} className="App-logo" alt="logo" />
        <br/>
        <Search />
        <Shiba />
      </header>
    </div>
  );
}

export default App;
