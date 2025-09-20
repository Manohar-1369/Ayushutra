import React from "react";
import { Home, Heart, Activity, BarChart3, Calendar, Search } from "lucide-react";

const Navigation = ({ selectedTab, setSelectedTab }) => {
  const tabs = [
    { name: "Dashboard", icon: Home, key: "dashboard" },
    { name: "Therapies", icon: Search, key: "therapies" },

    { name: "Progress", icon: BarChart3, key: "progress" },
    { name: "Sessions", icon: Calendar, key: "sessions" },
    { name: "Exercises", icon: Activity, key: "exercises" },
  ];

  return (
    <nav className="mb-8">
      <ul className="flex justify-between items-center bg-white p-2 rounded-full shadow-lg border border-gray-100">
        {tabs.map((tab) => (
          <li key={tab.key} className="flex-1">
            <button
              onClick={() => setSelectedTab(tab.key)}
              className={`w-full flex items-center justify-center p-3 rounded-full transition-all duration-300 ${
                selectedTab === tab.key
                  ? "bg-emerald-500 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <tab.icon className="h-5 w-5 mr-2" />
              <span className="font-semibold">{tab.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
