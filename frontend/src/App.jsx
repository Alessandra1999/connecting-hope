import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './ui/components/navbar';
import { Router } from './router';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="bg-gradient-to-b from-primary-light-250 to-primary-light-400 min-h-screen dark:from-primary-dark-250 dark:to-primary-dark-500">
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
