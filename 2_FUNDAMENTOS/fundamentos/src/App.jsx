//styles
import './App.css'

//components
import FirstComponent from './components/FirstComponent';
import Events from './components/Events';
import Challenge from './components/Challenge';

function App() {

  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <Events />
      <Challenge />
    </div>
  );
}

export default App
