import React from "react";
import StatsCard from "./ui/StatsCard";
import ExerciseCard from "./ui/ExerciseCard";
import {
  Heart,
  Activity,
  Award,
  Bell,
  CheckCircle2,
  ChevronRight,
  Target,
  Trophy,
  Star,
  Calendar,
  AlertCircle,
  Info,
} from "lucide-react";

const Dashboard = ({
  patientData,
  upcomingTherapies,
  dailyExercises,
  completedExercises,
  notifications,
  achievements,
  toggleExerciseComplete,
  getCompletionPercentage,
  getTotalPointsToday,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
      {/* Main Content Area */}
      <div className="md:col-span-2 space-y-8">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 p-8 text-white shadow-lg">
          <div className="absolute top-0 right-0 h-48 w-48 bg-emerald-400/30 rounded-full -mt-16 -mr-16"></div>
          <div className="absolute bottom-0 left-0 h-48 w-48 bg-teal-400/30 rounded-full -mb-16 -ml-16"></div>
          <div className="relative z-10">
            <h1 className="text-3xl font-bold mb-2">
              Welcome back, {patientData.name}!
            </h1>
            <p className="text-lg mb-4">
              Your journey to balance and wellness is on track.
            </p>
            <div className="flex items-center space-x-4 text-sm font-medium">
              <span className="flex items-center px-3 py-1 bg-white/20 rounded-full">
                <Target className="h-4 w-4 mr-2" />
                Plan: {patientData.therapyPlan}
              </span>
              <span className="flex items-center px-3 py-1 bg-white/20 rounded-full">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Completion: {patientData.completionRate}%
              </span>
            </div>
            <div className="mt-6">
              <button className="flex items-center px-6 py-3 bg-white text-emerald-600 rounded-full font-bold shadow-md hover:bg-gray-100 transition-colors">
                View My Plan
                <ChevronRight className="h-5 w-5 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900">Today's Progress</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <StatsCard
              title="Exercises"
              value={`${getCompletionPercentage()}%`}
              description="Completed today"
              icon={Activity}
              color="from-emerald-500 to-teal-500"
              trend="Current Streak: 12 days"
            />
            <StatsCard
              title="Points"
              value={getTotalPointsToday()}
              description="Points earned today"
              icon={Star}
              color="from-amber-500 to-yellow-500"
              trend="Total Points: 1,240"
            />
            <StatsCard
              title="Therapies"
              value={upcomingTherapies.length}
              description="Upcoming sessions"
              icon={Heart}
              color="from-red-500 to-pink-500"
              trend="This week"
            />
            <StatsCard
              title="Badges"
              value={patientData.badges}
              description="Achievements unlocked"
              icon={Award}
              color="from-purple-500 to-indigo-500"
              trend="View all"
            />
          </div>
        </section>

        {/* Upcoming Therapy */}
        <section className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">
              Upcoming Therapy
            </h2>
            <a
              href="#"
              className="text-sm text-emerald-600 font-semibold flex items-center hover:underline"
            >
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
          {upcomingTherapies.slice(0, 1).map((therapy) => (
            <div
              key={therapy.id}
              className="flex items-start space-x-4 p-4 rounded-xl bg-emerald-50"
            >
              <div className="flex-shrink-0 p-3 rounded-full bg-emerald-500 text-white">
                <Calendar className="h-6 w-6" />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-emerald-800">
                  {therapy.name}
                </h3>
                <p className="text-sm text-emerald-700">
                  {therapy.date} at {therapy.time}
                </p>
                <div className="flex items-center text-xs text-emerald-600 mt-2">
                  <Star className="h-4 w-4 mr-1 text-yellow-400 fill-yellow-400" />
                  <span>{therapy.practitioner}</span>
                </div>
              </div>
              <button className="flex-shrink-0 px-4 py-2 text-sm bg-emerald-600 text-white font-medium rounded-full shadow hover:bg-emerald-700 transition-colors">
                View Details
              </button>
            </div>
          ))}
        </section>

        {/* Daily Exercises */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900">Daily Exercises</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dailyExercises.map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                isCompleted={completedExercises.has(exercise.id)}
                onToggle={toggleExerciseComplete}
              />
            ))}
          </div>
        </section>
      </div>

      {/* Sidebar/Right Column */}
      <div className="md:col-span-1 space-y-8">
        {/* Notifications */}
        <section className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Notifications */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-amber-50 to-orange-50">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-amber-500 rounded-lg">
                    <Bell className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      Notifications
                    </h2>
                    <p className="text-xs text-gray-600">
                      {notifications.length} new updates
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
                {notifications.slice(0, 4).map((notification, index) => (
                  <div
                    key={notification.id}
                    className={`flex items-start space-x-3 p-3 rounded-xl border transition-all duration-300 hover:shadow-md ${
                      notification.type === "reminder" && notification.urgent
                        ? "bg-red-50 border-red-200"
                        : notification.type === "success"
                        ? "bg-green-50 border-green-200"
                        : notification.type === "exercise"
                        ? "bg-blue-50 border-blue-200"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div
                      className={`p-1 rounded-full ${
                        notification.type === "reminder" && notification.urgent
                          ? "bg-red-500"
                          : notification.type === "success"
                          ? "bg-green-500"
                          : notification.type === "exercise"
                          ? "bg-blue-500"
                          : "bg-gray-500"
                      }`}
                    >
                      {notification.type === "success" ? (
                        <CheckCircle2 className="h-3 w-3 text-white" />
                      ) : notification.type === "reminder" ? (
                        <AlertCircle className="h-3 w-3 text-white" />
                      ) : notification.type === "exercise" ? (
                        <Activity className="h-3 w-3 text-white" />
                      ) : (
                        <Info className="h-3 w-3 text-white" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        {notification.title}
                      </p>
                      <p className="text-xs text-gray-600 mb-1">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-400">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">My Achievements</h2>
            <a
              href="#"
              className="text-sm text-emerald-600 font-semibold flex items-center hover:underline"
            >
              View All
            </a>
          </div>
          <div className="space-y-4">
            {achievements.map((badge) => (
              <div
                key={badge.id}
                className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 transition-all duration-300 hover:bg-gray-100"
              >
                <div
                  className={`p-3 rounded-full ${
                    badge.unlocked
                      ? `bg-gradient-to-br ${badge.color}`
                      : "bg-gray-200"
                  }`}
                >
                  <badge.icon
                    className={`h-6 w-6 ${
                      badge.unlocked ? "text-white" : "text-gray-500"
                    }`}
                  />
                </div>
                <div className="flex-grow">
                  <h3
                    className={`font-semibold ${
                      badge.unlocked ? "text-gray-900" : "text-gray-500"
                    }`}
                  >
                    {badge.name}
                  </h3>
                  <p className="text-sm text-gray-600">{badge.description}</p>
                </div>
                {badge.unlocked ? (
                  <CheckCircle2 className="h-6 w-6 text-emerald-500" />
                ) : (
                  <div className="text-xs text-gray-500 text-right">
                    <p className="font-medium">{`${badge.progress}/${badge.target}`}</p>
                    <p>days</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
