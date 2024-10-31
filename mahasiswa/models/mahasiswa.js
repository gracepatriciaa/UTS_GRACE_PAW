// models/Mahasiswa.js

const mongoose = require('mongoose');

// Definisikan struktur data mahasiswa
const MahasiswaSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true
  },
  nim: {
    type: String,
    required: true,
    unique: true
  },
  jurusan: {
    type: String,
    required: true
  }
});

// Ekspor model untuk digunakan di bagian lain aplikasi
module.exports = mongoose.model('Mahasiswa', MahasiswaSchema);