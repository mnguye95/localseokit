import { React, useState } from "react";
// import { UserAuth } from "../context/AuthContext";
import Logo from "../assets/images/icon-transparent.png";
import AiBlogView from "../views/AiBlogView";
import DashboardView from "../views/DashboardView";
import DescriptionView from "../views/DescriptionView";
import SEOAuditView from "../views/SEOAuditView";
import GeotagView from "../views/GeotagView";
import FilesView from "../views/FilesView";
import SettingsView from "../views/SettingsView";
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = (props) => {
  const [open, setOpen] = useState(true);
  const [view, setView] = useState(props.view);
  const { logOut } = UserAuth();
  const navigate = useNavigate();

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

  const handlelogOut = async () => {
    try {
      await logOut();
      navigate('/')
    } catch (error) {
      console.log(error.message);
    }
  }

  const menus = [
    {
      title: "SEO Audit",
      src: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 min-w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
    },
    {
      title: "Meta & Schema",
      src: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 min-w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
          />
        </svg>
      ),
    },
    {
      title: "AI Blog Suggest",
      src: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 min-w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      ),
      gap: false,
    },
    {
      title: "Image Local Geotag",
      src: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 min-w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: "Files",
      src: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 min-w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
          />
        </svg>
      ),
      gap: true,
    },
    {
      title: "Settings",
      src: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 min-w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: "Log Out",
      src: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 min-w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
      ),
      gap: true,
    },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          !open ? "w-20" : "w-72"
        } duration-500 p-2 pt-8 h-screen bg-gray-800 relative`}
      >
        {/* Sidebar Button */}
        <svg
          onClick={() => setOpen(!open)}
          className={`${
            !open && "rotate-180"
          } h-6 w-6  absolute cursor-pointer -right-3 top-9 border-2 text-gray-800 border-gray-800 rounded-full bg-white`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        <div className="flex gap-x-4 items-center">
          {/* Logo Image */}
          <img
            src={Logo}
            alt="/"
            className={`w-8 h-full ml-4 cursor-pointer duration-500 ${
              !open && "rotate-[-360deg]"
            }`}
          />
          {/* Logo Text */}
          <p
            className={`text-3xl font-medium text-[#00df9a] origin-left duration-500 ${
              !open && "scale-0"
            }`}
          >
            LocalSEOKit.
          </p>
        </div>
        {/* Nav Menu */}
        <ul className="pt-6">
          {/* Nav Items */}
          {menus.map((menu, index) => (
            <li
              className={`
                ${!open && "justify-center"}
                ${view === menu.title && "bg-gray-700"}
              text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-3 mb-5 rounded-md hover:bg-gray-700 ${
                menu.gap ? "mt-9" : "mt-2"
              }`}
              key={index}
              onClick={() => {
                menu.title === 'Log Out' ? handlelogOut() : setView(menu.title)
              }}
            >
              <div>{menu.src}</div>
              <span
                className={`text-lg font-medium origin-left duration-300
                ${!open && "hidden"}`}
              >
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/* Dashboard View */}
      <div className="min-h-screen flex p-7 bg-purple-500">{handleNav(view)}</div>
    </div>
  );
};

export default Dashboard;
