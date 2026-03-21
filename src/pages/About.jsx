import React from "react";

export default function About() {
  return (
    <section className="min-h-screen bg-blue-500">
      {/* Hero Section */}
      <div className="py-20 px-6 max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Educonnect
          </h1>
          <p className="text-2xl text-gray-700 font-light max-w-2xl mx-auto leading-relaxed">
            Your gateway to collaborative learning and meaningful connections.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8 rounded-full"></div>
        </div>
      </div>

      {/* What is Educonnect Section */}
      <div className="mb-20">
        <div className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-2xl transition-shadow duration-300 border-l-4 border-blue-500">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">What is Educonnect?</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Educonnect is an innovative educational learning and connecting platform designed to transform how people learn and collaborate. We bring together students, instructors, and learners from around the world to create an engaging ecosystem where knowledge is shared, communities thrive, and meaningful connections are made.
          </p>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Our Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group bg-gradient-to-br from-blue-400 to-blue-600 p-8 rounded-2xl text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-white mb-3">Learn from Expert Instructors</h3>
            <p className="text-blue-50 leading-relaxed">
              Gain knowledge from experienced instructors across various subjects and disciplines. Access high-quality courses, tutorials, and resources tailored to your learning goals.
            </p>
          </div>

          <div className="group bg-gradient-to-br from-green-400 to-emerald-600 p-8 rounded-2xl text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-2xl font-bold text-white mb-3">Join Vibrant Communities</h3>
            <p className="text-green-50 leading-relaxed">
              Connect with like-minded learners by joining communities based on your interests. Share ideas, collaborate on projects, and grow together with peers who share your passion.
            </p>
          </div>

          <div className="group bg-gradient-to-br from-purple-400 to-indigo-600 p-8 rounded-2xl text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-2xl font-bold text-white mb-3">Direct Communication</h3>
            <p className="text-purple-50 leading-relaxed">
              Communicate directly with other users through our messaging system. Ask questions, seek mentorship, and build relationships with learners and instructors worldwide.
            </p>
          </div>

          <div className="group bg-gradient-to-br from-orange-400 to-red-600 p-8 rounded-2xl text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold text-white mb-3">Collaborative Learning</h3>
            <p className="text-orange-50 leading-relaxed">
              Engage in interactive discussions, group projects, and peer-to-peer learning opportunities. Break down barriers and accelerate your educational journey.
            </p>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 shadow-2xl text-white text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg leading-relaxed text-indigo-50">
          Educonnect is committed to democratizing education and fostering a global community where everyone has access to quality learning resources and meaningful human connections. We believe that education is more powerful when it's collaborative, interactive, and personalized to individual needs.
        </p>
        <div className="mt-8 h-1 w-16 bg-white mx-auto rounded-full"></div>
      </div>
    </section>
  )
}
