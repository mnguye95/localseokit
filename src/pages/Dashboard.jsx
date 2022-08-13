import { React, useState } from "react";
// import { UserAuth } from "../context/AuthContext";
import BlogSuggestions from "../views/BlogSuggestions";
import MetaGenerator from "../views/MetaGenerator";
import SEOAudit from "../views/SEOAudit";
import GeotagView from "../views/GeotagView";
import Settings from "../views/Settings";
import Sidebar from "../components/Sidebar";

const Dashboard = (props) => {
  const [view, setView] = useState(JSON.parse(localStorage.getItem('view')) || props.view || 'Dashboard');

  console.log(view);

  const handleNav = (view) => {
    window.sessionStorage.setItem("view", view);
    switch (view) {
      case "SEO Audit":
        return <SEOAudit />;
      case "Meta Generator":
        return <MetaGenerator />;
      case "Blog Suggestions":
        return <BlogSuggestions />;
      case "Image Local Geotag":
        return <GeotagView />;
      case "Settings":
        return <Settings />;
      default:
        return <SEOAudit />;
    }
  };


  return (
    <div className="flex">
      <Sidebar setView={setView}/>
      {/* Dashboard View */}
      {handleNav(view)}
    </div>
  );
};

export default Dashboard;
