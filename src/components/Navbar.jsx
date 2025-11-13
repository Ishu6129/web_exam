const Navbar = ({ query, setQuery }) => {
  return (
    <div className="w-full flex justify-center mt-6 px-4">
      <div className="relative w-full max-w-3xl">
        <input
          type="text"
          placeholder="Search memes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-white/70 backdrop-blur-xl border border-white/50 rounded-2xl 
                     px-5 py-3 pl-14 shadow-lg text-gray-700 
                     focus:ring-4 focus:ring-purple-300 focus:outline-none transition-all"
        />
        <span className="absolute top-3.5 left-5 text-gray-400 text-xl">🔍</span>
      </div>
    </div>
  );
};

export default Navbar;
