import './App.css';

import { WeatherProvider } from './context/WeatherContext';

import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Container></Container>
      </WeatherProvider>

    </div>
  );
}

export default App;
