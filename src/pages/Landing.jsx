import { ReactTyped } from "react-typed";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

	return (
		<>
		  <section className="flex flex-col-reverse md:flex-row w-full min-h-screen p-8">
        {/* Hero Section */}
        <div className="flex flex-col justify-center items-start p-4 gap-2">
          <h1 className="flex flex-col font-extrabold">
            Connect with your {" "}
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
          <p>
            Unlock your potential and connect with millions of learners worldwide. Start your learning journey today.
          </p>
          
          {/* CTA Button */}
          <button onClick={() => navigate("/auth/signup")} className="primary-btn">
            Get Started
          </button>
        </div>
        <div className="h-24 w-full w-[40%] flex justify-center items-center p-4">
          <img src="/hero.svg" />
        </div>
        </section>
		</>
	)
}