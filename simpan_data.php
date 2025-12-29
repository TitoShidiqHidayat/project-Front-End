<?php
/* Pembuat php NIM :245510029  / Nama : Reno Putra Mahendra */
if(isset($_POST['nama_mhs'])){
    $nama_mhs = htmlspecialchars($_POST['nama_mhs']);
    $nim_mhs = htmlspecialchars($_POST['nim_mhs']);
    $ruangan = htmlspecialchars($_POST['ruangan']);
    $perangkat = htmlspecialchars($_POST['perangkat']);
    $tgl_kerusakan = htmlspecialchars($_POST['tgl_kerusakan']);
    $detail_laporan = htmlspecialchars($_POST['detail_laporan']);
  
    echo "<link rel='stylesheet' href='tampilan.css'>";
    echo "<h1>Lab Reporting System</h1>";
    echo "<form class='data-laporan'>";
    echo " <h2 style='color:black;text-align:center;'>Data yang Anda Kirim</h2>";
    
    echo "<p><span class='label'>Nama Mahasiswa</span> : " .$nama_mhs . "</p>";
    echo "<p><span class='label'>NIM</span> : " .$nim_mhs . "</p>";
    echo "<p><span class='label'>Ruangan Lab</span> : " .$ruangan . "</p>";
    echo "<p><span class='label'>Perangkat Bermasalah</span> : ". $perangkat . "</p>";
    echo "<p><span class='label'>Tanggal Kerusakan</span> : ". $tgl_kerusakan . "</p>";
    echo "<p><span class='label'>Detail Kerusakan</span> : ". $detail_laporan . "</p>";

}
?>