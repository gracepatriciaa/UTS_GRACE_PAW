const express = require('express');
const mongoose = require('mongoose');
const mahasiswaRoutes = require('./routes/mahasiswaRoutes');

const app = express();
app.use(express.json());

// Koneksi ke database MongoDB
mongoose.connect('mongodb://localhost:27017/dbPariwisata', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

// Menggunakan route mahasiswa
app.use('/api/mahasiswa', mahasiswaRoutes);

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server berjalan di port ${PORT}');
});