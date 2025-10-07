import { Routes, Route } from "react-router-dom";

import "./App.css";

import ComingSoon from "./components/ComingSoon";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfUse from "./components/TermsOfUse";
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />
    </Routes>
  );
}
