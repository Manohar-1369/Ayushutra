import React from "react";
import { TrendingUp } from "lucide-react";

const StatsCard = ({ title, value, description, icon: Icon, trend, color }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div className="relative p-6">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl bg-gradient-to-br ${color} shadow-lg`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
        <p className="text-xs text-gray-500">{description}</p>
        {trend && (
          <div className="flex items-center mt-3">
            <div className="flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
              <TrendingUp className="h-3 w-3 mr-1 text-green-600" />
              {trend}
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default StatsCard;
