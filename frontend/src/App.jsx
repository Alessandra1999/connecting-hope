import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './ui/components/navbar';
import { Router } from './router';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="bg-gradient-to-b from-primary-light-250 to-primary-light-400 min-h-screen">
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
