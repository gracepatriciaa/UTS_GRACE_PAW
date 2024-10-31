const mongoose =  require('mongoose');
const MahasiswaSchema = new mongoose.Schema({
    nama : String,
    nim : String,
    jurusan : String
});
module.exports = mongoose.model('Mahasiswa',MahasiswaSchema);