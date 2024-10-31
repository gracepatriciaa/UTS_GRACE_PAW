const express = require('express');
const mongoose = require('mongoose');
const mahasiswaRoutes = require('./routes/mahasiswaRoutes'); // Pastikan path ini benar

const app = express();
app.use(express.json());

// Koneksi ke MongoDB
mongoose.connect('mongodb://localhost:27017/dbPariwisata', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Berhasil terhubung ke MongoDB');
}).catch(error => {
  console.error('Gagal terhubung ke MongoDB:', error.message);
});

// Route mahasiswa
app.use('/api/mahasiswa', mahasiswaRoutes);

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server berjalan di port ${3000}');
});

// link github https://github.com/gracepatriciaa/UTS_GRACE_PAW