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
      <div className="grid-cols-6 gap-4 md:px-[300px] items-center md:grid hidden">
        <img className="p-10" src={GreenFood} alt="/" />
        <img className="p-10" src={AutoSpeed} alt="/" />
        <img className="p-10" src={WebWorks} alt="/" />
        <img className="p-10" src={HygieneServices} alt="/" />
        <img className="p-10" src={DanceStudio} alt="/" />
        <img className="p-10" src={Crofts} alt="/" />
      </div>
    </div>
  );
};

export default Clients;
