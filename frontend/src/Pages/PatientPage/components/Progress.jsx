import React from "react";
import ProgressCard from "./ui/ProgressCard";
import {
  Activity,
  Award,
  BarChart3,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Edit3,
  Flame,
  Heart,
  MessageCircle,
  Star,
  Zap,
} from "lucide-react";

const Progress = ({
  progressMetrics,
  milestones,
  recentFeedback,
  showPastSessions,
  setShowPastSessions,
  pastTherapies,
}) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <h1 className="text-2xl font-bold text-gray-900">
        My Progress & Milestones
      </h1>

      {/* Progress Metrics */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">Overall Progress</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {progressMetrics.map((metric, index) => (
            <ProgressCard key={index} metric={metric} />
          ))}
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Treatment Milestones
        </h2>
        <ol className="relative border-s border-gray-200 ml-4">
          {milestones.map((milestone, index) => (
            <li key={index} className="mb-8 ms-8">
              <span
                className={`absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white ${
                  milestone.completed
                    ? "bg-emerald-500 text-white"
                    : milestone.current
                    ? "bg-emerald-200 text-emerald-700"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {milestone.completed ? (
                  <CheckCircle2 className="h-4 w-4" />
                ) : (
                  <BarChart3 className="h-4 w-4" />
                )}
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                {milestone.title}
                {milestone.current && (
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ml-3">
                    Current
                  </span>
                )}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                {milestone.date}
              </time>
              <p className="text-base font-normal text-gray-500">
                {milestone.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Recent Feedback */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">Recent Feedback</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentFeedback.map((feedback) => (
            <div
              key={feedback.id}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">{feedback.therapy}</h3>
                <div className="flex items-center text-sm text-yellow-500">
                  {[...Array(feedback.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                  <span className="ml-1 text-gray-500">
                    ({feedback.rating})
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">"{feedback.notes}"</p>
              <div className="text-xs text-gray-500">
                <p>
                  <span className="font-semibold">Practitioner:</span>{" "}
                  {feedback.practitioner}
                </p>
                <p>
                  <span className="font-semibold">Symptoms:</span>{" "}
                  {feedback.symptoms}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Sessions */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Past Sessions</h2>
          <button
            onClick={() => setShowPastSessions(!showPastSessions)}
            className="flex items-center text-emerald-600 font-semibold hover:underline"
          >
            {showPastSessions ? "Hide" : "View"} All
            <ChevronRight
              className={`h-5 w-5 ml-2 transition-transform duration-300 ${
                showPastSessions ? "rotate-90" : ""
              }`}
            />
          </button>
        </div>
        {showPastSessions && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            {pastTherapies.map((therapy) => (
              <div
                key={therapy.id}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {therapy.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {therapy.date} at {therapy.time}
                    </p>
                  </div>
                  <div className="flex items-center text-sm text-yellow-500">
                    {[...Array(therapy.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-xs text-gray-500">
                    <span className="font-semibold">Practitioner:</span>{" "}
                    {therapy.practitioner}
                  </p>
                  <button className="flex items-center text-emerald-600 text-sm font-semibold hover:underline">
                    Leave Feedback <Edit3 className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Progress;
