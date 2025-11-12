import CardCode from "../../components/Cards/CardCode";
import DropDown from "../../components/Cards/DropDown";

function Installation() {
  const responseExample = {
    data: [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        created_at: "2024-01-15T10:30:00Z",
      },
    ],
    meta: {
      current_page: 1,
      total: 150,
      per_page: 20,
    },
  };

  return (
    <div>
      <nav className="breadcrumb">
        <a href="#home">Home</a> / <a href="#getting-started">Getting Started</a> / Installation
      </nav>

      <h1>Installation</h1>
      <p>Tahap pertama adalah menginstal Laravel di server Anda. Anda dapat menggunakan Composer untuk menginstal Laravel.</p>

      <h2>Persyaratan Sistem</h2>
      <p>Sebelum menginstall Laravel, pastikan sistem Anda memenuhi persyaratan berikut:</p>
      <ul className="requirements">
        <li>
          PHP (versi terbaru). {""}
          <a href="https://www.php.net/" target="_blank">
            Download
          </a>
        </li>
        <li>
          MySQL (versi terbaru).{" "}
          <a href="https://www.oracle.com/mysql/technologies/mysql-enterprise-edition-downloads.html" target="_blank">
            Download
          </a>
        </li>
        <li>
          Composer (versi terbaru).{" "}
          <a href="https://getcomposer.org/download/" target="_blank">
            Download
          </a>
        </li>
        <li>Terminal Bawaan (Windows, Linux, atau macOS)</li>
      </ul>

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
        <a href="https://laravel.com/docs/12.x/installation" style={{ color: "#93c5fd" }} target="_blank">
          Laravel
        </a>{" "}
        untuk informasi lebih lanjut.
      </div>
    </div>
  );
}

export default Installation;
