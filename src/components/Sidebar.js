import React, { useState } from "react";
import { logo } from "../utils/images";
import { NavLink } from "react-router-dom";
import HamburgerSvg from "../utils/images/svg/HamburgerSvg";
import {
  ChartBarIcon,
  ShoppingCartIcon,
  ShoppingBagIcon,
  PresentationChartLineIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline"; // Import required icons
import { ChartPieIcon } from "@heroicons/react/24/solid";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Menu items with icons
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <ChartPieIcon className="h-6 w-6" />,
    },
    {
      name: "Leaderboard",
      path: "/leaderboard",
      icon: <ChartBarIcon className="h-6 w-6" />,
    },
    {
      name: "Order",
      path: "/order",
      icon: <ShoppingCartIcon className="h-6 w-6" />,
    },
    {
      name: "Products",
      path: "/products",
      icon: <ShoppingBagIcon className="h-6 w-6" />,
    },
    {
      name: "Sales Report",
      path: "/salesreport",
      icon: <PresentationChartLineIcon className="h-6 w-6" />,
    },
    {
      name: "Messages",
      path: "/messages",
      icon: <ChatBubbleLeftEllipsisIcon className="h-6 w-6" />,
    },
    {
      name: "Settings",
      path: "/setting",
      icon: <Cog6ToothIcon className="h-6 w-6" />,
    },
    {
      name: "Sign Out",
      path: "/",
      icon: <ArrowRightStartOnRectangleIcon className="h-6 w-6" />,
    },
  ];

  return (
    <>
      {/* Hamburger Menu Button (Visible on small screens) */}
      <button
        className="fixed top-4 left-4 p-2 bg-[#1559ED] text-white rounded-lg md:hidden z-50"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <HamburgerSvg />
      </button>

      {/* Sidebar (Visible on large screens or when toggled on small screens) */}
      <aside
        className={`bg-white w-[345px] md:w-[345px] sm:w-[280px] min-h-screen font-poppins fixed md:relative transform transition-transform duration-300 ease-in-out z-40 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="flex mb-8 mt-8 justify-center">
          <img src={logo} alt="SysPay Logo" className="w-33" />
        </div>

        {/* Menu Items */}
        <nav>
          <ul className="space-y-4 p-6">
            {menuItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center p-4 rounded-2xl text-[16px] sm:text-[14px] md:text-[18px] leading-[27px] ${
                      isActive
                        ? "bg-[#1559ED] text-white font-semibold" // Active style
                        : "text-[#737791] font-normal" // Inactive style
                    }`
                  }
                  style={{
                    padding: "12px 20px", // Adjusted padding for small screens
                    borderRadius: "16px",
                  }}
                  onClick={() => setIsSidebarOpen(false)} // Close sidebar on small screens when a menu item is clicked
                >
                  {/* Icon on the left side */}
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Overlay for small screens (Visible when sidebar is open) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)} // Close sidebar when overlay is clicked
        />
      )}
    </>
  );
};

export default Sidebar;
