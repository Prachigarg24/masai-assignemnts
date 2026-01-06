import { useEffect, useRef, useState } from "react";
import { products } from "../data/products";

export default function LiveSearch() {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(products);
  const [searching, setSearching] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    setSearching(true);

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      const result = products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase())
      );
      setFiltered(result);
      setSearching(false);
    }, 300);

    return () => clearTimeout(timerRef.current);
  }, [query]);

  return (
    <div>
      <h2>Live Product Search</h2>
      <input
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      {searching && <p>Searching...</p>}

      <ul>
        {filtered.map(p => (
          <li key={p.id}>
            {p.name} | {p.category} | ₹{p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
