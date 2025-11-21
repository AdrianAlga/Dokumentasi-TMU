import CardCode from "../../components/Cards/CardCode";
import DropDown from "../../components/Cards/DropDown";

function Akuntansi() {
  return (
    <div>
      <nav className="breadcrumb">
        <a href="#home">Home</a> / <a href="#getting-started">Getting Started</a> / Akuntansi
      </nav>

      <h1>Akuntansi</h1>
      <p>Berikut alur akuntansi keuangan daerah dari awal perencanaan sampai uang benar-benar keluar.</p>

      <h2>1. RKA – Rencana Kerja dan Anggaran</h2>
      <p>Ini tahap OPD menyusun rencana kegiatan + kebutuhan uangnya untuk setahun.</p>
      <strong>➡️ Ibarat OPD membuat daftar belanja: “Tahun depan saya perlu uang untuk A, B, C.”</strong>

      <h2>Install Laravel dengan Composer</h2>
      <p>Setelah memastikan PHP, MySQL, dan Composer sudah terinstal, Anda dapat menggunakan Composer untuk menginstal Laravel dengan perintah berikut:</p>

      <CardCode code={`composer create-project --prefer-dist laravel/laravel my-project`} title="Install Laravel" language="bash" />

      <DropDown
        title="Penjelasan"
        codeLanguage="bash"
        btnCopy={false}
        code={`- composer → package manager PHP.
- create-project → command untuk membuat project baru.
- laravel/laravel → package yang akan diinstal.
- my-project → nama project yang akan diinstal.
- Jika sudah memiliki direktori file, cukup tambahkan tanda titik (.) di akhir perintah.
  Contoh : composer create-project --prefer-dist laravel/laravel .`}
      />

      <p>Setelah selesai, masuk ke direktori project:</p>
      <CardCode code={"cd my-project"} title="Install Laravel" />

      <CardCode code={"php artisan serve"} title="Jalankan Server" language="bash" />

      <h2>Hasilnya</h2>
      <p>Setelah menjalankan perintah di atas, hasilnya akan seperti berikut:</p>

      <div className="image-result">
        <img src="assets/images/Laravel12.png" />
      </div>

      <div className="alert alert-info">
        <strong>💡 Link Dokumentasi Resmi :</strong> Ini adalah dokumentasi{" "}
        <a href="https://laravel.com/docs/12.x/Akuntansi" style={{ color: "#93c5fd" }} target="_blank">
          Laravel
        </a>{" "}
        untuk informasi lebih lanjut.
      </div>
    </div>
  );
}

export default Akuntansi;
