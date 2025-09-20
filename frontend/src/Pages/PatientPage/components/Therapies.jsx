import React from "react";
import {
  Search,
  Filter,
  Star,
  ChevronRight,
  User,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Mail,
  Edit3,
  CheckCircle2,
  Leaf,X,ArrowRight
} from "lucide-react";


const Therapies = ({
  diseaseSymptoms,
  filteredTherapies,
  selectedSymptoms,
  searchTerm,
  selectedTherapy,
  setSelectedTherapy,
  setSearchTerm,
  toggleSymptom,
  getTherapyDoctors,
  handleBooking,
  showCalendar,
  setShowCalendar,selectedDoctor,calendarData,handleDateSelect,selectedDate,handleTimeSlotSelect,selectedTimeSlot,confirmBooking,setSelectedSymptoms
}) => {
    const renderTherapies = () => (
      <div className="space-y-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Find Your Perfect Therapy</h1>
          <p className="text-emerald-100 text-lg">
            Discover personalized Ayurvedic treatments for your wellness journey
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search therapies by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 text-lg border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Symptom Filters */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Filter by Symptoms
                </h3>
                <button
                  onClick={() => setSelectedSymptoms([])}
                  className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Clear All
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {diseaseSymptoms.map((symptom) => (
                  <label
                    key={symptom}
                    className={`flex items-center space-x-2 p-3 rounded-lg border cursor-pointer transition-all duration-300 ${
                      selectedSymptoms.includes(symptom)
                        ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                        : "border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/50"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedSymptoms.includes(symptom)}
                      onChange={() => toggleSymptom(symptom)}
                      className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                    />
                    <span className="text-sm font-medium">{symptom}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Available Therapies ({filteredTherapies.length})
            </h2>
            {selectedSymptoms.length > 0 && (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Filtered by:</span>
                <div className="flex flex-wrap gap-2">
                  {selectedSymptoms.map((symptom) => (
                    <span
                      key={symptom}
                      className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full font-medium"
                    >
                      {symptom}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredTherapies.map((therapy, index) => (
              <div
                key={therapy.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedTherapy(therapy)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={therapy.image}
                    alt={therapy.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-bold text-emerald-600">
                      {therapy.price}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {therapy.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {therapy.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-2" />
                      Duration: {therapy.duration}
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        Key Benefits:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {therapy.benefits.slice(0, 2).map((benefit, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                          >
                            {benefit}
                          </span>
                        ))}
                        {therapy.benefits.length > 2 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            +{therapy.benefits.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-emerald-500 text-white py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-colors flex items-center justify-center">
                    View Doctors
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredTherapies.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No therapies found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>

        {/* Therapy Details Modal */}
        {selectedTherapy && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedTherapy.name}
                  </h2>
                  <button
                    onClick={() => setSelectedTherapy(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="h-6 w-6 text-gray-500" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <img
                      src={selectedTherapy.image}
                      alt={selectedTherapy.name}
                      className="w-full h-64 object-cover rounded-xl mb-6"
                    />

                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Description
                        </h3>
                        <p className="text-gray-600">
                          {selectedTherapy.description}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Benefits
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                          {selectedTherapy.benefits.map((benefit, i) => (
                            <div
                              key={i}
                              className="flex items-center text-sm text-gray-600"
                            >
                              <CheckCircle2 className="h-4 w-4 mr-2 text-emerald-500" />
                              {benefit}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Recommended For
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedTherapy.symptoms.map((symptom, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full"
                            >
                              {symptom}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Available Doctors
                    </h3>
                    <div className="space-y-4">
                      {getTherapyDoctors(selectedTherapy.id).map((doctor) => (
                        <div
                          key={doctor.id}
                          className="border border-gray-200 rounded-xl p-4 hover:border-emerald-300 hover:bg-emerald-50/50 transition-all duration-300"
                        >
                          <div className="flex items-start space-x-4">
                            <img
                              src={doctor.image}
                              alt={doctor.name}
                              className="w-16 h-16 rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900">
                                {doctor.name}
                              </h4>
                              <p className="text-sm text-gray-600 mb-1">
                                {doctor.specialization}
                              </p>
                              <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                                <span>{doctor.experience} experience</span>
                                <div className="flex items-center">
                                  <Star className="h-3 w-3 text-yellow-400 fill-yellow-400 mr-1" />
                                  {doctor.rating} ({doctor.reviews} reviews)
                                </div>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex space-x-1">
                                  {doctor.languages
                                    .slice(0, 2)
                                    .map((lang, i) => (
                                      <span
                                        key={i}
                                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                                      >
                                        {lang}
                                      </span>
                                    ))}
                                </div>
                                <button
                                  onClick={() =>
                                    handleBooking(doctor, selectedTherapy)
                                  }
                                  className="bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-600 transition-colors"
                                >
                                  Book Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Calendar Booking Modal */}
        {showCalendar && selectedDoctor && selectedTherapy && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Book Appointment
                    </h2>
                    <p className="text-gray-600">
                      {selectedTherapy.name} with {selectedDoctor.name}
                    </p>
                  </div>
                  <button
                    onClick={() => setShowCalendar(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="h-6 w-6 text-gray-500" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Calendar */}
                  <div className="lg:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Select Date
                    </h3>
                    <div className="grid grid-cols-7 gap-2 mb-6">
                      {calendarData.slice(0, 21).map((day) => (
                        <button
                          key={day.date}
                          onClick={() => handleDateSelect(day)}
                          className={`p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                            selectedDate?.date === day.date
                              ? "bg-emerald-500 text-white"
                              : day.totalAvailable > 0
                              ? "bg-green-100 text-green-800 hover:bg-green-200"
                              : "bg-red-100 text-red-800 cursor-not-allowed"
                          }`}
                          disabled={day.totalAvailable === 0}
                        >
                          <div className="text-xs">
                            {day.displayDate.split(" ")[0]}
                          </div>
                          <div className="font-bold">
                            {day.displayDate.split(" ")[2]}
                          </div>
                          <div className="text-xs">
                            {day.totalAvailable > 0
                              ? `${day.totalAvailable} slots`
                              : "Full"}
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Time Slots */}
                    {selectedDate && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          Available Times - {selectedDate.displayDate}
                        </h3>
                        <div className="grid grid-cols-3 gap-3">
                          {selectedDate.slots.map((slot) => (
                            <button
                              key={slot.time}
                              onClick={() => handleTimeSlotSelect(slot)}
                              disabled={!slot.available}
                              className={`p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                                selectedTimeSlot?.time === slot.time
                                  ? "bg-emerald-500 text-white"
                                  : slot.available
                                  ? "bg-green-100 text-green-800 hover:bg-green-200"
                                  : "bg-red-100 text-red-800 cursor-not-allowed"
                              }`}
                            >
                              <div>{slot.time}</div>
                              <div className="text-xs">
                                {slot.available
                                  ? `${slot.remainingSlots} left`
                                  : "Booked"}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Booking Summary */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Booking Summary
                    </h3>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={selectedDoctor.image}
                          alt={selectedDoctor.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-gray-900">
                            {selectedDoctor.name}
                          </p>
                          <p className="text-sm text-gray-600">
                            {selectedDoctor.specialization}
                          </p>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-4 space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Therapy:</span>
                          <span className="font-medium">
                            {selectedTherapy.name}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Duration:</span>
                          <span className="font-medium">
                            {selectedTherapy.duration}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Price:</span>
                          <span className="font-medium">
                            {selectedTherapy.price}
                          </span>
                        </div>
                        {selectedDate && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Date:</span>
                            <span className="font-medium">
                              {selectedDate.displayDate}
                            </span>
                          </div>
                        )}
                        {selectedTimeSlot && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Time:</span>
                            <span className="font-medium">
                              {selectedTimeSlot.time}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="border-t border-gray-200 pt-4">
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total:</span>
                          <span className="text-emerald-600">
                            {selectedTherapy.price}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={confirmBooking}
                        disabled={!selectedDate || !selectedTimeSlot}
                        className="w-full bg-emerald-500 text-white py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                      >
                        Confirm Booking
                      </button>

                      <p className="text-xs text-gray-500 text-center">
                        You will receive a confirmation email after booking
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
    return renderTherapies();
}
      

export default Therapies;
