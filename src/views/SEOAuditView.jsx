import { React, useState } from "react";

const SEOAuditView = () => {
  const [url, setUrl] = useState("");
  const [details, setDetails] = useState();

  const handleUrl = (url) => {
    setUrl(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var temp = url;
    if (url.indexOf("http://") !== 0 && url.indexOf("https://") !== 0) {
      temp = "https://" + url;
    }
    fetch("http://127.0.0.1:8000/audit", {
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
        setDetails(data);
      });
  };

  return (
    <div className="min-h-screen grid gap-6 p-7 w-screen overflow-auto">
      <div className="bg-white w-full flex flex-col">
        <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold my-6 text-center">
          SEO Audit
        </h1>
        <form onSubmit={handleSubmit} className="text-center">
          <div className="flex flex-col py-2 ">
            <input
              onChange={(e) => handleUrl(e.target.value)}
              className="border border-black-900 p-3 md:mx-10 mx-5"
              type="text"
              placeholder="Website URL"
            />
          </div>
          <button
            type="success"
            className="bg-[#00df9a] rounded-md text-lg font-medium mx-auto my-4 p-3 text-white"
          >
            Analyze Website
          </button>
        </form>
        {details ? (
          <div className="bg-cyan-100 m-4 p-4 rounded-lg md:text-left text-center">
            <p className="lg:text-2xl text-xl font-bold">
              Title:{" "}
              <span className="text-blue-700 lg:text-2xl text-md">
                {details.title}
              </span>
            </p>
            <p className="lg:text-2xl text-xl font-bold my-6">
              Description:{" "}
              <span className="text-blue-700 lg:text-2xl text-md">
                {details.description}
              </span>
            </p>
            {details.error_count > 0 ? <p className="lg:text-2xl text-xl font-bold my-6">
              Errors:{" "}
              <span className="text-red-400 lg:text-2xl text-md">
                {details.error_count}
              </span>
            </p> : ''}
            <p>{}</p>
            <ul>
              {Object.keys(details.warnings).map((warning) => (
                <li className="pb-2" key={warning}>
                <div>
                  <p className="text-black-400 lg:text-xl text-sm py-4">{`(${details.warnings[warning].count})`} {warning}</p>
                  <textarea className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name={warning} id="" rows="7" value={details.warnings[warning].result.map((err) => (
                    err
                  )).join('\n')}/>
                </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SEOAuditView;
