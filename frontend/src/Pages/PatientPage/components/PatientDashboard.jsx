import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Heart,
  Leaf,
  Bell,
  User,
  Activity,
  TrendingUp,
  Star,
  CheckCircle2,
  AlertCircle,
  Info,
  ArrowRight,
  Target,
  Award,
  MessageCircle,
  ChevronRight,
  Plus,
  Sparkles,
  Moon,
  Sun,
  Battery,
  Flame,
  Zap,
  Trophy,
  Brain,
  Wind,
  Settings,
  Home,
  BarChart3,
  Search,
  Filter,
  Play,
  Pause,
  RotateCcw,
  Send,
  ThumbsUp,
  ThumbsDown,
  MapPin,
  Phone,
  Mail,
  Edit3,
  Share2,
  X,
} from "lucide-react";

import Navigation from "./Navigation";
import Dashboard from "./Dashboard";
import Therapies from "./Therapies";
import Exercises from "./Exercise";
import Progress from "./Progress";
import Schedule from "./Sessions";
import Sessions from "./Sessions";

const PatientDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("dashboard");
  const [completedExercises, setCompletedExercises] = useState(new Set([1, 3])); // Some pre-completed
  const [feedbackText, setFeedbackText] = useState("");
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [showPastSessions, setShowPastSessions] = useState(false);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTherapy, setSelectedTherapy] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  // Patient data
  const patientData = {
    name: "Siddhi Shetkar",
    age: 34,
    therapyPlan: "Complete Panchakarma Detox",
    startDate: "March 15, 2024",
    completionRate: 68,
    currentStreak: 12,
    longestStreak: 18,
    totalExercisesDone: 156,
    badges: 8,
    points: 1240,
  };

  const upcomingTherapies = [
    {
      id: 1,
      name: "Shirodhara",
      date: "Today",
      time: "2:30 PM",
      duration: "60 min",
      status: "confirmed",
      practitioner: "Dr. Ayesha Sharma",
      location: "Wellness Center - Room 3",
      precautions: {
        pre: [
          "Fast for 2 hours before session",
          "Wear comfortable, loose clothing",
          "Avoid caffeine in the morning",
          "Arrive 15 minutes early for preparation",
        ],
        post: [
          "Rest for 30 minutes after treatment",
          "Avoid cold water for 2 hours",
          "Light meal only after session",
          "No strenuous activities today",
        ],
      },
    },
    {
      id: 2,
      name: "Abhyanga",
      date: "Tomorrow",
      time: "10:00 AM",
      duration: "90 min",
      status: "scheduled",
      practitioner: "Dr. Rajesh Kumar",
      location: "Wellness Center - Room 1",
      precautions: {
        pre: [
          "Light breakfast only",
          "Remove all jewelry and accessories",
          "Take a warm shower beforehand",
        ],
        post: [
          "Gentle steam bath recommended",
          "Stay warm for next 4 hours",
          "Drink warm herbal tea",
        ],
      },
    },
    {
      id: 3,
      name: "Udvartana",
      date: "Mar 28",
      time: "11:00 AM",
      duration: "75 min",
      status: "scheduled",
      practitioner: "Dr. Ayesha Sharma",
      location: "Wellness Center - Room 2",
      precautions: {
        pre: [
          "Shower before arrival",
          "Avoid heavy meals 3 hours prior",
          "Bring comfortable change of clothes",
        ],
        post: [
          "Take warm bath at home",
          "Apply moisturizer gently",
          "Avoid sun exposure for 4 hours",
        ],
      },
    },
  ];

  const pastTherapies = [
    {
      id: 1,
      name: "Abhyanga",
      date: "Mar 20, 2024",
      time: "10:00 AM",
      duration: "90 min",
      status: "completed",
      practitioner: "Dr. Ayesha Sharma",
      location: "Wellness Center - Room 1",
      rating: 5,
      notes:
        "Excellent session. Patient showed significant improvement in muscle tension and reported better sleep quality.",
      precautions: {
        pre: [
          "Light breakfast only",
          "Remove all jewelry and accessories",
          "Take a warm shower beforehand",
        ],
        post: [
          "Gentle steam bath recommended",
          "Stay warm for next 4 hours",
          "Drink warm herbal tea",
        ],
      },
    },
    {
      id: 2,
      name: "Panchakarma",
      date: "Mar 18, 2024",
      time: "9:00 AM",
      duration: "120 min",
      status: "completed",
      practitioner: "Dr. Rajesh Kumar",
      location: "Wellness Center - Room 2",
      rating: 4,
      notes:
        "Good progress in detoxification. Patient experienced mild discomfort initially but adapted well.",
      precautions: {
        pre: [
          "Fast for 12 hours before session",
          "Drink plenty of water day before",
          "Avoid heavy physical activity",
        ],
        post: [
          "Complete bed rest for 2 hours",
          "Light vegetarian meals only",
          "Avoid cold drinks and foods",
        ],
      },
    },
    {
      id: 3,
      name: "Shirodhara",
      date: "Mar 15, 2024",
      time: "2:30 PM",
      duration: "60 min",
      status: "completed",
      practitioner: "Dr. Ayesha Sharma",
      location: "Wellness Center - Room 3",
      rating: 5,
      notes:
        "Remarkable improvement in stress levels and mental clarity. Patient reported deep relaxation.",
      precautions: {
        pre: [
          "Fast for 2 hours before session",
          "Wear comfortable, loose clothing",
          "Avoid caffeine in the morning",
        ],
        post: [
          "Rest for 30 minutes after treatment",
          "Avoid cold water for 2 hours",
          "Light meal only after session",
        ],
      },
    },
  ];

  const diseaseSymptoms = [
    "Chronic Pain",
    "Stress & Anxiety",
    "Digestive Issues",
    "Insomnia",
    "Arthritis",
    "Migraine",
    "Skin Disorders",
    "Respiratory Issues",
    "High Blood Pressure",
    "Diabetes",
    "Weight Management",
    "Fatigue",
    "Depression",
    "Joint Stiffness",
    "Muscle Tension",
  ];

  const therapies = [
    {
      id: 1,
      name: "Abhyanga",
      description:
        "Full body oil massage therapy for relaxation and detoxification",
      duration: "60-90 min",
      benefits: [
        "Improves circulation",
        "Reduces stress",
        "Nourishes skin",
        "Enhances flexibility",
      ],
      symptoms: [
        "Chronic Pain",
        "Stress & Anxiety",
        "Muscle Tension",
        "Fatigue",
      ],
      image:
        "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "₹2,500",
    },
    {
      id: 2,
      name: "Shirodhara",
      description:
        "Continuous pouring of medicated oil on forehead for mental peace",
      duration: "45-60 min",
      benefits: [
        "Calms nervous system",
        "Improves sleep",
        "Reduces anxiety",
        "Enhances concentration",
      ],
      symptoms: ["Stress & Anxiety", "Insomnia", "Migraine", "Depression"],
      image:
        "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "₹3,000",
    },
    {
      id: 3,
      name: "Panchakarma",
      description: "Complete detoxification and rejuvenation therapy program",
      duration: "7-21 days",
      benefits: [
        "Deep detoxification",
        "Boosts immunity",
        "Rejuvenates body",
        "Balances doshas",
      ],
      symptoms: [
        "Digestive Issues",
        "Chronic Pain",
        "Fatigue",
        "Weight Management",
      ],
      image:
        "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "₹15,000",
    },
    {
      id: 4,
      name: "Udvartana",
      description: "Herbal powder massage for weight reduction and skin health",
      duration: "45-60 min",
      benefits: [
        "Weight reduction",
        "Improves skin texture",
        "Reduces cellulite",
        "Enhances metabolism",
      ],
      symptoms: ["Weight Management", "Skin Disorders", "Joint Stiffness"],
      image:
        "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "₹2,800",
    },
    {
      id: 5,
      name: "Nasya",
      description:
        "Nasal administration of medicated oils for respiratory health",
      duration: "30-45 min",
      benefits: [
        "Clears sinuses",
        "Improves breathing",
        "Reduces headaches",
        "Enhances mental clarity",
      ],
      symptoms: ["Respiratory Issues", "Migraine", "Stress & Anxiety"],
      image:
        "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "₹1,800",
    },
    {
      id: 6,
      name: "Kizhi",
      description:
        "Herbal poultice massage for joint pain and muscle stiffness",
      duration: "60-75 min",
      benefits: [
        "Reduces joint pain",
        "Improves mobility",
        "Reduces inflammation",
        "Strengthens muscles",
      ],
      symptoms: [
        "Arthritis",
        "Joint Stiffness",
        "Chronic Pain",
        "Muscle Tension",
      ],
      image:
        "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "₹3,200",
    },
  ];

  const doctors = [
    {
      id: 1,
      name: "Dr. Ayesha Sharma",
      specialization: "Panchakarma Specialist",
      experience: "12 years",
      rating: 4.9,
      reviews: 156,
      therapies: [1, 2, 4, 5],
      image:
        "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400",
      availability: "Mon-Sat",
      languages: ["English", "Hindi", "Sanskrit"],
      qualifications: ["BAMS", "MD (Ayurveda)", "Panchakarma Certification"],
    },
    {
      id: 2,
      name: "Dr. Rajesh Kumar",
      specialization: "Ayurvedic Physician",
      experience: "15 years",
      rating: 4.8,
      reviews: 203,
      therapies: [1, 3, 6],
      image:
        "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400",
      availability: "Mon-Fri",
      languages: ["English", "Hindi", "Tamil"],
      qualifications: ["BAMS", "MD (Kayachikitsa)", "Panchakarma Expert"],
    },
    {
      id: 3,
      name: "Dr. Priya Nair",
      specialization: "Women's Wellness Expert",
      experience: "10 years",
      rating: 4.9,
      reviews: 128,
      therapies: [2, 4, 5],
      image:
        "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400",
      availability: "Tue-Sat",
      languages: ["English", "Hindi", "Malayalam"],
      qualifications: ["BAMS", "MD (Prasuti Tantra)", "Wellness Certification"],
    },
    {
      id: 4,
      name: "Dr. Arjun Patel",
      specialization: "Pain Management Specialist",
      experience: "18 years",
      rating: 4.7,
      reviews: 189,
      therapies: [1, 3, 6],
      image:
        "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400",
      availability: "Mon-Sat",
      languages: ["English", "Hindi", "Gujarati"],
      qualifications: [
        "BAMS",
        "MD (Shalya Tantra)",
        "Pain Management Certification",
      ],
    },
  ];

  // Calendar data - 30 days from today
  const generateCalendarData = () => {
    const calendar = [];
    const today = new Date();
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const daySlots = [];
      const timeSlots = [
        "9:00 AM",
        "10:30 AM",
        "12:00 PM",
        "2:00 PM",
        "3:30 PM",
        "5:00 PM",
      ];
      timeSlots.forEach((time) => {
        const isAvailable = Math.random() > 0.3;
        daySlots.push({
          time,
          available: isAvailable,
          remainingSlots: isAvailable ? Math.floor(Math.random() * 3) + 1 : 0,
        });
      });
      calendar.push({
        date: date.toISOString().split("T")[0],
        displayDate: date.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        }),
        slots: daySlots,
        totalAvailable: daySlots.filter((slot) => slot.available).length,
      });
    }
    return calendar;
  };

  const calendarData = generateCalendarData();

  const progressMetrics = [
    {
      label: "Treatment Progress",
      current: 68,
      target: 100,
      unit: "%",
      color: "from-emerald-500 to-teal-500",
      icon: Target,
      improvement: "+8% this week",
    },
    {
      label: "Energy Level",
      current: 75,
      target: 100,
      unit: "%",
      color: "from-amber-500 to-orange-500",
      icon: Battery,
      improvement: "+15% from start",
    },
    {
      label: "Sleep Quality",
      current: 82,
      target: 100,
      unit: "%",
      color: "from-indigo-500 to-purple-500",
      icon: Moon,
      improvement: "Excellent progress",
    },
    {
      label: "Stress Level",
      current: 35,
      target: 0,
      unit: "%",
      color: "from-red-500 to-pink-500",
      icon: Heart,
      inverse: true,
      improvement: "-25% reduction",
    },
  ];

  const dailyExercises = [
    {
      id: 1,
      name: "Morning Pranayama",
      description: "5-minute breathing exercise to start your day",
      duration: "5 min",
      type: "breathing",
      points: 10,
      icon: Wind,
      streak: 12,
    },
    {
      id: 2,
      name: "Sun Salutation",
      description: "3 rounds of Surya Namaskara",
      duration: "10 min",
      type: "yoga",
      points: 15,
      icon: Sun,
      streak: 0,
    },
    {
      id: 3,
      name: "Meditation",
      description: "Mindful meditation for mental clarity",
      duration: "15 min",
      type: "meditation",
      points: 20,
      icon: Brain,
      streak: 8,
    },
    {
      id: 4,
      name: "Evening Walk",
      description: "Light walking exercise for digestion",
      duration: "20 min",
      type: "cardio",
      points: 10,
      icon: Activity,
      streak: 0,
    },
    {
      id: 5,
      name: "Herbal Tea Ritual",
      description: "Prepare and mindfully consume healing tea",
      duration: "10 min",
      type: "lifestyle",
      points: 5,
      icon: Leaf,
      streak: 0,
    },
  ];

  const achievements = [
    {
      id: 1,
      name: "First Steps",
      description: "Complete your first exercise",
      icon: Trophy,
      unlocked: true,
      date: "Mar 15",
      color: "from-yellow-400 to-amber-500",
    },
    {
      id: 2,
      name: "Week Warrior",
      description: "Maintain streak for 7 days",
      icon: Flame,
      unlocked: true,
      date: "Mar 22",
      color: "from-orange-400 to-red-500",
    },
    {
      id: 3,
      name: "Consistency Champion",
      description: "Reach 30-day streak",
      icon: Award,
      unlocked: false,
      progress: 12,
      target: 30,
      color: "from-purple-400 to-pink-500",
    },
    {
      id: 4,
      name: "Meditation Master",
      description: "Complete 50 meditation sessions",
      icon: Brain,
      unlocked: false,
      progress: 28,
      target: 50,
      color: "from-blue-400 to-cyan-500",
    },
  ];

  const notifications = [
    {
      id: 1,
      type: "reminder",
      title: "Pre-Treatment Preparation",
      message:
        "Remember to fast for 2 hours before your Shirodhara session today at 2:30 PM",
      time: "1 hour ago",
      urgent: true,
      therapy: "Shirodhara",
    },
    {
      id: 2,
      type: "exercise",
      title: "Daily Exercise Reminder",
      message:
        "You haven't completed today's Sun Salutation yet. Keep your streak alive!",
      time: "2 hours ago",
      urgent: false,
    },
    {
      id: 3,
      type: "success",
      title: "Streak Milestone! 🔥",
      message: "Congratulations! You've reached a 12-day exercise streak",
      time: "1 day ago",
      urgent: false,
    },
    {
      id: 4,
      type: "info",
      title: "Tomorrow's Session Confirmed",
      message: "Abhyanga massage scheduled for 10:00 AM with Dr. Rajesh Kumar",
      time: "3 hours ago",
      urgent: false,
    },
  ];

  const recentFeedback = [
    {
      id: 1,
      therapy: "Abhyanga",
      date: "Mar 25",
      rating: 5,
      notes:
        "Excellent session! Felt very relaxed and muscle tension significantly reduced. Dr. Ayesha's technique was perfect.",
      practitioner: "Dr. Ayesha Sharma",
      symptoms: "Much better",
      energy: "High",
    },
    {
      id: 2,
      therapy: "Panchakarma",
      date: "Mar 22",
      rating: 4,
      notes:
        "Good experience overall. Some mild discomfort initially but improved significantly by the end.",
      practitioner: "Dr. Rajesh Kumar",
      symptoms: "Improving",
      energy: "Moderate",
    },
  ];

  const milestones = [
    {
      id: 1,
      title: "Initial Assessment",
      date: "Mar 15",
      completed: true,
      description: "Comprehensive health evaluation completed",
    },
    {
      id: 2,
      title: "Detox Phase Started",
      date: "Mar 18",
      completed: true,
      description: "First week of purification treatments",
    },
    {
      id: 3,
      title: "Mid-Treatment Review",
      date: "Mar 25",
      completed: true,
      description: "Progress assessment and plan adjustment",
    },
    {
      id: 4,
      title: "Rejuvenation Phase",
      date: "Mar 30",
      completed: false,
      current: true,
      description: "Beginning of restoration treatments",
    },
    {
      id: 5,
      title: "Treatment Completion",
      date: "Apr 8",
      completed: false,
      description: "Final assessment and aftercare plan",
    },
  ];

  const toggleExerciseComplete = (exerciseId) => {
    const newCompleted = new Set(completedExercises);
    if (newCompleted.has(exerciseId)) {
      newCompleted.delete(exerciseId);
    } else {
      newCompleted.add(exerciseId);
    }
    setCompletedExercises(newCompleted);
  };

  const toggleSymptom = (symptom) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    );
  };

  const filteredTherapies = therapies.filter((therapy) => {
    const matchesSearch =
      therapy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      therapy.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSymptoms =
      selectedSymptoms.length === 0 ||
      selectedSymptoms.some((symptom) => therapy.symptoms.includes(symptom));

    return matchesSearch && matchesSymptoms;
  });

  const getTherapyDoctors = (therapyId) => {
    return doctors.filter((doctor) => doctor.therapies.includes(therapyId));
  };

  const handleBooking = (doctor, therapy) => {
    setSelectedDoctor(doctor);
    setSelectedTherapy(therapy);
    setShowCalendar(true);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null);
  };

  const handleTimeSlotSelect = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  const confirmBooking = () => {
    if (selectedDate && selectedTimeSlot && selectedDoctor && selectedTherapy) {
      alert(
        `Booking confirmed!\n\nTherapy: ${selectedTherapy.name}\nDoctor: ${selectedDoctor.name}\nDate: ${selectedDate.displayDate}\nTime: ${selectedTimeSlot.time}`
      );
      setShowCalendar(false);
      setSelectedDate(null);
      setSelectedTimeSlot(null);
      setSelectedDoctor(null);
      setSelectedTherapy(null);
    }
  };

  const getCompletionPercentage = () => {
    return Math.round((completedExercises.size / dailyExercises.length) * 100);
  };

  const getTotalPointsToday = () => {
    return dailyExercises
      .filter((ex) => completedExercises.has(ex.id))
      .reduce((total, ex) => total + ex.points, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="images/logo.png"
              style={{ width: "auto", height: "50px", borderRadius: "50%" }}
            />
            <div>
              <h1 className="font-bold text-emerald-800 text-lg">AyurSutra</h1>
              <p className="font-bold text-emerald-800 text-sm">Wellness</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
              <Bell className="h-6 w-6" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            <div className="flex items-center space-x-2">
              <div className="flex flex-col text-right">
                <span className="text-sm font-semibold text-gray-800">
                  {patientData.name}
                </span>
                <span className="text-xs text-gray-500">
                  {patientData.therapyPlan}
                </span>
              </div>
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <span className="text-white font-medium text-sm">
                  {patientData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full bg-gray-50 px-4 py-8">
        <Navigation selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        {selectedTab === "dashboard" && (
          <Dashboard
            patientData={patientData}
            upcomingTherapies={upcomingTherapies}
            dailyExercises={dailyExercises}
            completedExercises={completedExercises}
            notifications={notifications}
            achievements={achievements}
            toggleExerciseComplete={toggleExerciseComplete}
            getCompletionPercentage={getCompletionPercentage}
            getTotalPointsToday={getTotalPointsToday}
          />
        )}
        {selectedTab === "therapies" && (
          <Therapies
            diseaseSymptoms={diseaseSymptoms}
            therapies={therapies}
            filteredTherapies={filteredTherapies}
            selectedSymptoms={selectedSymptoms}
            searchTerm={searchTerm}
            selectedTherapy={selectedTherapy}
            setSelectedTherapy={setSelectedTherapy}
            setSearchTerm={setSearchTerm}
            toggleSymptom={toggleSymptom}
            getTherapyDoctors={getTherapyDoctors}
            handleBooking={handleBooking}
            showCalendar={showCalendar}
            setShowCalendar={setShowCalendar}
            selectedDoctor={selectedDoctor}
            calendarData={calendarData}
            selectedDate={selectedDate}
            selectedTimeSlot={selectedTimeSlot}
            handleDateSelect={handleDateSelect}
            handleTimeSlotSelect={handleTimeSlotSelect}
            confirmBooking={confirmBooking}
          />
        )}
        {selectedTab === "exercises" && (
          <Exercises
            dailyExercises={dailyExercises}
            completedExercises={completedExercises}
            toggleExerciseComplete={toggleExerciseComplete}
          />
        )}
        {selectedTab === "progress" && (
          <Progress
            progressMetrics={progressMetrics}
            milestones={milestones}
            recentFeedback={recentFeedback}
            showPastSessions={showPastSessions}
            setShowPastSessions={setShowPastSessions}
            pastTherapies={pastTherapies}
          />
        )}
        {selectedTab === "sessions" && (
          <Sessions
            selectedTherapy={selectedTherapy}
            selectedDoctor={selectedDoctor}
            showCalendar={showCalendar}
            calendarData={calendarData}
            selectedDate={selectedDate}
            selectedTimeSlot={selectedTimeSlot}
            handleDateSelect={handleDateSelect}
            handleTimeSlotSelect={handleTimeSlotSelect}
            confirmBooking={confirmBooking}
            setShowCalendar={setShowCalendar}
            showPastSessions={showPastSessions}
            setShowPastSessions={setShowPastSessions}
            upcomingTherapies={upcomingTherapies}
            pastTherapies={pastTherapies}
          />
        )}
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
        @keyframes scale-in {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default PatientDashboard;
