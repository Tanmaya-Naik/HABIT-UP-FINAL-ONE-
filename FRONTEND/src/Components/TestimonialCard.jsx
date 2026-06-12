function TestimonialCard({
  image,
  name,
  role,
  feedback,
}) {
  return (
    <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-yellow-500 transition-all duration-300">
      
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mx-auto border-2 border-yellow-500"
      />

      <h3 className="text-xl font-semibold text-center mt-4">
        {name}
      </h3>

      <p className="text-yellow-500 text-center text-sm">
        {role}
      </p>

      <p className="text-zinc-400 mt-4 text-center leading-7">
        "{feedback}"
      </p>

    </div>
  );
}

export default TestimonialCard;