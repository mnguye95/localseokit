import React from "react";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";

const Settings = () => {
  const { details, updateDetails } = UserAuth();
  const [current, setCurrent] = useState(details.details);
  return (
    <div className="min-h-screen max-w-[1240px] md:mx-auto mx-0 grid gap-6 p-7 w-screen overflow-auto ">
      <div className="bg-white w-full flex flex-col">
        
        <h1 className="lg:text-4xl md:text-2xl text-xl font-bold">Profile</h1>
        <div className="flex flex-row w-full my-2 items-center">
          <div className="lg:text-2xl md:text-xl text-[10px] font-bold w-1/4 text-center p-3 border border-gray-200">
            Name
          </div>
          <input
            className="lg:text-2xl md:text-xl text-xs font-bold w-3/4 p-3 md:px-10 border border-gray-200"
            onChange={(e) => setCurrent({ ...current, name: e.target.value })}
            value={current.name}
          />
        </div>
        <div className="flex flex-row w-full my-2 items-center">
          <div className="lg:text-2xl md:text-xl text-[10px] font-bold w-1/4 text-center p-3 border border-gray-200">
            Phone
          </div>
          <input
            className="lg:text-2xl md:text-xl text-xs font-bold w-3/4 p-3 md:px-10 border border-gray-200"
            onChange={(e) => setCurrent({ ...current, phone: e.target.value })}
            value={current.phone}
          />
        </div>
        <div className="flex flex-row w-full my-2 items-center">
          <div className="lg:text-2xl md:text-xl text-[10px] font-bold w-1/4 text-center p-3 border border-gray-200">
            Company
          </div>
          <input
            className="lg:text-2xl md:text-xl text-xs font-bold w-3/4 p-3 md:px-10 border border-gray-200"
            onChange={(e) =>
              setCurrent({ ...current, company: e.target.value })
            }
            value={current.company}
          />
        </div>
        <div className="flex flex-row w-full my-2 items-center">
          <div className="lg:text-2xl md:text-xl text-[10px] font-bold w-1/4 text-center p-3 border border-gray-200">
            Website
          </div>
          <input
            className="lg:text-2xl md:text-xl text-xs font-bold w-3/4 p-3 md:px-10 border border-gray-200"
            onChange={(e) =>
              setCurrent({ ...current, website: e.target.value })
            }
            value={current.website}
          />
        </div>
        <button
          className="bg-[#00df9a] rounded-md text-lg font-medium mx-auto my-4 p-3 text-white"
          onClick={() => {
            updateDetails(current);
          }}
        >
          Update Profile
        </button>
        <h1 className="lg:text-4xl md:text-2xl text-xl font-bold">Current Usage</h1>
        <div className="flex flex-row w-full my-5 items-center">
          <h3 className="lg:text-2xl md:text-xl text-xs font-bold w-1/4 text-center">
            SEO Audits
          </h3>
          <div className="bg-gray-200 w-3/4 mx-2 rounded-full h-5">
            <div
              className={`bg-[#00df9a] h-5 text-xs font-medium text-white text-center p-0.5 justify-center leading-none rounded-full`}
              style={{
                width:
                  Math.floor(
                    (details.services.audit.uses /
                      details.services.audit.limit) *
                      100
                  ) + "%",
              }}
            >
              {" "}
              {details.services.audit.uses} / {details.services.audit.limit}
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full my-5 items-center">
          <h3 className="lg:text-2xl md:text-xl text-xs font-bold w-1/4 text-center">
            Meta Descriptions
          </h3>
          <div className="bg-gray-200 w-3/4 mx-2 rounded-full h-5">
            <div
              className={`bg-[#00df9a] h-5 text-xs font-medium text-white text-center p-0.5 justify-center leading-none rounded-full`}
              style={{
                width:
                  Math.floor(
                    (details.services.descriptions.uses /
                      details.services.descriptions.limit) *
                      100
                  ) + "%",
              }}
            >
              {" "}
              {details.services.descriptions.uses} /{" "}
              {details.services.descriptions.limit}
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full my-5 items-center">
          <h3 className="lg:text-2xl md:text-xl text-xs font-bold w-1/4 text-center">
            Images
          </h3>
          <div className="bg-gray-200 w-3/4 mx-2 rounded-full h-5">
            <div
              className={`bg-[#00df9a] h-5 text-xs font-medium text-white text-center p-0.5 justify-center leading-none rounded-full`}
              style={{
                width:
                  Math.floor(
                    (details.services.images.uses /
                      details.services.images.limit) *
                      100
                  ) + "%",
              }}
            >
              {" "}
              {details.services.images.uses} / {details.services.images.limit}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
