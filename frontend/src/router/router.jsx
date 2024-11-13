import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { About } from "../ui/screens/about/About.jsx";
import { DonationForm } from "../ui/screens/donations/DonationForm.jsx";
import { PrivacyPolicy } from "../ui/screens/privacy-policy/index.jsx";
import { TermsOfUse } from "../ui/screens/terms-of-use/index.jsx";
import { ShowCampaign } from "../ui/screens/show-campaign/show-campaign.jsx";

const stripePromise = loadStripe(
  "pk_test_51QIIX6A7y85OqFb27poIhPEN2QMX1kWfM2fVi6M9YFA0dR7PQXdIV5mDlgBG9d2Xz0LaEEWq0kBsXL2EoKJR1uew00lUISKyYB"
);

export function AppRouter() {
  return (
    <Router>
      <Routes>
        {/*<Route path="/login" element={}/>
          <Route path="/home">HOME</Route>
          <Route path="/">PUBLIC HOME</Route>*/}
        <Route path="/about" element={<About />} />
        <Route
          path="/donation-form"
          element={
            <Elements stripe={stripePromise}>
              <DonationForm />
            </Elements>
          }
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/campaign" element={<ShowCampaign />} />
      </Routes>
    </Router>
  );
}
