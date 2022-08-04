import { React, useState } from "react";
import { usePlacesWidget } from "react-google-autocomplete";
import GoogleMap from "../components/GoogleMap";
import FileUpload from "../components/FileUpload";
import { UserAuth } from "../context/AuthContext";

const GeotagView = () => {
  const [location, setLocation] = useState({
    name: "",
    lat: 0,
    lng: 0,
  });

  const { details, updateUsage } = UserAuth();

  const { ref } = usePlacesWidget({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    onPlaceSelected: (place) =>
      setLocation({
        name: place.formatted_address,
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      }),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    var temp = "";
    fetch(process.env.REACT_APP_SERVICE_URL + "/geotag", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: temp,
      }),
    })
      .then((response) => {
        if (response.ok) {
          updateUsage("images");
          return response.json();
        }
      })
      .then((data) => {
        // setDetails(data);
      });
  };
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col p-7 justify-center text-center gap-2">
        <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold">
          Image Local Geotag
        </h1>
        {
          <p className="text-gray-300 font-medium text-xl">
            Usage: {details.services.images.uses} /{" "}
            {details.services.images.limit}
          </p>
        }
      </div>
      <div className="md:flex p-7 w-full">
        <div className="bg-white w-full ">
          <h3 className="lg:text-2xl md:text-xl text-md font-bold my-6 text-center">
            Step 1: Upload JPG files
          </h3>
          <FileUpload />
        </div>
        <div className="bg-white w-full">
          <h3 className="lg:text-2xl md:text-xl text-md font-bold my-6 text-center">
            Step 2: Locate City
          </h3>
          <form onSubmit={handleSubmit} className="text-center">
            <div className="flex flex-col py-2 ">
              <input
                ref={ref}
                className="border border-black-900 p-3 md:mx-10 mx-5 mb-5"
                type="text"
                placeholder="Target Location of Service"
              />
            </div>
            <button
              type="success"
              className="bg-[#00df9a] rounded-md text-lg font-medium px-8 mx-auto my-4 p-3 text-white"
            >
              Process
            </button>
          </form>
          {/* <GoogleMap
            className="w-full p-7"
            name={location.name}
            lat={location.lat}
            lng={location.lng}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default GeotagView;
