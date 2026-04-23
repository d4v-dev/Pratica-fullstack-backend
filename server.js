const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/skills", (req, res) => {
  res.json([
    { id: 1, name: "React.js", level: "Básico" },
    { id: 2, name: "SQL", level: "Básico" },
    { id: 3, name: "TypeScript", level: "Básico" },
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Backend rodando na porta ${PORT}`);
});
