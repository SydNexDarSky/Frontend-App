import React from "react";
import AnotherSection from "../components/AnotherSection";

export default function Home() {

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Welcome to Educonnect
            </h1>
            <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
              Unlock your potential and connect with millions of learners worldwide. Start your learning journey today.
            </p>
            
            {/* CTA Button */}
            <button className="px-10 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mb-12">
              Get Started Now
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-4xl w-full">
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 text-center">
              <div className="text-4xl font-bold text-blue-300 mb-2">500K+</div>
              <p className="text-gray-300 text-lg">Active Learners</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">10K+</div>
              <p className="text-gray-300 text-lg">Expert Instructors</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 text-center">
              <div className="text-4xl font-bold text-pink-300 mb-2">150+</div>
              <p className="text-gray-300 text-lg">Learning Communities</p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 mb-20">
          <h3 className="text-4xl font-bold text-center mb-12 text-white">Why Choose Educonnect?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl p-8 text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🎓</div>
              <h4 className="text-xl font-bold mb-2">World-Class Courses</h4>
              <p className="text-blue-50">Premium education from top instructors</p>
            </div>

            <div className="group bg-gradient-to-br from-green-400 to-teal-600 rounded-2xl p-8 text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">💡</div>
              <h4 className="text-xl font-bold mb-2">Innovative Learning</h4>
              <p className="text-green-50">Interactive and engaging content</p>
            </div>

            <div className="group bg-gradient-to-br from-yellow-400 to-orange-600 rounded-2xl p-8 text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🌟</div>
              <h4 className="text-xl font-bold mb-2">Expert Mentors</h4>
              <p className="text-orange-50">Learn from industry professionals</p>
            </div>

            <div className="group bg-gradient-to-br from-red-400 to-pink-600 rounded-2xl p-8 text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🚀</div>
              <h4 className="text-xl font-bold mb-2">Fast Growth</h4>
              <p className="text-red-50">Accelerate your career today</p>
            </div>
          </div>
        </div>

        {/* Colorful Call to Action */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 mb-20">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h3 className="text-4xl font-bold mb-4">Ready to Transform Your Learning?</h3>
            <p className="text-xl mb-8 text-gray-100">Join thousands of students discovering their potential every day</p>
            <button className="px-12 py-4 bg-white text-purple-600 font-bold text-lg rounded-full hover:bg-gray-100 transform hover:scale-110 transition-all duration-300 shadow-lg">
              Start Your Free Trial
            </button>
          </div>
        </div>

        {/* Another Section Component */}
        <div className="relative z-10">
          <AnotherSection />
        </div>
      </section>
    </>
  )
}
