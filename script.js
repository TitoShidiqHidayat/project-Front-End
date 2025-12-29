// Nolan Fortino Ramadhany 245510016
//   Muamar Khadafi Rumbouw

// --- BAGIAN 1: EVENT SAAT WEBSITE DIMUAT (LOAD) ---
window.addEventListener('load', function() {
    let namaPelapor = prompt("Selamat datang di Sistem Lapor Lab. Siapa nama Anda?", "Mahasiswa");
    if (namaPelapor === null || namaPelapor === "") {
        namaPelapor = "Mahasiswa";
    }

    alert("Halo " + namaPelapor + "! Silakan isi form di bawah untuk melaporkan perangkat lab yang rusak.");

    let judulUtama = document.querySelector('h1'); 
    if (judulUtama) {
        judulUtama.style.color = "#0d6efd"; 
        judulUtama.innerHTML = `Selamat Datang, <span style="color: yellow;">${namaPelapor}</span>`;
    }
});


// --- BAGIAN 2: PENGIRIMAN DATA FORM TRADISIONAL ---

const formLapor = document.getElementById('laporForm');
const tombolLapor = document.querySelector('button');

if (formLapor) {
    // Karena PHP Anda mengembalikan halaman HTML penuh, kita tidak pakai event.preventDefault()
    // Kita biarkan form melakukan submit tradisional.

    formLapor.addEventListener('submit', function(event) {
        // Validasi Klien Sederhana (HTML required sudah cukup kuat)

        let yakinLapor = confirm("Apakah data kerusakan yang Anda isi sudah benar?");

        if (yakinLapor) {
            // Jika OK, form akan otomatis terkirim ke simpan_data.php 
            // dan browser akan menampilkan halaman hasil dari PHP tersebut.

            // Kita bisa ubah teks tombol sebentar sebelum navigasi
            tombolLapor.innerText = "Mengirim...";
            tombolLapor.disabled = true;
            
        } else {
            // Jika Cancel, batalkan pengiriman form
            event.preventDefault(); 
            alert("Silakan periksa kembali isian form Anda.");
        }
    });
}


// --- BAGIAN 3: EVENT SAAT INPUT FIELD DIPILIH (FOCUS/BLUR) ---

// Sesuaikan querySelectorAll untuk mencakup textarea
const semuaInput = document.querySelectorAll('input, select, textarea'); 

semuaInput.forEach(function(inputan) {
    inputan.addEventListener('focus', function() {
        this.style.backgroundColor = "#e9ecef";
        this.style.borderColor = "#0d6efd"; 
        this.style.color = "#000"; 
    });

    inputan.addEventListener('blur', function() {
        this.style.backgroundColor = "white";
        this.style.borderColor = ""; 
    });
});