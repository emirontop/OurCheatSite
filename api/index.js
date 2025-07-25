export default function handler(req, res) {
  const scripts = [
    {
      Name: "Godmode",
      Açıklama: "Ölümsüzlük modu sağlar.",
      Script: `game.Players.LocalPlayer.Character.Humanoid:Destroy()`
    },
    {
      Name: "Fly",
      Açıklama: "Uçma scripti (FE değil).",
      Script: `loadstring(game:HttpGet("https://pastebin.com/raw/abc123"))()`
    }
  ];

  const html = `
  <!DOCTYPE html>
  <html lang="tr">
  <head>
    <meta charset="UTF-8" />
    <title>Emocii Hub</title>
    <style>
      body {
        background: #0f0f0f;
        color: #eee;
        font-family: 'Segoe UI', sans-serif;
        text-align: center;
        padding: 30px;
      }
      .card {
        background: #1a1a1a;
        border-radius: 10px;
        padding: 20px;
        margin: 20px auto;
        max-width: 600px;
        box-shadow: 0 0 20px rgba(0,0,0,0.4);
      }
      pre {
        background: #111;
        color: #0f0;
        padding: 10px;
        border-radius: 6px;
        overflow-x: auto;
      }
      button {
        margin-top: 10px;
        background: #4fd1c5;
        border: none;
        padding: 10px;
        border-radius: 6px;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <h1>🌀 Emocii Hub</h1>
    ${scripts.map((s, i) => `
      <div class="card">
        <h2>${s.Name}</h2>
        <p>${s.Açıklama}</p>
        <pre id="code-${i}">${s.Script}</pre>
        <button onclick="copy(${i})">Kopyala</button>
      </div>
    `).join('')}
    <script>
      function copy(i) {
        const code = document.getElementById('code-' + i).innerText;
        navigator.clipboard.writeText(code)
          .then(() => alert('Kod kopyalandı!'));
      }
    </script>
  </body>
  </html>
  `;
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}
