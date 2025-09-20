import React from "react";
import { CheckCircle2, Clock, Zap, Flame } from "lucide-react";

const ExerciseCard = ({ exercise, isCompleted, onToggle }) => {
  return (
    <div
      className={`bg-white rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${
        isCompleted
          ? "border-emerald-200 bg-emerald-50/50"
          : "border-gray-100 hover:border-emerald-200"
      }`}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div
              className={`p-3 rounded-xl transition-all duration-300 ${
                isCompleted ? "bg-emerald-500 scale-110" : "bg-gray-100"
              }`}
            >
              <exercise.icon
                className={`h-6 w-6 ${
                  isCompleted ? "text-white" : "text-gray-600"
                }`}
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{exercise.name}</h3>
              <p className="text-sm text-gray-600 mb-1">
                {exercise.description}
              </p>
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <span className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {exercise.duration}
                </span>
                <span className="flex items-center">
                  <Zap className="h-3 w-3 mr-1" />
                  {exercise.points} pts
                </span>
                {exercise.streak > 0 && (
                  <span className="flex items-center text-orange-600">
                    <Flame className="h-3 w-3 mr-1" />
                    {exercise.streak} day streak
                  </span>
                )}
              </div>
            </div>
          </div>
          <button
            onClick={() => onToggle(exercise.id)}
            className={`relative w-6 h-6 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
              isCompleted
                ? "bg-emerald-500 border-emerald-500 scale-110"
                : "border-gray-300 hover:border-emerald-400"
            }`}
          >
            {isCompleted && (
              <CheckCircle2 className="h-4 w-4 text-white animate-bounce" />
            )}
          </button>
        </div>
        {isCompleted && (
          <div className="bg-emerald-100 border border-emerald-200 rounded-lg p-3 animate-fade-in">
            <p className="text-sm text-emerald-700 font-medium flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              Completed! +{exercise.points} points earned
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExerciseCard;
