import { React, useState } from "react";
import Autocomplete from "../components/Autocomplete";
import niches from "../niches";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const MetaGenerator = () => {
  const [niche, setNiche] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [description, setDescription] = useState();
  const [error, setError] = useState("");

  const { details, updateUsage } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    if (niches.includes(niche)) {
      fetch(process.env.REACT_APP_SERVICE_URL + "/description", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          niche: niche,
        }),
      })
        .then((response) => {
          if (response.ok) {
            updateUsage("descriptions");
            return response.json();
          }
        })
        .then((data) => {
          setDescription(data);
        })
        .catch(() => {
          setIsLoading(false);
          setError("Failed to connect to server.");
          console.log(isLoading);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setError("Please select a niche from the list.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen max-w-[1240px] md:mx-auto mx-0 grid gap-6 md:p-7 p-2 text-center">
      <div className="bg-white w-full flex flex-col">
        <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold my-6 ">
          Meta Generator
        </h1>{" "}
        {
          <p className="text-gray-300 font-medium text-xl">
            Usage: {details.services.descriptions.uses} /{" "}
            {details.services.descriptions.limit}
          </p>
        }
        {error ? (
          <div className="border rounded-md border-red-500 bg-red-100 text-red-600 p-3 md:mx-10 mx-5">
            {error}
          </div>
        ) : (
          ""
        )}
        <form onSubmit={handleSubmit} className="text-center">
          <div className="flex flex-col py-2 ">
            <Autocomplete
              isLoading={isLoading}
              setNiche={setNiche}
              suggestions={niches}
              navigate={navigate}
              uses={details.services.descriptions.uses}
              limit={details.services.descriptions.limit}
              text={'Generate Description'}
            />
          </div>
        </form>
        
          <div className="bg-gray-50 border border-b-gray-100 m-4 p-4 rounded-lg md:text-left text-center">
          {description ? (<p className="lg:text-2xl font-bold md:text-md text-xs">
              Description:{" "}
              <span className="text-blue-700 lg:text-2xl md:text-md text-xs">
                {description.description}
              </span>
            </p>
        ) : <p className="lg:text-2xl md:text-md text-xs font-bold ">
        What is this? <span className="text-blue-700">Generate a meta description for a website page based on a niche.</span>
      </p>}
          </div>
      </div>
    </div>
  );
};

export default MetaGenerator;
