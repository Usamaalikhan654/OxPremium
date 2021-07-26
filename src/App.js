import React from "react";
import { HashRouter, Route, Switch , Redirect } from "react-router-dom";
import Home from "../src/Pages/Home/Home.js"
import Product from "./Pages/Product and Services/Product.js";
import Traindisplay from "./Pages/Training and consultancies/Traindisplay.js";
import ProcurementServices from "./Pages/Procurement  Services/ProcurementServices.js";

export default function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Product" component={Product}/>
        <Route exact path="/Train" component={Traindisplay}/>
        <Route exact path="/Procure" component={ProcurementServices}/>
      </Switch>
    </HashRouter>
  );
}