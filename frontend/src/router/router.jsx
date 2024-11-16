import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShowCampaign, About, HomeNotLogged, Home, InitialScreen, PrivacyPolicy, TermsOfUse } from "../ui/screens";

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeNotLogged />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/login" element={<InitialScreen />}/>
        <Route path="/about" element={<About />} />
        <Route path="/campaign/:campaignId" element={<ShowCampaign />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}
