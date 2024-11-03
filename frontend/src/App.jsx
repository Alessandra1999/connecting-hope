import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './ui/components/navbar';
import { Router } from './router';
import About from './ui/screens/about/About';

function App() {
  return (
    /*<BrowserRouter>
      <div className="bg-slate-100 min-h-screen">
        <Navbar />
        <Router />
      </div>
    </BrowserRouter>*/

    <About />
  );
}

export default App;
