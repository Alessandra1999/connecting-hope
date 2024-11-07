import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './ui/components/navbar';
import { Router } from './router';
import Slider from './ui/components/slider/slider';
import { Home } from './ui/screens/home';
import { HomeNotLogged } from './ui/screens/HomeNotLogged';
import { InitialScreen } from './ui/screens/register&login';
import LoginForm from './ui/components/registers-forms/LoginForm';
import UserForm from './ui/components/registers-forms/UserForm';

function App() {
  return (
    /*<BrowserRouter>
      <div className="bg-slate-100 min-h-screen">
        <Navbar />
        <Router />
      </div>
    </BrowserRouter>*/
    // <Home/>
    // <HomeNotLogged/>
    <InitialScreen/>
    // <Slider />
  );
}

export default App;
