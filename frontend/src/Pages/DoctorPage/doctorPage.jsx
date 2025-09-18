import React from "react";
import {
  Users,
  Calendar,
  Activity,
  TrendingUp,
  Clock,
  Heart,
  Leaf,
  AlertCircle,
  CheckCircle2,
  Bell,
  Star,
  ArrowUp,
  ChevronRight,
  Search,
  Filter,
  MoreVertical,
  Sparkles,
} from "lucide-react";

const Dashboard = () => {
  const upcomingAppointments = [
    {
      id: 1,
      patient: "Priya Sharma",
      therapy: "Abhyanga",
      time: "10:00 AM",
      status: "confirmed",
      duration: "90 min",
    },
    {
      id: 2,
      patient: "Rajesh Kumar",
      therapy: "Shirodhara",
      time: "11:30 AM",
      status: "pending",
      duration: "60 min",
    },
    {
      id: 3,
      patient: "Meera Patel",
      therapy: "Panchakarma",
      time: "2:00 PM",
      status: "confirmed",
      duration: "120 min",
    },
  ];

  const recentFeedback = [
    {
      id: 1,
      patient: "Anjali Gupta",
      rating: 5,
      therapy: "Abhyanga",
      comment: "Excellent treatment, feeling much better",
      time: "2 hours ago",
    },
    {
      id: 2,
      patient: "Vikram Singh",
      rating: 4,
      therapy: "Udvartana",
      comment: "Very relaxing session",
      time: "5 hours ago",
    },
  ];

  const notifications = [
    {
      id: 1,
      type: "success",
      title: "Treatment Complete",
      message: "Priya completed Abhyanga session",
      time: "10 min ago",
    },
    {
      id: 2,
      type: "warning",
      title: "Pre-care Reminder",
      message: "Send fasting guidelines to Rajesh",
      time: "25 min ago",
    },
    {
      id: 3,
      type: "info",
      title: "New Booking",
      message: "Appointment request from Maya Iyer",
      time: "1 hour ago",
    },
  ];

  const statsData = [
    {
      title: "Total Patients",
      value: "142",
      description: "Active in treatment",
      icon: Users,
      trend: { value: 12, label: "from last month", positive: true },
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Today's Sessions",
      value: "8",
      description: "Scheduled treatments",
      icon: Calendar,
      trend: { value: 5, label: "more than yesterday", positive: true },
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Completion Rate",
      value: "96%",
      description: "Treatment success rate",
      icon: TrendingUp,
      trend: { value: 2, label: "improvement", positive: true },
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Avg. Session Duration",
      value: "85min",
      description: "Per treatment session",
      icon: Clock,
      color: "from-amber-500 to-orange-500",
    },
  ];

  const StatsCard = ({
    title,
    value,
    description,
    icon: Icon,
    trend,
    color,
  }) => (
    <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div
        className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300"
        style={{
          backgroundImage: `linear-gradient(to bottom right, ${
            color.split(" ")[1]
          }, ${color.split(" ")[3]})`,
        }}
      />

      <div className="relative p-6">
        <div className="flex items-center justify-between mb-4">
          <div
            className={`p-3 rounded-xl bg-gradient-to-br ${color} shadow-lg`}
          >
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <MoreVertical className="h-4 w-4 text-gray-400" />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-600">{title}</h3>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          <p className="text-xs text-gray-500">{description}</p>

          {trend && (
            <div className="flex items-center mt-3">
              <div
                className={`flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  trend.positive
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                <ArrowUp
                  className={`h-3 w-3 mr-1 ${
                    trend.positive
                      ? "text-green-600"
                      : "text-red-600 rotate-180"
                  }`}
                />
                {trend.value}% {trend.label}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const Progress = ({ value, className = "" }) => (
    <div
      className={`w-full bg-gray-200 rounded-full h-2 overflow-hidden ${className}`}
    >
      <div
        className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-1000 ease-out rounded-full"
        style={{ width: `${value}%` }}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    AyurWellness
                  </h1>
                  <p className="text-xs text-gray-500">Practitioner Portal</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search patients..."
                  className="pl-10 pr-4 py-2 w-64 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
              </div>

              <button className="relative p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse" />
              </button>

              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    Dr. Ayesha Sharma
                  </p>
                  <p className="text-xs text-gray-500">
                    Ayurvedic Practitioner
                  </p>
                </div>
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                  <span className="text-white font-medium text-sm">AS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-2">
            <h1 className="text-4xl font-bold text-gray-900">
              Good morning, Dr. Sharma
            </h1>
            <Sparkles className="h-6 w-6 text-amber-500 animate-pulse" />
          </div>
          <p className="text-gray-600 text-lg">
            Here's your wellness practice overview for today
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {statsData.map((stat, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-fade-in"
            >
              <StatsCard {...stat} />
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Today's Schedule */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-emerald-50 to-teal-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-emerald-500 rounded-lg">
                      <Calendar className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">
                        Today's Schedule
                      </h2>
                      <p className="text-sm text-gray-600">
                        Upcoming therapy sessions
                      </p>
                    </div>
                  </div>
                  <Filter className="h-4 w-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                </div>
              </div>

              <div className="p-6 space-y-4">
                {upcomingAppointments.map((appointment, index) => (
                  <div
                    key={appointment.id}
                    className="group flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-emerald-200 hover:bg-emerald-50/50 transition-all duration-300 cursor-pointer"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg">
                          <Heart className="h-6 w-6 text-white" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center border-2 border-gray-100">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              appointment.status === "confirmed"
                                ? "bg-green-500"
                                : "bg-amber-500"
                            }`}
                          />
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {appointment.patient}
                        </p>
                        <p className="text-sm text-gray-600">
                          {appointment.therapy}
                        </p>
                        <p className="text-xs text-gray-400">
                          {appointment.duration}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">
                          {appointment.time}
                        </p>
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                            appointment.status === "confirmed"
                              ? "bg-green-100 text-green-800"
                              : "bg-amber-100 text-amber-800"
                          }`}
                        >
                          {appointment.status}
                        </span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-emerald-500 transition-colors" />
                    </div>
                  </div>
                ))}

                <button className="w-full p-4 border-2 border-dashed border-gray-200 rounded-xl text-gray-600 hover:border-emerald-300 hover:text-emerald-600 hover:bg-emerald-50/50 transition-all duration-300 group">
                  <div className="flex items-center justify-center space-x-2">
                    <Calendar className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">View Full Schedule</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

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

              <div className="p-6 space-y-4">
                {notifications.slice(0, 3).map((notification, index) => (
                  <div
                    key={notification.id}
                    className={`flex items-start space-x-3 p-3 rounded-xl border transition-all duration-300 hover:shadow-md ${
                      notification.type === "success"
                        ? "bg-green-50 border-green-200"
                        : notification.type === "warning"
                        ? "bg-amber-50 border-amber-200"
                        : "bg-blue-50 border-blue-200"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div
                      className={`p-1 rounded-full ${
                        notification.type === "success"
                          ? "bg-green-500"
                          : notification.type === "warning"
                          ? "bg-amber-500"
                          : "bg-blue-500"
                      }`}
                    >
                      {notification.type === "success" ? (
                        <CheckCircle2 className="h-3 w-3 text-white" />
                      ) : notification.type === "warning" ? (
                        <AlertCircle className="h-3 w-3 text-white" />
                      ) : (
                        <Bell className="h-3 w-3 text-white" />
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

                <button className="w-full py-2 text-sm text-emerald-600 hover:text-emerald-700 font-medium transition-colors">
                  View All Notifications
                </button>
              </div>
            </div>

            {/* Wellness Insights */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-cyan-50">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-500 rounded-lg">
                    <Activity className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      Wellness Insights
                    </h2>
                    <p className="text-xs text-gray-600">Performance metrics</p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {[
                  {
                    label: "Patient Satisfaction",
                    value: 94,
                    color: "from-green-500 to-emerald-500",
                  },
                  {
                    label: "Treatment Adherence",
                    value: 88,
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    label: "Recovery Progress",
                    value: 76,
                    color: "from-purple-500 to-indigo-500",
                  },
                ].map((metric, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">
                        {metric.label}
                      </span>
                      <span className="text-sm font-bold text-gray-900">
                        {metric.value}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${metric.color} transition-all duration-1000 ease-out rounded-full`}
                        style={{
                          width: `${metric.value}%`,
                          animationDelay: `${index * 200}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Feedback */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-emerald-50 to-teal-50">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-emerald-500 rounded-lg">
                    <Leaf className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      Recent Feedback
                    </h2>
                    <p className="text-xs text-gray-600">Patient reviews</p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {recentFeedback.map((feedback, index) => (
                  <div
                    key={feedback.id}
                    className="border-b border-gray-100 last:border-0 pb-4 last:pb-0 hover:bg-gray-50 p-2 rounded-lg transition-colors"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold text-sm text-gray-900">
                        {feedback.patient}
                      </p>
                      <div className="flex space-x-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < feedback.rating
                                ? "text-amber-400 fill-amber-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-emerald-600 font-medium mb-1">
                      {feedback.therapy}
                    </p>
                    <p className="text-xs text-gray-600 mb-2">
                      "{feedback.comment}"
                    </p>
                    <p className="text-xs text-gray-400">{feedback.time}</p>
                  </div>
                ))}

                <button className="w-full py-2 text-sm text-emerald-600 hover:text-emerald-700 font-medium transition-colors">
                  View All Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
