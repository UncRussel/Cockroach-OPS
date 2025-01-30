const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3000;

// Configuração do Multer para upload de arquivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Servir arquivos estáticos
app.use(express.static('public'));

// Rota para upload de vídeo e foto
app.post('/upload', upload.fields([
  { name: 'video', maxCount: 1 },
  { name: 'foto', maxCount: 1 },
]), (req, res) => {
  res.send('Arquivos enviados com sucesso!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});