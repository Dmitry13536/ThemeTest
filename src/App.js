import './App.css';
import Spin from './components/Spin/Spin';
import ThemeSwitch from './components/ThemeSwitch/ThemeSwitch';
import SomeText from './components/SomeText/SomeText';

function App() {
  

  return (
    <div className="App">
      <Spin />
      <br />
      <ThemeSwitch />
      <br />
      <SomeText />
    </div>
  );
}

export default App;
