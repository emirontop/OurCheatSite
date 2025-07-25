import { useState } from "react";

const scripts = [
  {
    name: "Godmode",
    description: "Karakteri ölümsüz yapar.",
    code: `game.Players.LocalPlayer.Character.Humanoid:Destroy()`,
  },
];

export default function Home() {
  const [tab, setTab] = useState("home");
  const [copiedId, setCopiedId] = useState(null);

  const copyCode = async (text, id) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <div
      style={{
        fontFamily: "Segoe UI",
        background: "#0f0f0f",
        color: "#eee",
        minHeight: "100vh",
        padding: "40px 20px",
        maxWidth: "900px",
        margin: "auto",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#4fd1c5" }}>🌀 Emocii Hub</h1>

      {/* Tab Butonları */}
      <div style={{ textAlign: "center", marginBottom: 30 }}>
        <button
          onClick={() => setTab("home")}
          style={{
            padding: "10px 25px",
            marginRight: 10,
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
            backgroundColor: tab === "home" ? "#4fd1c5" : "#1c1c1c",
            color: tab === "home" ? "#000" : "#eee",
          }}
        >
          Anasayfa
        </button>
        <button
          onClick={() => setTab("credits")}
          style={{
            padding: "10px 25px",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
            backgroundColor: tab === "credits" ? "#4fd1c5" : "#1c1c1c",
            color: tab === "credits" ? "#000" : "#eee",
          }}
        >
          Credits
        </button>
      </div>

      {/* İçerik */}
      {tab === "home" && (
        <>
          <p
            style={{
              maxWidth: 600,
              margin: "auto",
              marginBottom: 30,
              fontSize: 18,
              lineHeight: 1.5,
              color: "#bbb",
            }}
          >
            Emocii Hub, oyunlar için en iyi scriptlerin toplandığı ve kolayca
            erişilebildiği bir platformdur. Scriptleri seç, kopyala ve oyunda
            kullan!
          </p>

          {scripts.map((s, i) => (
            <div
              key={i}
              style={{
                background: "#1c1c1c",
                padding: 20,
                borderRadius: 10,
                marginBottom: 20,
                boxShadow: "0 0 10px rgba(0,255,255,0.1)",
                maxWidth: 700,
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "left",
              }}
            >
              <h2 style={{ color: "#7fffd4" }}>{s.name}</h2>
              <p>{s.description}</p>
              <pre
                style={{
                  background: "#111",
                  color: "#0f0",
                  padding: 12,
                  borderRadius: 6,
                  overflowX: "auto",
                  whiteSpace: "pre-wrap",
                }}
              >
                {s.code}
              </pre>
              <button
                onClick={() => copyCode(s.code, i)}
                style={{
                  marginTop: 12,
                  background: "#4fd1c5",
                  border: "none",
                  borderRadius: 6,
                  padding: "10px 18px",
                  cursor: "pointer",
                  color: "#000",
                }}
              >
                {copiedId === i ? "✔ Kopyalandı" : "Kopyala"}
              </button>
            </div>
          ))}
        </>
      )}

      {tab === "credits" && (
        <div
          style={{
            maxWidth: 600,
            margin: "auto",
            padding: 20,
            background: "#1c1c1c",
            borderRadius: 10,
            boxShadow: "0 0 10px rgba(0,255,255,0.1)",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: "#7fffd4", marginBottom: 15 }}>Credits</h2>
          <p style={{ marginBottom: 20, color: "#bbb" }}>
            Bu site Emir tarafından hazırlanmıştır.
          </p>
          <a
            href="https://discord.gg/your-discord-link"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#7289da",
              color: "white",
              padding: "12px 24px",
              borderRadius: 8,
              fontWeight: "bold",
              textDecoration: "none",
              fontSize: 16,
              boxShadow: "0 0 8px #7289da",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#5b6eae")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#7289da")}
          >
            Discord Sunucusuna Katıl
          </a>
          <p style={{ marginTop: 30, color: "#777", fontSize: 14 }}>
            &copy; 2025 Emocii Hub
          </p>
        </div>
      )}
    </div>
  );
}
