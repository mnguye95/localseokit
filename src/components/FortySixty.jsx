import React from "react";
import AuditImage from "../assets/svg/audit.svg";
import BlogImage from "../assets/svg/blog_suggestions.svg";
import MetaImage from "../assets/svg/meta_description.svg";
import GeotagImage from "../assets/svg/geotag.svg";
import { Link } from "react-router-dom";
const FortySixty = () => {
  return (
    <div className="w-full bg-white md:py-16 py-8 md:px-[4em] px-[2em]">
      <div className="flex flex-col justify-center text-center md:mb-10 mb-5">
        <p className="md:text2xl text-xl font-medium text-black"></p>
        <h2 className="md:text-6xl sm:text-3xl text-3xl font-bold md:py-2">
          What's in the Kit?
        </h2>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-20">
        <div className="flex flex-col justify-center md:hidden">
          <p className="text-[#00df9a] font-bold">INSERT GEOLOCATION DATA</p>
          <h3 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Location-Based Images
          </h3>
          <p>Rank first locally with Image Geotagging.</p>
          <Link to="/register">
            <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]">
              Try It Today
            </button>
          </Link>
        </div>
        <img
          className="w-full mx-auto my-4 flex md:hidden"
          src={GeotagImage}
          alt="/"
        />
        <img
          className="w-full mx-auto my-4 md:flex hidden"
          src={GeotagImage}
          alt="/"
        />
        <div className="flex-col justify-center md:flex hidden">
          <p className="text-[#00df9a] font-bold">INSERT GEOLOCATION DATA</p>
          <h3 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Location-Based Images
          </h3>
          <p>Rank first locally with Image Geotagging.</p>
          <Link to="/register">
            <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]">
              Try It Today
            </button>
          </Link>
        </div>
        <div className="flex-col justify-center flex">
          <p className="text-[#00df9a] font-bold">META DESCRIPTION GENERATOR</p>
          <h3 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Niche Meta Descriptions
          </h3>
          <p>Compelling, detailed descriptions written by AI.</p>
        </div>
        <img className="w-full mx-auto my-4 flex" src={MetaImage} alt="/" />
        <div className="flex-col justify-center flex md:hidden">
          <p className="text-[#00df9a] font-bold">BLOG IDEAS GENERATOR</p>
          <h3 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            AI-Powered Content Suggestions
          </h3>
          <p>Get a brainstorm headstart with suggestions!</p>
        </div>
        <img
          className="w-full mx-auto my-4 flex md:hidden"
          src={BlogImage}
          alt="/"
        />
        <img
          className="w-full mx-auto my-4 md:flex hidden"
          src={BlogImage}
          alt="/"
        />
        <div className="flex-col justify-center md:flex hidden">
          <p className="text-[#00df9a] font-bold">BLOG IDEAS GENERATOR</p>
          <h3 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Content Suggestions
          </h3>
          <p>Get a headstart on your brainstorm with AI-Powered suggestions!</p>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">WEBSITE AUDIT</p>
          <h3 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Find Areas to Optimize
          </h3>
          <p>Small tweaks help outrank local competitors.</p>
        </div>
        <img className="w-full mx-auto my-4" src={AuditImage} alt="/" />
      </div>
    </div>
  );
};

export default FortySixty;
