
import React, { useState } from "react";
import {
  FaUserInjured,
  FaUserMd,
  FaLeaf,
  FaSpa,
  FaUserPlus,
  FaSignInAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Portal() {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const navigate=useNavigate();

  const API_BASE_URL="http://localhost:5555/patients"

  // --- State for Form Inputs ---
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    contactNumber: "",
    address: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // -----------------------------

  const openModal = (selectedRole) => {
    setRole(selectedRole);
    setIsSignup(false);
    setOpen(true);
    setFormData({
      fullName: "",
      age: "",
      gender: "",
      contactNumber: "",
      address: "",
      email: "",
      password: "",
    });
    setErrorMessage("");
    setSuccessMessage("");
  };

  const closeModal = () => {
    setOpen(false);
    setRole("");
    setErrorMessage("");
    setSuccessMessage("");
    setIsLoading(false);
  };

  const toggleSignup = () => {
    setIsSignup(!isSignup);
    setFormData({
      fullName: "",
      age: "",
      gender: "",
      contactNumber: "",
      address: "",
      email: "",
      password: "",
    });
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // -------------------------------
  // ➡️ Form Submission Logic with updated API_BASE_URL
  // -------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setIsLoading(true);

    let endpoint = "";
    let dataToSend = {};

    if (role === "Doctor") {
      // Assuming Doctor uses the same /login endpoint for simplicity
      endpoint = `${API_BASE_URL}/login`;
      dataToSend = { email: formData.email, password: formData.password };
    } else if (role === "Patient") {
      if (isSignup) {
        // Sends request to: http://localhost:5555/patients/register
        endpoint = `${API_BASE_URL}/register`;
        dataToSend = formData;
      } else {
        // Sends request to: http://localhost:5555/patients/login
        endpoint = `${API_BASE_URL}/login`;
        dataToSend = { email: formData.email, password: formData.password };
      }
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message || `${role} action successful!`);
        console.log("Backend Response:", data);
        // Navigate to patient dashboard after successful sign in
        if (role === "Patient" && !isSignup) {
          setTimeout(() => {
            closeModal();
          }, 1000);

          navigate("/patient_dashboard")
        } else {
          setTimeout(closeModal, 1500);
        }
      } else {
        // Handle backend validation errors (400, 404, etc.)
        setErrorMessage(
          data.message || `Error: ${response.statusText}. Please try again.`
        );
      }
    } catch (error) {
      // Handle network errors
      setErrorMessage(
        `A network error occurred. Please check if the server is running at ${API_BASE_URL}.`
      );
      console.error("Network Error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  // -------------------------------

  // Ayurvedic-inspired colors
  const accent =
    role === "Doctor"
      ? "from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 bg-amber-700"
      : "from-emerald-600 to-emerald-800 hover:from-emerald-700 hover:to-emerald-900 bg-emerald-700";

  return (
    <>
      <div className="min-h-[80vh] flex items-center justify-center px-4 pt-5 from-amber-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="w-full max-w-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-amber-200 dark:border-amber-800 rounded-3xl shadow-lg overflow-hidden relative">
          {/* Decorative elements (as before) */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-amber-200 dark:bg-amber-800 rounded-full opacity-30"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-200 dark:bg-emerald-800 rounded-full opacity-30"></div>

          {/* Title (as before) */}
          <div className="px-8 py-10 text-center relative">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-100 dark:bg-amber-900 mb-4">
              <FaSpa className="text-4xl text-amber-600 dark:text-amber-300" />
            </div>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white font-serif">
              Welcome to <span className="text-amber-600">AyurSutra</span>
            </h2>
            <p className="mt-3 text-amber-700 dark:text-amber-300 max-w-md mx-auto font-medium">
              Your trusted holistic healthcare companion. Please choose your role
              to continue.
            </p>
          </div>

          {/* Role Cards - using onClick */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 pb-12">
            <button
              type="button"
              onClick={() => openModal("Patient")}
              className="relative flex flex-col items-center justify-center p-10 bg-gradient-to-br from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group overflow-hidden"
            >
              <div className="absolute -top-4 -right-4 w-28 h-28 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white/10 rounded-full"></div>

              <div className="mb-4 p-4 bg-white/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                <FaUserInjured className="text-4xl" />
              </div>
              <span className="font-semibold text-xl mb-2">Patient Portal</span>
              <p className="text-sm text-emerald-100 text-center">
                Book treatments, view health records & more
              </p>
            </button>

            <button
              type="button"
              onClick={() => openModal("Doctor")}
              className="relative flex flex-col items-center justify-center p-10 bg-gradient-to-br from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group overflow-hidden"
            >
              <div className="absolute -top-4 -right-4 w-28 h-28 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white/10 rounded-full"></div>

              <div className="mb-4 p-4 bg-white/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                <FaUserMd className="text-4xl" />
              </div>
              <span className="font-semibold text-xl mb-2">Doctor Portal</span>
              <p className="text-sm text-amber-100 text-center">
                Manage patients, schedules & insights
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* Modal / Overlay */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-amber-900/70 z-50 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-amber-50 dark:bg-amber-900/90 rounded-2xl shadow-2xl w-full max-w-md p-6 relative border-2 border-amber-200 dark:border-amber-700 transform transition-transform duration-300 scale-95 hover:scale-100 overflow-y-auto max-h-[90vh]">
            {/* Close Button - using onClick */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-amber-700 dark:text-amber-200 hover:text-amber-900 dark:hover:text-amber-50 transition-colors duration-200 p-1 rounded-full hover:bg-amber-200 dark:hover:bg-amber-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Title (as before) */}
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-100 dark:bg-amber-800/60 mb-2">
                <FaLeaf className="h-6 w-6 text-amber-600 dark:text-amber-300" />
              </div>
              <h3 className="text-2xl font-semibold text-center text-amber-800 dark:text-amber-100 font-serif">
                {role} {isSignup ? "Sign Up" : "Sign In"}
              </h3>
              <p className="text-sm text-center text-amber-600 dark:text-amber-300 mb-6 mt-2">
                {role === "Doctor"
                  ? "Access your healing practice and patient care portal"
                  : isSignup
                  ? "Begin your journey to holistic wellness with us"
                  : "Continue your path to balanced health and wellness"}
              </p>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div
                className="p-3 mb-4 text-sm text-red-800 rounded-xl bg-red-100 dark:bg-red-900 dark:text-red-400"
                role="alert"
              >
                <span className="font-medium">Error:</span> {errorMessage}
              </div>
            )}

            {/* Success Message */}
            {successMessage && (
              <div
                className="p-3 mb-4 text-sm text-emerald-800 rounded-xl bg-emerald-100 dark:bg-emerald-900 dark:text-emerald-400"
                role="alert"
              >
                <span className="font-medium">Success:</span> {successMessage}
              </div>
            )}

            {/* Form - using onSubmit */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {isSignup && role === "Patient" && (
                <>
                  {/* Full Name Input */}
                  <div>
                    <label className="block text-sm font-medium text-amber-700 dark:text-amber-300 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 text-amber-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="bg-amber-50 border border-amber-300 text-amber-900 text-sm rounded-xl focus:ring-amber-500 focus:border-amber-500 block w-full ps-10 p-2.5 dark:bg-amber-800/40 dark:border-amber-600 dark:placeholder-amber-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Age Input */}
                    <div>
                      <label className="block text-sm font-medium text-amber-700 dark:text-amber-300 mb-2">
                        Age *
                      </label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Age"
                        required
                        min="1"
                        max="120"
                        className="bg-amber-50 border border-amber-300 text-amber-900 text-sm rounded-xl focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-amber-800/40 dark:border-amber-600 dark:placeholder-amber-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
                      />
                    </div>

                    {/* Gender Select */}
                    <div>
                      <label className="block text-sm font-medium text-amber-700 dark:text-amber-300 mb-2">
                        Gender *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none z-10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 text-amber-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          required
                          className="bg-amber-50 border border-amber-300 text-amber-900 text-sm rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 block w-full ps-10 p-2.5 pr-10 appearance-none dark:bg-amber-800/40 dark:border-amber-600 dark:text-amber-100 dark:focus:ring-amber-500 dark:focus:border-amber-500 transition-colors duration-200 cursor-pointer hover:border-amber-400 dark:hover:border-amber-500"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23d97706' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                            backgroundPosition: "right 0.5rem center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "1.5em 1.5em",
                          }}
                        >
                          <option
                            value=""
                            disabled
                            className="text-amber-500/70 dark:text-amber-400/70"
                          >
                            Select Gender
                          </option>
                          <option
                            value="male"
                            className="text-amber-900 dark:text-amber-100"
                          >
                            Male
                          </option>
                          <option
                            value="female"
                            className="text-amber-900 dark:text-amber-100"
                          >
                            Female
                          </option>
                          <option
                            value="other"
                            className="text-amber-900 dark:text-amber-100"
                          >
                            Other
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Contact Number Input */}
                  <div>
                    <label className="block text-sm font-medium text-amber-700 dark:text-amber-300 mb-2">
                      Contact Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 text-amber-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <input
                        type="tel"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        placeholder="Enter your contact number"
                        required
                        className="bg-amber-50 border border-amber-300 text-amber-900 text-sm rounded-xl focus:ring-amber-500 focus:border-amber-500 block w-full ps-10 p-2.5 dark:bg-amber-800/40 dark:border-amber-600 dark:placeholder-amber-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
                      />
                    </div>
                  </div>

                  {/* Address Input */}
                  <div>
                    <label className="block text-sm font-medium text-amber-700 dark:text-amber-300 mb-2">
                      Address *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 text-amber-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter your complete address"
                        required
                        className="bg-amber-50 border border-amber-300 text-amber-900 text-sm rounded-xl focus:ring-amber-500 focus:border-amber-500 block w-full ps-10 p-2.5 dark:bg-amber-800/40 dark:border-amber-600 dark:placeholder-amber-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-amber-700 dark:text-amber-300 mb-2">
                  {role === "Doctor" ? "Doctor ID / Email" : "Email"} *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-amber-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={
                      role === "Doctor"
                        ? "Enter your Doctor ID or Email"
                        : "Enter your Email"
                    }
                    required
                    className="bg-amber-50 border border-amber-300 text-amber-900 text-sm rounded-xl focus:ring-amber-500 focus:border-amber-500 block w-full ps-10 p-2.5 dark:bg-amber-800/40 dark:border-amber-600 dark:placeholder-amber-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-sm font-medium text-amber-700 dark:text-amber-300 mb-2">
                  Password *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-amber-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    className="bg-amber-50 border border-amber-300 text-amber-900 text-sm rounded-xl focus:ring-amber-500 focus:border-amber-500 block w-full ps-10 p-2.5 dark:bg-amber-800/40 dark:border-amber-600 dark:placeholder-amber-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full text-white font-medium rounded-xl px-4 py-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center ${accent} ${
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    {role} {isSignup ? "Sign Up" : "Sign In"}
                    {isSignup ? (
                      <FaUserPlus className="h-5 w-5 ml-2" />
                    ) : (
                      <FaSignInAlt className="h-5 w-5 ml-2" />
                    )}
                  </>
                )}
              </button>
            </form>

            {/* Toggle links - using onClick */}
            {role === "Patient" && (
              <p className="text-sm text-center mt-6 text-amber-700 dark:text-amber-300">
                {isSignup ? (
                  <>
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => {
                        setIsSignup(false);
                      }}
                      className="font-semibold text-amber-800 dark:text-amber-200 hover:underline"
                    >
                      Sign in
                    </button>
                  </>
                ) : (
                  <>
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={toggleSignup}
                      className="font-semibold text-amber-800 dark:text-amber-200 hover:underline"
                    >
                      Sign up
                    </button>
                  </>
                )}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}