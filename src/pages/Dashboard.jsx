import { React, useState } from "react";
// import { UserAuth } from "../context/AuthContext";
import BlogSuggestions from "../views/BlogSuggestions";
import DashboardView from "../views/DashboardView";
import MetaGenerator from "../views/MetaGenerator";
import SEOAudit from "../views/SEOAudit";
import GeotagView from "../views/GeotagView";
import FilesView from "../views/FilesView";
import Settings from "../views/Settings";
import Sidebar from "../components/Sidebar";

const Dashboard = (props) => {
  const [view, setView] = useState(props.view);

  const handleNav = (view) => {
    switch (view) {
      case "SEO Audit":
        return <SEOAudit />;
      case "Meta Generator":
        return <MetaGenerator />;
      case "Blog Suggestions":
        return <BlogSuggestions />;
      case "Image Local Geotag":
        return <GeotagView />;
      case "Files":
        return <FilesView />;
      case "Settings":
        return <Settings />;
      default:
        return <DashboardView />;
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
