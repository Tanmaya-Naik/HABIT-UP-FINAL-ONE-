import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Testimonial from "../Components/Testimonial";
import FeatureCard from "../Components/FeatureCard";
import MentorSection from "../Components/MentorSection";
import Footer from "../Components/Footer";

function LandingPage() {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <Navbar />

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-8 py-24 flex flex-col md:flex-row items-center justify-between gap-16">

        <div className="max-w-xl">

          <p className="text-yellow-500 mb-4 uppercase tracking-widest">
            Transform Yourself
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build Better Habits.
            <br />
            Learn Consistently.
            <br />
            Grow Every Day.
          </h1>

          <p className="text-zinc-400 mt-6 text-lg">
            HabitUP helps students
            develop discipline,
            consistency and lifelong
            learning through guided
            habits and mentor-driven
            content.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">

            <Link
              to={
                localStorage.getItem(
                  "token"
                )
                  ? "/dashboard"
                  : "/signup"
              }
            >
              <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition w-full sm:w-auto">
                Start Journey →
              </button>
            </Link>

            <a href="#features">
              <button className="border border-zinc-700 px-6 py-3 rounded-lg hover:border-yellow-500 transition w-full sm:w-auto">
                Learn More
              </button>
            </a>

          </div>

        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1508672019048-805c876b67e2"
            alt="growth"
            className="rounded-3xl w-full max-w-lg shadow-2xl"
          />
        </div>

      </section>

      {/* FEATURES */}

      <section
        id="features"
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold">
            Why HabitUP?
          </h2>

          <p className="text-zinc-400 mt-4">
            Everything you need to build
            discipline and grow
            consistently.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <FeatureCard
            icon="🎯"
            title="Habit Tracking"
            description="Track daily habits and stay accountable."
          />

          <FeatureCard
            icon="📚"
            title="Learning Resources"
            description="Access mentor-curated learning content."
          />

          <FeatureCard
            icon="🔥"
            title="Consistency"
            description="Build momentum through daily action."
          />

          <FeatureCard
            icon="🧠"
            title="Personal Growth"
            description="Develop skills and transform your mindset."
          />

        </div>

      </section>

      {/* MENTOR */}

      <MentorSection />

      {/* TESTIMONIALS */}

      <section
        style={{
          padding: "50px 40px",
        }}
      >

        <h2
          style={{
            color: "#F5B400",
            marginBottom: "30px",
          }}
        >
          Student Success Stories
        </h2>

       <Testimonial />

      </section>

      <Footer />

    </div>
  );
}

export default LandingPage;