import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Body/>

      <p>Displaying list of Players....</p>
    </div>
  );
}

export default App;
