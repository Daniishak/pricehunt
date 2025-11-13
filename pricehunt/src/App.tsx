// src/App.tsx
import { useState } from "react";
import type { ProductOffer } from "./types";
import { OFFERS } from "./fakeData";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ProductOffer[]>([]);

  function searchProduct() {
    // 1. Filtrera på namn utifrån vad användaren skrivit
    const filtered = OFFERS.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );

    // 2. Sortera efter pris (billigast först)
    const sorted = [...filtered].sort((a, b) => a.price - b.price);

    setResults(sorted);
  }

  return (
    <div style={{ padding: 20, fontFamily: "system-ui" }}>
      <h1>PriceHunt</h1>
      <p>Sök efter en produkt och se billigaste erbjudandena.</p>

      {/* Input */}
      <input
        placeholder="Skriv produkt... t.ex. AirPods Pro"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: 8, width: 300 }}
      />

      <button
        onClick={searchProduct}
        style={{ marginLeft: 10, padding: "8px 12px", cursor: "pointer" }}
      >
        Sök
      </button>

      <h2 style={{ marginTop: 24 }}>Resultat</h2>
      {results.length === 0 && <p>Inga resultat än... prova att söka!</p>}

      <ul>
        {results.map((p) => (
          <li key={p.id} style={{ marginBottom: 8 }}>
            <strong>{p.name}</strong> — {p.price} kr <br />
            <span>Butik: {p.store}</span>
            {" · "}
            <a href={p.url} target="_blank" rel="noreferrer">
              Öppna länk
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
