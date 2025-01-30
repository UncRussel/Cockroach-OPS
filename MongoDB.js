const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/projeto', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const usuarioSchema = new mongoose.Schema({
  nome: String,
  cpf: String,
  dataNascimento: Date,
  videoPath: String,
  fotoPath: String,
});

const Usuario = mongoose.model('Usuario', usuarioSchema);