const MemeCard = ({ meme }) => {
  return (
    <div
      className="bg-white/80 backdrop-blur-xl rounded-2xl 
                 shadow-md hover:shadow-2xl transition-all duration-300
                 p-4 flex flex-col items-center border border-white/60
                 hover:-translate-y-2"
    >
      <div className="w-full h-40 flex justify-center overflow-hidden rounded-lg mb-3">
        <img
          src={meme.url}
          alt={meme.name}
          className="object-contain h-full w-full transition-transform duration-300 hover:scale-110"
        />
      </div>

      <h3 className="font-semibold text-gray-900 text-center text-sm">
        {meme.name}
      </h3>

      <p className="text-xs text-gray-500 mt-1">
        {meme.width}×{meme.height}px
      </p>
    </div>
  );
};

export default MemeCard;
