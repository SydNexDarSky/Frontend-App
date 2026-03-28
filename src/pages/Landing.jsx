import { ReactTyped } from "react-typed";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row w-full min-h-screen justify-center items-center px-4 sm:px-8 py-8 gap-8 md:gap-12">
        <div className="flex flex-col justify-center items-start w-full md:w-1/2 gap-4 sm:gap-6 text-center md:text-left">
          <h1 className="flex flex-col font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            Connect with your{" "}
            <ReactTyped
              className="text-green-600"
              strings={["Mentors", "Students", "Dreams"]}
              typeSpeed={40}
              backSpeed={50}
              backDelay={2000}
              loop
            />
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-lg mx-auto md:mx-0">
            Unlock your potential and connect with millions of learners worldwide. Start your learning journey today.
          </p>

          <div className="flex gap-4 w-full justify-center md:justify-start">
            <button onClick={() => navigate("/auth/signup")} className="bg-green-600 text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-green-700 transition-all shadow-lg active:scale-95">
              Get Started
            </button>
            <button onClick={() => scrollToSection('about')} className="border border-slate-200 px-8 py-3 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all active:scale-95">
              Explore
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center min-h-64 sm:min-h-96">
          <img
            src="/puzzle-connect-join-assemble-puzzle-svgrepo-com.svg"
            alt="Connection illustration"
            className="w-full max-w-xs h-auto sm:max-w-sm md:max-w-md lg:max-w-lg drop-shadow-xl"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-50 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Powerful Features</h2>
            <p className="text-slate-600">Discover tools designed to make your educational journey seamless and efficient.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2">Smart Matching</h3>
              <p className="text-slate-600">Our AI-driven algorithm connects you with the perfect mentors based on your skill level and goals.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-2">Virtual Classrooms</h3>
              <p className="text-slate-600">Collaborate in real-time with shared whiteboards, video calls, and instant document sharing.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">Progress Tracking</h3>
              <p className="text-slate-600">Stay motivated with detailed analytics and milestones that visualize your growth over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 sm:px-12 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 bg-blue-50 rounded-3xl h-80 flex items-center justify-center">
            <div className="text-6xl opacity-20">🌍</div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">About EduConnect</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              EduConnect is more than just a platform; it's a global community. We are dedicated to breaking down barriers to education by fostering meaningful connections between learners and experts.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Whether you're a student looking for guidance or a professional wanting to give back, we provide the environment for knowledge to thrive.
            </p>
            <button onClick={() => scrollToSection('contact')} className="text-blue-600 font-bold hover:underline">Read our full story →</button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white px-6 sm:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-slate-400 mb-12">Join thousands of others who are already transforming their lives. Reach out or sign up today.</p>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" className="bg-slate-800 border border-slate-700 rounded-xl p-4 focus:outline-none focus:border-blue-500" />
            <input type="email" placeholder="Your Email" className="bg-slate-800 border border-slate-700 rounded-xl p-4 focus:outline-none focus:border-blue-500" />
            <textarea placeholder="Your Message" rows="4" className="bg-slate-800 border border-slate-700 rounded-xl p-4 focus:outline-none focus:border-blue-500 md:col-span-2"></textarea>
            <button type="submit" className="md:col-span-2 bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-xl active:scale-95">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
