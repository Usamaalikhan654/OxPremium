import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "../src/Pages/Home/Home.js";
import Product from "./Pages/Product and Services/Product.js";
import Traindisplay from "./Pages/Training and consultancies/Traindisplay.js";
import ProcurementServices from "./Pages/Procurement  Services/ProcurementServices.js";
import Consumer from "./Pages/Shoes Consumer/Consumer.js";
import Safety from "./Pages/Safety shoes/Safety.js";
import Leather from "./Pages/Leather goods/Leather.js";
import Procure from "./Pages/Procure Info/Procure.js";
import Contact from "./Pages/Contact us/Contact.js";
import ScrollToTop from "react-router-scroll-top";

export default function App() {
  return (
    <HashRouter>
      <Switch>
        <ScrollToTop>
          <Route exact path="/" component={Home} />
          <Route exact path="/Product" component={Product} />
          <Route exact path="/Train" component={Traindisplay} />
          <Route exact path="/Procure" component={ProcurementServices} />
          <Route exact path="/Consume" component={Consumer} />
          <Route exact path="/Safety" component={Safety} />
          <Route exact path="/Leather" component={Leather} />
          <Route exact path="/Procured" component={Procure} />
          <Route exact path="/Contact" component={Contact} />
        </ScrollToTop>
      </Switch>
    </HashRouter>
  );
}
