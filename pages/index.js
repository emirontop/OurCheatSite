import { useState, useEffect } from "react";

const scripts = [
  {
    id: 1,
    name: "Godmode",
    description: "Karakteri ölümsüz yapar.",
    code: `game.Players.LocalPlayer.Character.Humanoid:Destroy()`,
    category: "Karakter",
    popularity: 95
  },
  {
    id: 2,
    name: "Fly",
    description: "Karakterin uçmasını sağlar.",
    code: `local plr = game:GetService("Players").LocalPlayer
local char = plr.Character
local humanoid = char:WaitForChild("Humanoid")
local flySpeed = 50

-- Uçuş mekanizması buraya gelecek`,
    category: "Hareket",
    popularity: 87
  },
  {
    id: 3,
    name: "Noclip",
    description: "Karakterin nesnelerin içinden geçmesini sağlar.",
    code: `game:GetService('RunService').Stepped:Connect(function()
    game.Players.LocalPlayer.Character.Head.CanCollide = false
    game.Players.LocalPlayer.Character.Torso.CanCollide = false
end)`,
    category: "Hareket",
    popularity: 92
  },
  {
    id: 4,
    name: "Esp",
    description: "Diğer oyuncuları vurgular.",
    code: `for i, v in pairs(game:GetService("Players"):GetPlayers()) do
    if v ~= game:GetService("Players").LocalPlayer then
        -- ESP kodu buraya gelecek
    end
end`,
    category: "Görsel",
    popularity: 78
  },
];

export default function Home() {
  const [tab, setTab] = useState("home");
  const [copiedId, setCopiedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  // Simüle edilmiş yükleme efekti
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const copyCode = async (text, id) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  // Filtreleme fonksiyonu
  const filteredScripts = scripts.filter(script => {
    const matchesSearch = script.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          script.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || script.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Kategorileri al
  const categories = ["all", ...new Set(scripts.map(s => s.category))];

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', 'Roboto', sans-serif",
        background: "linear-gradient(135deg, #0a0a18 0%, #121230 100%)",
        color: "#f0f0f0",
        minHeight: "100vh",
        padding: "0",
        maxWidth: "1200px",
        margin: "0 auto",
        boxShadow: "0 0 50px rgba(0, 0, 50, 0.5)",
        position: "relative",
        overflowX: "hidden"
      }}
    >
      {/* Dekoratif elementler */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "300px",
        background: "radial-gradient(circle at center, rgba(79, 209, 197, 0.15) 0%, transparent 70%)",
        zIndex: 0
      }}></div>
      
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "300px",
        background: "radial-gradient(circle at center, rgba(127, 255, 212, 0.1) 0%, transparent 70%)",
        zIndex: 0
      }}></div>
      
      {/* Ana içerik */}
      <div style={{ position: "relative", zIndex: 1, padding: "30px" }}>
        {/* Başlık ve Navigasyon */}
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          marginBottom: "40px",
          textAlign: "center"
        }}>
          <h1 style={{ 
            fontSize: "2.8rem", 
            fontWeight: "800", 
            background: "linear-gradient(to right, #7fffd4, #4fd1c5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            margin: "20px 0",
            letterSpacing: "1px",
            textShadow: "0 0 20px rgba(127, 255, 212, 0.3)"
          }}>
            🌀 Emocii Hub
          </h1>
          
          <p style={{ 
            maxWidth: "700px", 
            margin: "0 auto 30px", 
            fontSize: "1.1rem", 
            lineHeight: "1.6", 
            color: "#c5c5f0" 
          }}>
            Emocii Hub, oyunlar için en iyi scriptlerin toplandığı ve kolayca
            erişilebildiği bir platformdur. Scriptleri seç, kopyala ve oyunda kullan!
          </p>
          
          {/* Tab Butonları */}
          <div style={{ 
            display: "flex", 
            gap: "15px", 
            marginBottom: "30px",
            background: "rgba(20, 20, 40, 0.7)",
            borderRadius: "50px",
            padding: "8px",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(127, 255, 212, 0.2)"
          }}>
            <button
              onClick={() => setTab("home")}
              style={{
                padding: "12px 30px",
                borderRadius: "30px",
                border: "none",
                cursor: "pointer",
                background: tab === "home" 
                  ? "linear-gradient(90deg, #4fd1c5, #7fffd4)" 
                  : "transparent",
                color: tab === "home" ? "#000" : "#eee",
                fontWeight: "600",
                fontSize: "1rem",
                transition: "all 0.3s ease",
                boxShadow: tab === "home" ? "0 5px 15px rgba(79, 209, 197, 0.4)" : "none"
              }}
            >
              Anasayfa
            </button>
            <button
              onClick={() => setTab("credits")}
              style={{
                padding: "12px 30px",
                borderRadius: "30px",
                border: "none",
                cursor: "pointer",
                background: tab === "credits" 
                  ? "linear-gradient(90deg, #4fd1c5, #7fffd4)" 
                  : "transparent",
                color: tab === "credits" ? "#000" : "#eee",
                fontWeight: "600",
                fontSize: "1rem",
                transition: "all 0.3s ease",
                boxShadow: tab === "credits" ? "0 5px 15px rgba(79, 209, 197, 0.4)" : "none"
              }}
            >
              Credits
            </button>
          </div>
        </div>

        {/* İçerik */}
        {isLoading ? (
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            height: "300px" 
          }}>
            <div style={{
              width: "60px",
              height: "60px",
              border: "5px solid rgba(79, 209, 197, 0.3)",
              borderTop: "5px solid #4fd1c5",
              borderRadius: "50%",
              animation: "spin 1s linear infinite"
            }}></div>
          </div>
        ) : tab === "home" ? (
          <div>
            {/* Filtreleme ve Arama */}
            <div style={{ 
              display: "flex", 
              gap: "20px", 
              marginBottom: "30px",
              flexWrap: "wrap"
            }}>
              <div style={{ flex: 1, minWidth: "250px" }}>
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  background: "rgba(20, 20, 40, 0.7)", 
                  borderRadius: "10px", 
                  padding: "10px 15px",
                  border: "1px solid rgba(127, 255, 212, 0.2)"
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7fffd4" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                  <input
                    type="text"
                    placeholder="Script ara..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#fff",
                      padding: "8px 12px",
                      fontSize: "1rem",
                      width: "100%",
                      outline: "none"
                    }}
                  />
                </div>
              </div>
              
              <div style={{ minWidth: "200px" }}>
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  background: "rgba(20, 20, 40, 0.7)", 
                  borderRadius: "10px", 
                  padding: "10px 15px",
                  border: "1px solid rgba(127, 255, 212, 0.2)"
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7fffd4" strokeWidth="2">
                    <path d="M3 6h18M7 12h10M5 18h14"></path>
                  </svg>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#fff",
                      padding: "8px 12px",
                      fontSize: "1rem",
                      width: "100%",
                      outline: "none",
                      cursor: "pointer"
                    }}
                  >
                    {categories.map(category => (
                      <option key={category} value={category} style={{ background: "#121230" }}>
                        {category === "all" ? "Tüm Kategoriler" : category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
            {/* Script Listesi */}
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", 
              gap: "25px",
              marginBottom: "50px"
            }}>
              {filteredScripts.map(script => (
                <div
                  key={script.id}
                  style={{
                    background: "linear-gradient(145deg, rgba(28, 28, 44, 0.8), rgba(18, 18, 36, 0.8))",
                    padding: "25px",
                    borderRadius: "15px",
                    boxShadow: "0 8px 25px rgba(0, 5, 20, 0.4)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(127, 255, 212, 0.15)",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  <div style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    background: "rgba(20, 20, 40, 0.7)",
                    padding: "5px 15px",
                    borderBottomLeftRadius: "15px",
                    fontSize: "0.85rem",
                    color: "#7fffd4"
                  }}>
                    {script.category}
                  </div>
                  
                  <div style={{ 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center",
                    marginBottom: "15px"
                  }}>
                    <h2 style={{ 
                      color: "#7fffd4", 
                      fontSize: "1.4rem",
                      margin: "0"
                    }}>
                      {script.name}
                    </h2>
                    <div style={{
                      background: "rgba(127, 255, 212, 0.1)",
                      padding: "5px 10px",
                      borderRadius: "20px",
                      fontSize: "0.85rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px"
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7fffd4" strokeWidth="2">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                      </svg>
                      {script.popularity}%
                    </div>
                  </div>
                  
                  <p style={{ 
                    color: "#c5c5f0", 
                    marginBottom: "20px",
                    lineHeight: "1.6"
                  }}>
                    {script.description}
                  </p>
                  
                  <div style={{ 
                    position: "relative",
                    marginBottom: "20px"
                  }}>
                    <pre
                      style={{
                        background: "rgba(10, 10, 24, 0.7)",
                        color: "#7fffd4",
                        padding: "15px",
                        borderRadius: "8px",
                        overflowX: "auto",
                        whiteSpace: "pre-wrap",
                        fontSize: "0.9rem",
                        lineHeight: "1.5",
                        border: "1px solid rgba(127, 255, 212, 0.1)",
                        maxHeight: "200px",
                        overflowY: "auto"
                      }}
                    >
                      {script.code}
                    </pre>
                  </div>
                  
                  <button
                    onClick={() => copyCode(script.code, script.id)}
                    style={{
                      width: "100%",
                      background: copiedId === script.id 
                        ? "linear-gradient(90deg, #4fd1c5, #7fffd4)" 
                        : "linear-gradient(90deg, rgba(79, 209, 197, 0.2), rgba(127, 255, 212, 0.2))",
                      border: "none",
                      borderRadius: "8px",
                      padding: "12px",
                      cursor: "pointer",
                      color: copiedId === script.id ? "#000" : "#7fffd4",
                      fontWeight: "600",
                      fontSize: "1rem",
                      transition: "all 0.3s ease",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "8px"
                    }}
                  >
                    {copiedId === script.id ? (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        Kopyalandı!
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                        Kodu Kopyala
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
            
            {/* İstatistikler */}
            <div style={{
              background: "rgba(20, 20, 40, 0.7)",
              borderRadius: "15px",
              padding: "25px",
              marginBottom: "40px",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(127, 255, 212, 0.15)"
            }}>
              <h2 style={{ 
                color: "#7fffd4", 
                marginTop: "0",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7fffd4" strokeWidth="2">
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
                Platform İstatistikleri
              </h2>
              
              <div style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
                gap: "20px" 
              }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ 
                    fontSize: "2.5rem", 
                    fontWeight: "700", 
                    color: "#7fffd4" 
                  }}>
                    {scripts.length}
                  </div>
                  <div style={{ color: "#c5c5f0" }}>Script</div>
                </div>
                
                <div style={{ textAlign: "center" }}>
                  <div style={{ 
                    fontSize: "2.5rem", 
                    fontWeight: "700", 
                    color: "#7fffd4" 
                  }}>
                    {categories.length - 1}
                  </div>
                  <div style={{ color: "#c5c5f0" }}>Kategori</div>
                </div>
                
                <div style={{ textAlign: "center" }}>
                  <div style={{ 
                    fontSize: "2.5rem", 
                    fontWeight: "700", 
                    color: "#7fffd4" 
                  }}>
                    24/7
                  </div>
                  <div style={{ color: "#c5c5f0" }}>Çalışma Süresi</div>
                </div>
                
                <div style={{ textAlign: "center" }}>
                  <div style={{ 
                    fontSize: "2.5rem", 
                    fontWeight: "700", 
                    color: "#7fffd4" 
                  }}>
                    ∞
                  </div>
                  <div style={{ color: "#c5c5f0" }}>Desteklenen Oyun</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              padding: "40px",
              background: "linear-gradient(145deg, rgba(28, 28, 44, 0.8), rgba(18, 18, 36, 0.8))",
              borderRadius: "15px",
              boxShadow: "0 8px 25px rgba(0, 5, 20, 0.4)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(127, 255, 212, 0.15)",
              textAlign: "center"
            }}
          >
            <h2 style={{ 
              color: "#7fffd4", 
              marginBottom: "25px",
              fontSize: "2rem"
            }}>
              Credits
            </h2>
            
            <div style={{ 
              display: "flex", 
              flexDirection: "column", 
              alignItems: "center",
              marginBottom: "30px"
            }}>
              <div style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                background: "linear-gradient(45deg, #4fd1c5, #7fffd4)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "20px"
              }}>
                <div style={{
                  width: "110px",
                  height: "110px",
                  borderRadius: "50%",
                  background: "#121230",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "#7fffd4"
                }}>
                  E
                </div>
              </div>
              
              <h3 style={{ 
                color: "#7fffd4", 
                margin: "0 0 10px",
                fontSize: "1.5rem"
              }}>
                Emir
              </h3>
              <p style={{ 
                color: "#c5c5f0", 
                margin: "0",
                maxWidth: "500px",
                lineHeight: "1.6"
              }}>
                Bu site Emir tarafından geliştirilmiş ve tasarlanmıştır. Tüm scriptler topluluk tarafından test edilmiştir.
              </p>
            </div>
            
            <a
              href="https://discord.gg/your-discord-link"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                backgroundColor: "#7289da",
                color: "white",
                padding: "15px 35px",
                borderRadius: "50px",
                fontWeight: "bold",
                textDecoration: "none",
                fontSize: "1.1rem",
                boxShadow: "0 5px 15px rgba(114, 137, 218, 0.4)",
                transition: "all 0.3s ease",
                margin: "20px 0 40px",
                border: "none",
                cursor: "pointer"
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              Discord Sunucusuna Katıl
            </a>
            
            <div style={{ 
              display: "flex", 
              justifyContent: "center", 
              gap: "20px",
              marginTop: "20px"
            }}>
              <div style={{
                background: "rgba(127, 255, 212, 0.1)",
                padding: "15px",
                borderRadius: "10px",
                width: "100px",
                textAlign: "center"
              }}>
                <div style={{ 
                  fontSize: "1.8rem", 
                  fontWeight: "700", 
                  color: "#7fffd4" 
                }}>
                  2025
                </div>
                <div style={{ color: "#c5c5f0", fontSize: "0.9rem" }}>Kuruluş</div>
              </div>
              
              <div style={{
                background: "rgba(127, 255, 212, 0.1)",
                padding: "15px",
                borderRadius: "10px",
                width: "100px",
                textAlign: "center"
              }}>
                <div style={{ 
                  fontSize: "1.8rem", 
                  fontWeight: "700", 
                  color: "#7fffd4" 
                }}>
                  4.8
                </div>
                <div style={{ color: "#c5c5f0", fontSize: "0.9rem" }}>Puan</div>
              </div>
            </div>
            
            <p style={{ 
              marginTop: "40px", 
              color: "#777", 
              fontSize: "0.9rem",
              borderTop: "1px solid rgba(127, 255, 212, 0.1)",
              paddingTop: "20px"
            }}>
              &copy; 2025 Emocii Hub - Tüm hakları saklıdır
            </p>
          </div>
        )}
      </div>
      
      {/* Alt bilgi */}
      <div style={{ 
        textAlign: "center", 
        padding: "20px", 
        color: "#777", 
        fontSize: "0.9rem",
        borderTop: "1px solid rgba(127, 255, 212, 0.1)",
        position: "relative",
        zIndex: "1"
      }}>
        Emocii Hub v1.2.0 | Güncellenme: 25 Temmuz 2025
      </div>
      
      {/* Animasyon stil tanımı */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
