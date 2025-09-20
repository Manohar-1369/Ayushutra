import React from "react";
import ExerciseCard from "./ui/ExerciseCard";
import {
  CheckCircle2,
  Award,
  Zap,
  Brain,
  Sun,
  Wind,
  Leaf,
  Activity,
} from "lucide-react";

const Exercises = ({
  dailyExercises,
  completedExercises,
  toggleExerciseComplete,
}) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">
          Daily Wellness Rituals
        </h1>
        <button className="flex items-center text-emerald-600 font-semibold hover:underline">
          View all exercises <CheckCircle2 className="h-5 w-5 ml-2" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dailyExercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            isCompleted={completedExercises.has(exercise.id)}
            onToggle={toggleExerciseComplete}
          />
        ))}
      </div>
    </div>
  );
};

export default Exercises;
