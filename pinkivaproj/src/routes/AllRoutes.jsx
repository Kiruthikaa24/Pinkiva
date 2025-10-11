import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//main pages
import Homepage from '../components/Homepage';
import LoginSignup from '../components/LoginSignup';
import ForgotPassword from '../components/ForgotPassword';
import Cart from '../components/Cart';

// Category Pages
import Makeup from '../pages/Makeup';
import Skin from '../pages/Skin';
import Appliances from '../pages/Appliances';
import Bathbody from '../pages/Bathbody';
import Natural from '../pages/Natural';
import MomBaby from '../pages/Mombaby';
import HealthWellness from '../pages/Healthwellness';
import Men from '../pages/Men';
import Fragrance from '../pages/Fragrance';
import Bagsaccessories from '../pages/Bagsaccessories';
import Offers from '../pages/Offers';
import Feedback from '../pages/Feedback';

//faceprod
import FaceProducts from '../pages/FaceProducts';
import EyeProducts from '../pages/EyeProducts';
import LipProducts from '../pages/LipProducts';
import Kits from '../pages/Kits';
import Nails from '../pages/Nails';
import Trendy from '../pages/Trendy';
//skinprod
import Moisturizer from '../pages/Moisturizer';
import Sunscreen from '../pages/Sunscreen';
import Cleansersmasks from '../pages/Cleansersmasks';


function AllRoutes() {
  return (
    <Router>
      <Routes>
      <Route path="/homepage" element={<Homepage />} />

        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/cart" element={<Cart />} />

        {/* Category Routes */}
        <Route path="/makeup" element={<Makeup />} />
        <Route path="/skin" element={<Skin />} />
        <Route path="/appliances" element={<Appliances />} />
        <Route path="/bathbody" element={<Bathbody />} />

        <Route path="/natural" element={<Natural />} />
        <Route path="/mombaby" element={<MomBaby />} />
        <Route path="/healthwellness" element={<HealthWellness />} />
        <Route path="/men" element={<Men />} />
        <Route path="/fragrance" element={<Fragrance />} />
        <Route path="/bagsaccessories" element={<Bagsaccessories />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/feedback" element={<Feedback />} />

        <Route path="/makeup/face" element={<FaceProducts />} />
        <Route path="/makeup/eyes" element={<EyeProducts />} />
        <Route path="/makeup/lips" element={<LipProducts />} />
        <Route path="/makeup/kits" element={<Kits />} />
        <Route path="/makeup/nails" element={<Nails />} />
        <Route path="/makeup/trendy" element={<Trendy />} />
        <Route path="/skin" element={<Skin />} />
        <Route path="/skin/moisturizer" element={<Moisturizer />} />
        <Route path="/skin/sunscreen" element={<Sunscreen />} />
        <Route path="/skin/cleansersmasks" element={<Cleansersmasks />} />
      </Routes>
    </Router>
  );
}

export default AllRoutes;


