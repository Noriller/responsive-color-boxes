import './App.css';
import { BoxesWrapper } from './components/BoxesWrapper';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>Responsive Color Boxes | Bruno Noriller</p>
      </header>
      <div className='App-body'>
        <BoxesWrapper />
      </div>
    </div>
  );
}

export default App;
