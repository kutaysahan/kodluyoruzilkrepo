import './App.css';
import Container from './components/Container';
import { BmiProvider } from './context/BmiContext';

function App() {
  return (
    <div className="App">
      <BmiProvider>
        <Container></Container>
      </BmiProvider>
      
    </div>
  );
}

export default App;


