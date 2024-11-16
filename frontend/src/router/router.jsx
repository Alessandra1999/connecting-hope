import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {
  ShowCampaign,
  About,
  HomeNotLogged,
  Home,
  InitialScreen,
  PrivacyPolicy,
  TermsOfUse,
  DonationForm,
} from "../ui/screens";

const stripePromise = loadStripe(
  "pk_test_51QIIX6A7y85OqFb27poIhPEN2QMX1kWfM2fVi6M9YFA0dR7PQXdIV5mDlgBG9d2Xz0LaEEWq0kBsXL2EoKJR1uew00lUISKyYB"
);

export function AppRouter() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<HomeNotLogged />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<InitialScreen />} />
        <Route path="/about" element={<About />} />
        <Route path="/campaign/:campaignId" element={<ShowCampaign />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="/donation-form"
          element={
            <Elements stripe={stripePromise}>
              <DonationForm />
            </Elements>
          }
        />
      </Routes>
    </Router>
  );
}
