import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './ui/components/navbar';
import { Router } from './router';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-100 min-h-screen">
        <Navbar />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
