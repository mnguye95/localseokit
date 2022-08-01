import {React, useState} from "react";
import { usePlacesWidget } from "react-google-autocomplete";

const GeotagView = () => {
  const [city, setCity] = useState('');

  // const handleUrl = (url) => {
  //   setUrl(url);
  // };

  const { ref } = usePlacesWidget({
    apiKey: "AIzaSyCBym9WDKVIhCXC3JbgPNvh-JoJlnXrXCk",
    onPlaceSelected: (place) => console.log(place)
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    var temp = '';
    fetch("http://127.0.0.1:8000/geotag", {
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
        return response.json();
      })
      .then((data) => {
        // setDetails(data);
      });
  };
  return (
    <div className="min-h-screen grid lg:grid-cols-2 gap-6 p-7 bg-purple-100 w-screen">
      <div className="bg-white w-full">
      <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold my-6 text-center">
          Geotag Images
        </h1>
        <form onSubmit={handleSubmit} className="text-center">
          <div className="flex flex-col py-2 ">
            <input
              ref={ref}
              onChange={(e) => setCity(e.target.value)}
              className="border border-black-900 p-3 md:mx-10 mx-5 mb-5"
              type="text"
              placeholder="Target Location of Service"
            />
          </div>
          <button
            type="success"
            className="bg-[#00df9a] rounded-md text-lg font-medium mx-auto my-4 p-3 text-white"
          >
            Analyze Website
          </button>
        </form>
      </div>
      <div className="bg-white w-full ">
        <div className=""></div>
      </div>
    </div>
  );
};

export default GeotagView;
