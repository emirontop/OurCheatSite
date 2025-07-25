const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

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
  },
  {
    Name: "Script 3",
    Açıklama: "Test amaçlı.",
    Script: `print("Hello from Emocii Hub!")`
  }
];

app.get("/", (req, res) => {
  const html = `
  <!DOCTYPE html>
  <html lang="tr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Emocii Hub</title>
    <style>
      body {
        background-color: #0f0f0f;
        color: #eee;
        font-family: 'Segoe UI', sans-serif;
        padding: 30px;
        text-align: center;
      }
      h1 {
        font-size: 3rem;
        color: #4fd1c5;
      }
      .card {
        background: #1c1c1c;
        padding: 20px;
        margin: 20px auto;
        border-radius: 12px;
        max-width: 600px;
        box-shadow: 0 0 20px rgba(0,255,255,0.1);
        text-align: left;
      }
      .card h2 {
        margin-top: 0;
        color: #7fffd4;
      }
      pre {
        background: #111;
        padding: 10px;
        border-radius: 8px;
        overflow-x: auto;
        color: #00ff88;
      }
      button {
        margin-top: 10px;
        background: #4fd1c5;
        border: none;
        color: black;
        padding: 10px 20px;
        border-radius: 8px;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <h1>🌀 Emocii Hub</h1>
    <p>Hazırlayan: Emir</p>
    ${scripts.map((s, i) => `
      <div class="card">
        <h2>${s.Name}</h2>
        <p>${s.Açıklama}</p>
        <pre id="code-${i}">${s.Script}</pre>
        <button onclick="copy(${i})">Kopyala</button>
      </div>
    `).join("")}
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
  res.send(html);
});

app.listen(PORT, () => {
  console.log("Emocii Hub yayında: http://localhost:" + PORT);
});
