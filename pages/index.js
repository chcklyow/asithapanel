import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState("");
  const [coin, setCoin] = useState(null);

  const react = async () => {
    setStatus("⏳ processing...");
    const r = await fetch("/api/react", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url })
    });
    const d = await r.json();
    setStatus(d.success ? "✅ sukses" : "❌ gagal");
  };

  const cekCoin = async () => {
    const r = await fetch("/api/me");
    const d = await r.json();
    setCoin(d.coins);
  };

  return (
    <main style={{ padding: 40 }}>
      <h2>REACT SALURAN WHATSAPP BY @danar11._</h2>

      <input
        placeholder="Link post channel"
        value={url}
        onChange={e => setUrl(e.target.value)}
        style={{ width: "100%", padding: 12 }}
      />

      <div style={{ marginTop: 10 }}>
        <button onClick={react}>GAS ⚡</button>
        <button onClick={cekCoin} style={{ marginLeft: 10 }}>
          Cek Coin
        </button>
      </div>

      <p>{status}</p>
      {coin !== null && <p>💰 Coin: {coin}</p>}
    </main>
  );
        }
