import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { GoogleOAuthProvider } from "@react-oauth/google";
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
import { ProtectedRoute } from "./ProtectedRoute";
import { Footer } from "../ui/components/footer/footer";
import { Navbar } from "../ui/components/navbar";

const stripePromise = loadStripe(
  "pk_test_51QIIX6A7y85OqFb27poIhPEN2QMX1kWfM2fVi6M9YFA0dR7PQXdIV5mDlgBG9d2Xz0LaEEWq0kBsXL2EoKJR1uew00lUISKyYB"
);

export function AppRouter() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeNotLogged />} />
        <Route
          path="/login"
          element={
            <GoogleOAuthProvider clientId="85589774474-n1ecmsdgd981guhng35k6etovh41p0ea.apps.googleusercontent.com">
              <InitialScreen onLogin={() => setIsLoggedIn(true)} />
            </GoogleOAuthProvider>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Navbar />
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        />
        <Route
          path="/campaign/:campaignId"
          element={
            <>
              <Navbar />
              <ShowCampaign />
            </>
          }
        />
        <Route
          path="/terms-of-use"
          element={
            <>
              <Navbar />
              <TermsOfUse />
            </>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <>
              <Navbar />
              <PrivacyPolicy />
            </>
          }
        />
        <Route
          path="/donation-form"
          element={
            <Elements stripe={stripePromise}>
              <DonationForm />
            </Elements>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}
