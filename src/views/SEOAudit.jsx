import { React, useState } from "react";
import SubmitButton from "../components/SubmitButton";
import { UserAuth } from "../context/AuthContext";

const SEOAuditView = () => {
  const [url, setUrl] = useState("");
  const [report, setReport] = useState();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { details, updateUsage, navigate } = UserAuth();

  const handleUrl = (url) => {
    setUrl(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    var temp = url;
    if (url.indexOf("http://") !== 0 && url.indexOf("https://") !== 0) {
      temp = "https://" + url;
    }
    
    fetch(process.env.REACT_APP_SERVICE_URL + "/audit", {
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
          updateUsage("audit");
        }
        return response.json();
      })
      .then((data) => {
        setReport(data);
      })
      .catch((error) => {
        console.log(error);
        setError("Something went wrong. Please try again later.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="min-h-screen max-w-[1240px] md:mx-auto mx-0 grid gap-6 md:p-7 p-2 text-center">
      <div className="bg-white w-full flex flex-col">
        <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold my-6 ">
          SEO Audit
        </h1>{" "}
        {
          <p className="text-gray-300 font-medium text-xl">
            Usage: {details.services.audit.uses} /{" "}
            {details.services.audit.limit}
          </p>
        }
        {error ? (
          <div className="border rounded-md border-red-500 bg-red-100 text-red-600 p-3">
            {error}
          </div>
        ) : (
          ""
        )}
        <form onSubmit={handleSubmit} className="text-center">
          <div className="flex flex-col py-2 ">
            <input
              onChange={(e) => handleUrl(e.target.value)}
              className="border border-black-900 p-3"
              type="text"
              placeholder="Website URL"
            />
          </div>
          <SubmitButton
            uses={details.services.audit.uses}
            limit={details.services.audit.limit}
            isLoading={isLoading}
            navigate={navigate}
            text={"Audit Website"}
          />
        </form>
        <div className="bg-gray-50 border border-b-gray-100 m-4 p-4 rounded-lg md:text-left text-center">
          {report ? (
            <>
              <p className="lg:text-2xl md:text-md text-xs font-bold ">
                Title: <span className="text-blue-700">{report.title}</span>
              </p>
              <p className="lg:text-2xl md:text-md text-xs font-bold my-6">
                Description:{" "}
                <span className="text-blue-700">{report.description}</span>
              </p>
              {report.error_count > 0 ? (
                <p className="lg:text-2xl md:text-md text-xs font-bold my-6">
                  Errors:{" "}
                  <span className="text-red-400">{report.error_count}</span>
                </p>
              ) : (
                ""
              )}
              <ul>
                {Object.keys(report.warnings).map((warning) => (
                  <li className="pb-2" key={warning}>
                    <div>
                      <p className="text-black-400 lg:text-xl md:text-md text-xs py-4 ">
                        {`(${report.warnings[warning].count})`} {warning}
                      </p>
                      {report.warnings[warning].result.length > 0 && (
                        <textarea
                          className="block p-2.5 w-full md:text-md text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          name={warning}
                          id=""
                          rows="4"
                          readOnly
                          value={report.warnings[warning].result
                            .map((err) => err)
                            .join("\n")}
                        />
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </>
          ) :  <p className="lg:text-2xl md:text-md text-xs font-bold ">
          What is this? <span className="text-blue-700">This is an website audit tool to check the SEO health of a given URL.</span>
        </p>}
        </div>
      </div>
    </div>
  );
};

export default SEOAuditView;
