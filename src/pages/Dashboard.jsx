import { React, useState } from "react";
// import { UserAuth } from "../context/AuthContext";
import AiBlogView from "../views/AiBlogView";
import DashboardView from "../views/DashboardView";
import DescriptionView from "../views/DescriptionView";
import SEOAuditView from "../views/SEOAuditView";
import GeotagView from "../views/GeotagView";
import FilesView from "../views/FilesView";
import SettingsView from "../views/SettingsView";
import Sidebar from "../components/Sidebar";

const Dashboard = (props) => {
  const [view, setView] = useState(props.view);

  const handleNav = (view) => {
    switch (view) {
      case "SEO Audit":
        return <SEOAuditView />;
      case "Meta & Schema":
        return <DescriptionView />;
      case "AI Blog Suggest":
        return <AiBlogView />;
      case "Image Local Geotag":
        return <GeotagView />;
      case "Files":
        return <FilesView />;
      case "Settings":
        return <SettingsView />;
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
