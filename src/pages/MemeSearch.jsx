import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MemeGrid from "../components/MemeGrid";

const MemeSearch = () => {
  const [memes, setMemes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState("");

  const API = "https://api.imgflip.com/get_memes";

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMemes(data.data.memes);
        setFiltered(data.data.memes);
      });
  }, []);

  // Search filter
  useEffect(() => {
    const q = query.toLowerCase();
    const results = memes.filter((m) => m.name.toLowerCase().includes(q));
    setFiltered(results);
  }, [query, memes]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      <h1 className="text-center text-5xl font-extrabold text-gray-800 mt-10 drop-shadow">
  Emoji App
</h1>


      <Navbar query={query} setQuery={setQuery} />

      <MemeGrid memes={filtered} />
    </div>
  );
};

export default MemeSearch;
