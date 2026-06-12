import mentor from "../assets/Testimonials/mentor.jpeg";

function MentorSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Mentor Image */}

        <div className="flex justify-center">

          <img
            src={mentor}
            alt="mentor"
            className="rounded-3xl w-full max-w-md border border-zinc-800 shadow-2xl"
          />

        </div>

        {/* Mentor Content */}

        <div>

          <p className="text-yellow-500 uppercase tracking-widest mb-3">
            Meet Your Mentor
          </p>

          <h2 className="text-4xl font-bold mb-4">
            Dr. Sashi Bhusan Nayak
          </h2>

          <p className="text-yellow-500 text-lg mb-6">
  Researcher • Life Coach • Educator • Mentor
</p>

<p className="text-zinc-400 leading-8">
  Dr. Sashi Bhusan Nayak is an accomplished educator,
  researcher and life coach with expertise in Computer
  Science, Hypnosis and Hypnotherapy. He has been
  recognized with prestigious honors including the
  Junior Scientist Award and the International Research
  Award in Science, Technology and Management. Through
  his guidance, students are encouraged to develop
  discipline, leadership, self-awareness and continuous
  personal growth while achieving excellence in both
  academics and life.
</p>

          <div className="mt-8 grid grid-cols-2 gap-6">

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">

              <h3 className="text-3xl font-bold text-yellow-500">
                500+
              </h3>

              <p className="text-zinc-400 mt-2">
                Students Guided
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">

              <h3 className="text-3xl font-bold text-yellow-500">
                50+
              </h3>

              <p className="text-zinc-400 mt-2">
                Workshops Conducted
              </p>

            </div>

          </div>

          <div className="mt-8">

            <button className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition">
              Learn From Mentor
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default MentorSection;