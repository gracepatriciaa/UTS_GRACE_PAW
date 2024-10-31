// routes/mahasiswaRoutes.js

const express = require('express');
const router = express.Router();
const { tambahMahasiswa } = require('../controllers/mahasiswaController');

// Route untuk menambahkan data mahasiswa (POST)
router.post('/tambah', tambahMahasiswa);

module.exports = router;