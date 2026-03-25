import { ReactTyped } from "react-typed";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

	return (
		<> 
		  <section className="flex flex-col-reverse md:flex-row w-full min-h-screen justify-center items-center px-4 sm:px-8 py-8 gap-8 md:gap-12">
            {/* Hero Section */}
            <div className="flex flex-col justify-center items-start w-full md:w-1/2 gap-4 sm:gap-6">
              <h1 className="flex flex-col font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                Connect with your{" "}
                <ReactTyped
                  className="text-green-400"
                  strings={[
                    "Mentors",
                    "Students",
                    "Dreams",
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  backDelay={2000}
                  loop
                />
              </h1>
              <p className="text-base sm:text-lg text-gray-800 max-w-lg">
                Unlock your potential and connect with millions of learners worldwide. Start your learning journey today.
              </p>
              
              {/* CTA Button */}
              <button onClick={() => navigate("/auth/signup")} className="primary-btn mt-4">
                Get Started
              </button>
            </div>
            
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center items-center min-h-64 sm:min-h-96">
              <img 
                src="/puzzle-connect-join-assemble-puzzle-svgrepo-com.svg" 
                alt="Puzzle connection illustration"
                className="w-full max-w-xs h-auto sm:max-w-sm md:max-w-md lg:max-w-lg"
              />
            </div>
          </section>
		</>
	)
}
