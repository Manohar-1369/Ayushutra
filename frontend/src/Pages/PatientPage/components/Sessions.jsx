import React from "react";
import {
  Calendar,
  Clock,
  ChevronRight,
  User,
  Star,
  MapPin,Heart,AlertCircle,CheckCircle2,Info,Phone,Mail,Edit3
} from "lucide-react";

const Sessions = ({
  selectedTherapy,
  selectedDoctor,
  showCalendar,
  calendarData,
  selectedDate,
  selectedTimeSlot,
  handleDateSelect,
  handleTimeSlotSelect,
  confirmBooking,
  setShowCalendar,
  setShowPastSessions,
  showPastSessions,upcomingTherapies,pastTherapies
}) => {
  const renderSchedule = () => (
    <div className="space-y-8">
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Therapy Sessions</h2>
          <div className="flex bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => setShowPastSessions(false)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                !showPastSessions
                  ? "bg-white text-emerald-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Upcoming Sessions
            </button>
            <button
              onClick={() => setShowPastSessions(true)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                showPastSessions
                  ? "bg-white text-emerald-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Past Sessions
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {(showPastSessions ? pastTherapies : upcomingTherapies).map(
            (therapy, index) => (
              <div
                key={therapy.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                          showPastSessions
                            ? "bg-gradient-to-br from-gray-400 to-gray-500"
                            : "bg-gradient-to-br from-emerald-500 to-teal-500"
                        }`}
                      >
                        <Heart className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {therapy.name}
                        </h3>
                        <p className="text-gray-600">
                          with {therapy.practitioner}
                        </p>
                        <p className="text-sm text-gray-500 flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {therapy.location}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">
                        {therapy.time}
                      </p>
                      <p className="text-gray-600">{therapy.date}</p>
                      <span
                        className={`inline-flex px-3 py-1 text-sm font-medium rounded-full mt-2 ${
                          therapy.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : therapy.status === "confirmed"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {therapy.status}
                      </span>
                      {showPastSessions && therapy.rating && (
                        <div className="flex items-center mt-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < therapy.rating
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {showPastSessions && therapy.notes && (
                    <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                      <h4 className="font-semibold text-blue-800 mb-2">
                        Session Notes
                      </h4>
                      <p className="text-sm text-blue-700">{therapy.notes}</p>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                      <h4 className="font-semibold text-amber-800 mb-3 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-2" />
                        {showPastSessions
                          ? "Pre-Treatment Instructions"
                          : "Pre-Treatment Preparation"}
                      </h4>
                      <ul className="space-y-2">
                        {therapy.precautions.pre.map((precaution, pIndex) => (
                          <li
                            key={pIndex}
                            className="text-sm text-amber-700 flex items-start"
                          >
                            <CheckCircle2 className="h-3 w-3 mr-2 mt-0.5 text-amber-600 flex-shrink-0" />
                            {precaution}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                      <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                        <Info className="h-4 w-4 mr-2" />
                        {showPastSessions
                          ? "Post-Treatment Instructions"
                          : "Post-Treatment Care"}
                      </h4>
                      <ul className="space-y-2">
                        {therapy.precautions.post.map((precaution, pIndex) => (
                          <li
                            key={pIndex}
                            className="text-sm text-green-700 flex items-start"
                          >
                            <CheckCircle2 className="h-3 w-3 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                            {precaution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {therapy.duration}
                      </span>
                    </div>
                    {!showPastSessions ? (
                      <div className="flex space-x-3">
                        <button className="text-gray-600 hover:text-gray-800 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Phone className="h-4 w-4" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-800 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Mail className="h-4 w-4" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-800 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Edit3 className="h-4 w-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Session Rating</p>
                        <p className="text-lg font-bold text-gray-900">
                          {therapy.rating}/5
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );

  const renderInitialView = () => (
    <div className="text-center py-20 animate-fade-in">
      <div className="mx-auto w-24 h-24 text-gray-300 mb-4">
        <Calendar className="h-full w-full" />
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Book a Therapy Session
      </h1>
      <p className="text-lg text-gray-600 max-w-md mx-auto">
        Your schedule looks clear. Find a therapy that suits your needs and book
        a session to get started.
      </p>
    </div>
  );

  return (
    <div className="space-y-8">
      { renderSchedule()}
    </div>
  );
};

export default Sessions;
