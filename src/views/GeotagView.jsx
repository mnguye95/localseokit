import { React, useState } from "react";
import Autocomplete from "react-google-autocomplete";
import GoogleMap from "../components/GoogleMap";
import SubmitButton from "../components/SubmitButton";
import FileUpload from "../components/FileUpload";
import { UserAuth } from "../context/AuthContext";

const GeotagView = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState({
    name: "",
    lat: 0,
    lng: 0,
  });

  const { details, updateUsage, navigate } = UserAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    var formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("name", location.name);
    formData.append("lat", location.lat);
    formData.append("lng", location.lng);
    console.log(formData);
    fetch(process.env.REACT_APP_SERVICE_URL + "/geotag", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          updateUsage("images");
          return response.blob();
        }
      })
      .then((data) => {
        var fileLink = document.createElement("a");
        fileLink.href = window.URL.createObjectURL(data);
        fileLink.download = location.name + ".jpg";
        fileLink.click();
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="flex flex-col w-full max-w-[1240px] md:mx-auto mx-0">
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
      <div className="flex flex-col">
        {!selectedImage ? (
          <div className="bg-white w-full">
            <h3 className="lg:text-2xl md:text-xl text-md font-bold md:my-6 text-center">
              Step 1: Upload JPG files
            </h3>
            <FileUpload
              setSelectedImage={setSelectedImage}
              selectedImage={selectedImage}
            />
          </div>
        ) : (
          <div className="bg-white w-full max-w-[768px] mx-auto">
            <h3 className="lg:text-2xl md:text-xl text-md font-bold my-6 text-center">
              Step 2: Locate City
            </h3>
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-full p-3"
                alt="/"
                src={URL.createObjectURL(selectedImage)}
              />
              <br />
              <button
                className="p-3 px-6 bg-red-500 text-white rounded-md mb-9 font-bold"
                onClick={() => setSelectedImage(null)}
              >
                Remove
              </button>
            </div>
            <form onSubmit={handleSubmit} className="text-center">
              <div className="flex flex-col py-2 ">
                <Autocomplete
                  className="border border-black-900 p-3 md:mx-10 mx-5 mb-5"
                  apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
                  onPlaceSelected={(place) =>
                    setLocation({
                      name: place.formatted_address,
                      lat: place.geometry.location.lat(),
                      lng: place.geometry.location.lng(),
                    })
                  }
                />
              </div>
              <SubmitButton
                uses={details.services.images.uses}
                limit={details.services.images.limit}
                isLoading={isLoading}
                navigate={navigate}
                text={"Process"}
              />
            </form>
            {location.name && (
              <GoogleMap
                className="w-full p-7"
                name={location.name}
                lat={location.lat}
                lng={location.lng}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GeotagView;
