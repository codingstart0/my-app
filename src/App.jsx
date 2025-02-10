import logo from './logo.svg';
import './App.css';
import { MANO_CONST, Test } from './components/Test';

function App() {
  return (
    <div className='App'>
      <img className='App-logo' src={logo} />
      <h1>Todo</h1>
      <Test prop1='value1'>
        <p>{MANO_CONST}</p>
      </Test>
    </div>
  );
}

export default App;
