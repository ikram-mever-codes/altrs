import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/General/Header";
import Index from "./Pages/Home/Index";
import Footer from "./components/General/Footer";
import MyAccount from "./Pages/MyAccount/Index";
import MensPage from "./Pages/Mens/Index";
import WomenPage from "./Pages/Women/Index";
import LoginPage from "./Pages/Login/Index";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen w-screen  bg-white">
        {" "}
        {/* Header appears on all pages */}
        <Header />
        {/* Main content area */}
        <main className="w-full">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/mens" element={<MensPage />} />
            <Route path="/women" element={<WomenPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
