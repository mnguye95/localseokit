import React from "react";
import GreenFood from "../assets/images/companies/greens-food-suppliers.png";
import AutoSpeed from "../assets/images/companies/auto-speed.png";
import WebWorks from "../assets/images/companies/the-web-works.png";
import HygieneServices from "../assets/images/companies/cheshire-county-hygiene-services.png";
import DanceStudio from "../assets/images/companies/the-dance-studio.png";
import Crofts from "../assets/images/companies/crofts-accountants.png";

const Clients = () => {
  return (
    <div className="bg-black">
      <div className="grid-cols-6 gap-4 items-center lg:px-[300px] md:grid hidden">
        <img className="lg:p-10 p-4" src={GreenFood} alt="/" />
        <img className="lg:p-10 p-4" src={AutoSpeed} alt="/" />
        <img className="lg:p-10 p-4" src={WebWorks} alt="/" />
        <img className="lg:p-10 p-4" src={HygieneServices} alt="/" />
        <img className="lg:p-10 p-4" src={DanceStudio} alt="/" />
        <img className="lg:p-10 p-4" src={Crofts} alt="/" />
      </div>
    </div>
  );
};

export default Clients;
