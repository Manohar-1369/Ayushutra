import React from 'react'

import { WellnessButton } from "../ui/wellness-button.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card.jsx";
import { Badge } from "../ui/badge.jsx";
import {
  Calendar,
  Bell,
  Heart,
  Users,
  Activity,
  Leaf,
  Shield,
  Smartphone,
  BarChart3,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function AboutSection() {
    const stats = [
      { value: "500+", label: "Active Patients" },
      { value: "50+", label: "Wellness Centers" },
      { value: "98%", label: "Satisfaction Rate" },
      { value: "24/7", label: "System Reliability" },
    ];

    const features = [
      {
        icon: Calendar,
        title: "Smart Scheduling",
        description:
          "Automated therapy scheduling with intelligent conflict resolution and optimal time allocation",
      },
      {
        icon: Bell,
        title: "Care Notifications",
        description:
          "Automated pre/post-procedure alerts and personalized wellness reminders",
      },
      {
        icon: Activity,
        title: "Real-Time Tracking",
        description:
          "Monitor therapy progress with visual analytics and personalized recovery milestones",
      },
      {
        icon: Heart,
        title: "Patient Feedback",
        description:
          "Integrated feedback loops to refine treatments and enhance healing outcomes",
      },
      {
        icon: BarChart3,
        title: "Analytics Dashboard",
        description:
          "Comprehensive insights into patient progress and practice performance",
      },
      {
        icon: Shield,
        title: "Secure & Compliant",
        description:
          "Healthcare-grade security with full compliance for patient data protection",
      },
    ];

    const benefits = [
      {
        icon: Users,
        title: "Enhanced Patient Engagement",
        description:
          "Empower patients with transparent progress tracking and personalized care pathways.",
      },
      {
        icon: CheckCircle,
        title: "Improved Treatment Outcomes",
        description:
          "Leverage real-time monitoring and analytics to refine therapies for better results.",
      },
      {
        icon: Clock,
        title: "Time & Resource Efficiency",
        description:
          "Automated scheduling and reminders reduce admin workload and save valuable time.",
      },
      {
        icon: Sparkles,
        title: "Modern Digital Experience",
        description:
          "Blend ancient Ayurvedic wisdom with intuitive, tech-driven tools for practitioners.",
      },
      {
        icon: Smartphone,
        title: "Seamless Accessibility",
        description:
          "Access schedules, feedback, and progress reports anytime on mobile or desktop.",
      },
      {
        icon: Heart,
        title: "Stronger Doctor-Patient Bond",
        description:
          "Boost satisfaction rates with timely updates, compassionate care, and trust.",
      },
    ];




  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="container py-24 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-wellness-soft text-wellness-green border-wellness-green/20">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Ayurvedic Innovation
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                  Modern
                  <span className="block text-transparent bg-gradient-to-r from-wellness-green to-wellness-blue bg-clip-text">
                    Panchakarma
                  </span>
                  Management
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Bridging ancient Ayurvedic wisdom with cutting-edge digital
                  efficiency. Streamline your wellness practice with intelligent
                  scheduling, patient tracking, and automated care protocols.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <WellnessButton variant="wellness" size="xl" asChild>
                  <a href="/dashboard">
                    Explore Therapy
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </WellnessButton>
                <WellnessButton variant="soft" size="xl">
                  Schedule Demo
                </WellnessButton>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-wellness-green">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:ml-8">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="images/herbs.jpg"
                  alt="Modern Panchakarma wellness center with traditional and digital elements"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wellness-green/20 to-transparent" />
              </div>

              {/* Floating UI Elements */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-wellness p-4 border">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-wellness-green to-wellness-blue rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Patient Progress</p>
                    <p className="text-sm text-muted-foreground">
                      96% completion rate
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-wellness p-4 border">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-wellness-amber rounded-full flex items-center justify-center">
                    <Bell className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Smart Alerts</p>
                    <p className="text-sm text-muted-foreground">
                      Automated care reminders
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-wellness-soft/30">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="bg-wellness-green/10 text-wellness-green border-wellness-green/20 mb-4">
              <Leaf className="h-3 w-3 mr-1" />
              Comprehensive Features
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Everything You Need for Modern Ayurvedic Practice
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From automated scheduling to real-time progress tracking, our
              platform integrates seamlessly with your traditional Panchakarma
              practices while enhancing efficiency and patient care.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon; // 👈 Capitalized alias
              return (
                <Card
                  key={index}
                  className="border-0 shadow-card hover:shadow-wellness transition-all duration-300 bg-white/80 backdrop-blur"
                >
                  <CardHeader className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-wellness-green to-wellness-blue rounded-lg flex items-center justify-center mb-4 border-2 border-wellness-green shadow-md">
                      <Icon className="h-7 w-7 text-white drop-shadow-lg " />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ✅ Benefits Section */}
      <section id="benefits" className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="bg-wellness-blue/10 text-wellness-blue border-wellness-blue/20 mb-4">
              Proven Benefits
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Transform Wellness for Patients & Practitioners
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience holistic healing with enhanced efficiency, improved
              patient outcomes, and sustainable growth for your Ayurvedic
              practice.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="border-0 shadow-card hover:shadow-wellness transition-all duration-300 bg-white/80 backdrop-blur"
                >
                  <CardHeader className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-wellness-green to-wellness-blue rounded-lg mb-4 border-2 border-wellness-green shadow-md">
                      <Icon className="h-7 w-7 text-white drop-shadow-lg" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-base leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ✅ Contact Section */}
      <section id="contact" className="py-24 bg-wellness-soft/30">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="bg-wellness-green/10 text-wellness-green border-wellness-green/20 mb-4">
              Contact Us
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Get in Touch with Ayushutra
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions or need assistance? Our team is here to help you
              make the most of your Ayurvedic journey.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur rounded-xl shadow-card p-8">
            <form className="grid gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-wellness-green"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-wellness-green"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-wellness-green"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-wellness-green to-wellness-blue text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
