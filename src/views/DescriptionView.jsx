import {React, useState} from "react";
import { usePlacesWidget } from "react-google-autocomplete";

const DescriptionView = () => {
  const [niche, setNiche] = useState('');

  // const handleUrl = (url) => {
  //   setUrl(url);
  // };
  const handleNiche = (niche) => {
    setNiche(niche);
  };

  const { ref } = usePlacesWidget({
    apiKey: "AIzaSyCBym9WDKVIhCXC3JbgPNvh-JoJlnXrXCk",
    onPlaceSelected: (place) => console.log(place)
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    // var temp = url;
    // if (url.indexOf("http://") !== 0 && url.indexOf("https://") !== 0) {
    //   temp = "https://" + url;
    // }
    // fetch("http://127.0.0.1:8000/audit", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     url: temp,
    //   }),
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setDetails(data);
    //   });
  };

  return (
    <div className="min-h-screen grid gap-6 p-7 w-screen overflow-auto">
      <div className="bg-white w-full flex flex-col">
        <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold my-6 text-center">
          Meta Suggestions
        </h1>
        <form onSubmit={handleSubmit} className="text-center">
          <div className="flex flex-col py-2 ">
            <input
              ref={ref}
              onChange={(e) => ''}
              className="border border-black-900 p-3 md:mx-10 mx-5 mb-5"
              type="text"
              placeholder="Target Location of Service"
            />
            <select
              onChange={handleNiche}
              value={niche}
              className="border border-black-900 p-3 md:mx-10 mx-5 mb-5"
              type="text"
            >
              <option value="select">Select</option>
              <option value="s">s</option>
            </select>
          </div>
          <button
            type="success"
            className="bg-[#00df9a] rounded-md text-lg font-medium mx-auto my-4 p-3 text-white"
          >
            Analyze Website
          </button>
        </form>
      </div>
    </div>
  );
};

export default DescriptionView;
