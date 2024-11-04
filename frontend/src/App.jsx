import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './ui/components/navbar';
import { Router } from './router';
import Slider from './ui/components/slider/slider';
import { ShowCampaign } from './ui/screens/show-campaign';

function App() {
  return (
    // <BrowserRouter>
    //   <div className="bg-slate-100 min-h-screen">
    //     <Navbar />
    //     <Router />
    //   </div>
    // </BrowserRouter>
    <ShowCampaign />
  );
}

export default App;
