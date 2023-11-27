import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TopNav from "component/topNav"
import TopNavLanding from "component/topNavLanding"

import Portfolio from "pages/Portfolio"
import Landing from "pages/Landing"
import Invest from "pages/Invest"
import Lending from "pages/Lending"
import EthInvest from "pages/Ethereum/Invest"
import Manage from "pages/Manage"
import StableManage from "pages/Stable"
import Products from "pages/Products"

import DetailStaking from "pages/Detail_Staking"
import DetailLending from "pages/Detail_Lending"

import ScrollTop from 'ScrollTop';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <ScrollTop />
        <Routes>
            <Route path="/" element={<TopNavLanding />} />

            <Route path="/portfolio" element={<TopNav />} />
            <Route path="/products" element={<TopNav />} />
            <Route path="/invest" element={<TopNav />} />
            <Route path="/invest/:chain" element={<TopNav />} />
            <Route path="/lend" element={<TopNav />} />
            <Route path="/detail/staking/:id" element={<TopNav />} />
            <Route path="/detail/lending/:id" element={<TopNav />} />

            <Route path="/manage/:id" element={<TopNav />} />
            <Route exact path="/stable/:id" element={<TopNav />} />
          </Routes>
        <Routes>
          <Route exact path="/" element={<Landing />} />

          {/* <Route path="/detail/:id" element={<Detail />} /> */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/products" element={<Products />} />
          <Route exact path="/invest" element={<Invest />} />
          <Route path="/invest/:chain" element={<EthInvest />} />
          <Route path="/lend" element={<Lending />} />
          <Route path="/detail/lending/:id" element={<DetailLending />} />
          <Route path="/detail/staking/:id" element={<DetailStaking />} />
          <Route path="/manage/:id" element={<Manage />} />
          <Route exact path="/stable/:id" element={<StableManage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
