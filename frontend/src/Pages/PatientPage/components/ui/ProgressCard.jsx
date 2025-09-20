import React from "react";

const ProgressCard = ({ metric }) => (
  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-3">
        <div className={`p-3 rounded-xl bg-gradient-to-br ${metric.color}`}>
          <metric.icon className="h-5 w-5 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{metric.label}</h3>
          <p className="text-sm text-emerald-600 font-medium">
            {metric.improvement}
          </p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-2xl font-bold text-gray-900">
          {metric.current}
          {metric.unit}
        </p>
      </div>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
      <div
        className={`h-full bg-gradient-to-r ${metric.color} transition-all duration-1000 ease-out rounded-full`}
        style={{
          width: `${
            metric.inverse
              ? 100 - metric.current
              : (metric.current / metric.target) * 100
          }%`,
        }}
      />
    </div>
  </div>
);

export default ProgressCard;
