// controllers/mahasiswaController.js

const Mahasiswa = require('../models/mahasiswa');

// Fungsi untuk menambahkan data mahasiswa ke MongoDB
const tambahMahasiswa = async (req, res) => {
  try {
    // Membuat instance baru dari model Mahasiswa dengan data dari req.body
    const mahasiswaBaru = new Mahasiswa({
      nama: req.body.nama,
      nim: req.body.nim,
      jurusan: req.body.jurusan
    });

    // Simpan data mahasiswa baru ke database
    await mahasiswaBaru.save();

    // Kirim respon sukses dengan data yang baru ditambahkan
    res.status(201).json({
      message: 'Data mahasiswa berhasil ditambahkan!',
      data: mahasiswaBaru
    });
  } catch (error) {
    // Jika terjadi error, kirim respon error dengan pesan error
    res.status(400).json({ message: error.message });
  }
};

// Ekspor fungsi tambahMahasiswa untuk digunakan di route
module.exports = { tambahMahasiswa };