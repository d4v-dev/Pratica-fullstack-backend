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

app.listen(3000, () => {
  console.log("🚀 Backend: http://localhost:3000/api/skills");
});
