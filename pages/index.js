export default function Home() {
  const scripts = [
    {
      name: "Godmode",
      description: "Karakteri ölümsüz yapar.",
      code: `game.Players.LocalPlayer.Character.Humanoid:Destroy()`
    },
    {
      name: "Fly",
      description: "Uçma scripti.",
      code: `loadstring(game:HttpGet("https://pastebin.com/raw/abc123"))()`
    },
    {
      name: "Print",
      description: "Test scripti.",
      code: `print("Hello from Emocii Hub!")`
    }
  ];

  const copyCode = async (text) => {
    await navigator.clipboard.writeText(text);
    alert("Kod kopyalandı!");
  };

  return (
    <div style={{
      fontFamily: 'Segoe UI',
      background: '#0f0f0f',
      color: '#eee',
      minHeight: '100vh',
      padding: '40px'
    }}>
      <h1 style={{ textAlign: 'center', color: '#4fd1c5' }}>🌀 Emocii Hub</h1>

      {scripts.map((s, i) => (
        <div key={i} style={{
          background: '#1c1c1c',
          padding: '20px',
          borderRadius: '10px',
          margin: '20px auto',
          maxWidth: '700px',
          boxShadow: '0 0 10px rgba(0,255,255,0.1)'
        }}>
          <h2 style={{ color: '#7fffd4' }}>{s.name}</h2>
          <p>{s.description}</p>
          <pre style={{
            background: '#111',
            padding: '10px',
            borderRadius: '6px',
            overflowX: 'auto',
            color: '#0f0'
          }}>
            <code>{s.code}</code>
          </pre>
          <button onClick={() => copyCode(s.code)} style={{
            marginTop: '10px',
            background: '#4fd1c5',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '6px',
            cursor: 'pointer',
            color: 'black'
          }}>
            Kopyala
          </button>
        </div>
      ))}
    </div>
  );
  }
