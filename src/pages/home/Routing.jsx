import React from "react";
import CardCode from "../../components/Cards/CardCode";
import DropDown from "../../components/Cards/DropDown";
import ListCommand from "../../components/Cards/ListCommand";

function Routing() {
  return (
    <>
      <nav className="breadcrumb">
        <a href="#home">Home</a> / Routing
      </nav>

      <h1>Routing di Laravel</h1>
      <p>
        Routing merupakan salah satu komponen inti dalam framework Laravel. Melalui routing, kita bisa menentukan alamat URL yang akan digunakan pengguna serta aksi apa yang harus dijalankan ketika URL tersebut diakses. Dengan kata lain,
        routing adalah jembatan antara permintaan HTTP (request) dan respon yang diberikan aplikasi.
      </p>
      <p>
        Laravel menyediakan sistem routing yang fleksibel, mudah dipahami, serta mendukung berbagai metode HTTP seperti GET, POST, PUT, PATCH, dan DELETE. Inilah yang membuat Laravel sangat powerful dalam membangun aplikasi berbasis web
        maupun API.
      </p>

      <h2>1. Dasar Penulisan Route</h2>
      <p>
        Semua definisi route untuk aplikasi berbasis web ditulis di dalam file <span className="command-action">routes/web.php</span>, sedangkan untuk API berada di <span className="command-action">routes/api.php</span>.
      </p>
      <CardCode
        code={`use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return "Selamat datang di Laravel!";
});`}
        language="php"
      />

      <ListCommand
        title="Penjelasan"
        descriptionList={[
          <span>
            <span className="command-action">{`Route::get('/', function () {...})`}</span>
            {` : Mendefinisikan route dengan metode GET untuk URL /.`}
          </span>,
          <span>
            Saat pengguna membuka alamat utama <span className="command-action">{`(/)`}</span> , Laravel akan mengembalikan teks <span className="command-action">"Selamat datang di Laravel!"</span>
          </span>,
        ]}
      />

      <h2>2. Metode HTTP dalam Route</h2>
      <p>Laravel mendukung berbagai metode HTTP sesuai kebutuhan. Berikut contoh penggunaannya:</p>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Method HTTP</th>
              <th>Fungsi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className="badge badge-get">GET</span>
              </td>
              <td>Mengambil data (misalnya, menampilkan halaman)</td>
            </tr>
            <tr>
              <td>
                <span className="badge badge-post">POST</span>
              </td>
              <td>Mengirimkan data (misalnya, menyimpan data dari form)</td>
            </tr>
            <tr>
              <td>
                <span className="badge badge-put">PUT</span>
              </td>
              <td>Memperbarui data yang sudah ada</td>
            </tr>
            <tr>
              <td>
                <span className="badge badge-delete">DELETE</span>
              </td>
              <td>Menghapus data</td>
            </tr>
            <tr>
              <td>
                <span className="badge badge-patch">PATCH</span>
              </td>
              <td>Memperbarui sebagian data</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>📌Contoh Implementasi Berbagai Metode HTTP</h3>
      <CardCode
        code={`Route::get('/produk', function () {
    return "Menampilkan daftar produk";
});

Route::post('/produk', function () {
    return "Produk baru berhasil ditambahkan";
});

Route::put('/produk/{id}', function ($id) {
    return "Produk dengan ID $id berhasil diperbarui";
});

Route::delete('/produk/{id}', function ($id) {
    return "Produk dengan ID $id berhasil dihapus";
});
`}
        language="php"
      />

      <ListCommand
        title="Penjelasan"
        description="Ringkasan metode HTTP :"
        descriptionList={[
          <>
            <span className="command-action">GET</span> → digunakan untuk menampilkan data.
          </>,
          <>
            <span className="command-action">POST</span> → digunakan untuk membuat data baru.
          </>,
          <>
            <span className="command-action">PUT</span> → digunakan untuk memperbarui data yang sudah ada.
          </>,
          <>
            <span className="command-action">DELETE</span> → digunakan untuk menghapus data.
          </>,
          <>
            <span className="command-action">PATCH</span> → digunakan untuk memperbarui sebagian data.
          </>,
        ]}
      />

      <h2>3. Routing Parameter</h2>
      <p>Laravel memungkinkan kita menangkap parameter dari URL. Parameter ditulis menggunakan kurung kurawal {}.</p>

      <h3>📌Contoh Parameter Wajib</h3>
      <CardCode
        code={`Route::get('/user/{id}', function ($id) {
    return "Data user dengan ID: $id";
});`}
        language="php"
      />

      <ListCommand
        title="Penjelasan"
        descriptionList={[
          <>
            <span className="command-action">{"{id}"}</span> → Parameter yang wajib diisi oleh pengguna.
          </>,
          <>
            Jika user membuka <span className="command-action">http://localhost:8000/user/10</span>, maka outputnya adalah <span className="command-action">"Data user dengan ID: 10"</span>.
          </>,
        ]}
      />

      <h3>📌Contoh Parameter Optional</h3>
      <CardCode
        code={`Route::get('/user/{id?}', function ($id = null) {
    return $id ? "User ID: $id" : "User ID tidak ditemukan";
});`}
        language="php"
      />

      <ListCommand
        title="Penjelasan"
        descriptionList={[
          <>
            <span className="command-action">{"{id?}"}</span> → Parameter yang tidak wajib diisi oleh pengguna.
          </>,
          <>
            Jika user membuka <span className="command-action">http://localhost:8000/user</span> tanpa mengisi parameter, maka outputnya adalah <span className="command-action">"User ID tidak ditemukan"</span>.
          </>,
        ]}
      />

      <h2>4. Routing dengan Controller</h2>
      <p>Untuk menjaga struktur kode tetap rapi, sebaiknya route diarahkan ke controller, bukan langsung ditulis fungsi anonim.</p>

      <h3>📌Contoh Routing dengan Controller</h3>
      <CardCode
        code={`use App\Http\Controllers\UserController;

Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);
Route::get('/users/{id}', [UserController::class, 'show']);
Route::put('/users/{id}', [UserController::class, 'update']);
Route::delete('/users/{id}', [UserController::class, 'destroy']);
`}
        language="php"
      />

      <ListCommand
        title="Penjelasan"
        description="Menggunakan UserController untuk menangani permintaan."
        descriptionList={[
          <>
            <span className="command-action">{"index()"}</span> → menampilkan daftar user.
          </>,
          <>
            <span className="command-action">{"store()"}</span> → menambahkan user baru.
          </>,
          <>
            <span className="command-action">{"show($id)"}</span> → menampilkan detail user dengan ID tertentu.
          </>,
          <>
            <span className="command-action">{"update($id)"}</span> → memperbarui user dengan ID tertentu.
          </>,
          <>
            <span className="command-action">{"destroy($id)"}</span> → menghapus user dengan ID tertentu.
          </>,
        ]}
      />

      <h2>5. Routing dengan Nama</h2>
      <p>Laravel memungkinkan kita memberi nama pada setiap route. Nama ini memudahkan kita saat melakukan redirect atau membuat link, tanpa harus menulis ulang URL.</p>

      <h3>📌Contoh Routing dengan Nama</h3>
      <p>
        Untuk membuat route dengan nama, kita bisa menggunakan method <span className="command-action">name()</span>.
      </p>
      <CardCode
        code={`Route::get('/dashboard', function () {
    return "Halaman Dashboard";
})->name('dashboard');`}
        language="php"
      />

      <h4>Pemakaian di Controller</h4>
      <CardCode code={`return redirect()->route('dashboard');`} language="php" />

      <h4>Pemakaian di Blade</h4>
      <CardCode code={`<a href="{{ route('dashboard') }}">Dashboard</a>`} language="html" />

      <ListCommand
        title="Keuntungan Route dengan Nama"
        descriptionList={[<>Lebih mudah untuk melakukan redirect</>, <>Mudah untuk mengubah URL tanpa harus mengubah semua route yang terkait.</>, <>Mudah untuk membuat link yang dinamis tanpa harus menulis ulang URL.</>]}
      />

      <h2>6. Route Group</h2>
      <p>Jika kita memiliki banyak route dengan pola yang sama, kita bisa mengelompokkannya menggunakan {"Route::prefix() atau Route::middleware()."}</p>

      <h3>📌Contoh Route dengan prefix</h3>
      <CardCode
        code={`Route::prefix('admin')->group(function () {
    Route::get('/dashboard', function () {
        return "Dashboard Admin";
    });

    Route::get('/users', function () {
        return "Kelola User";
    });
});
`}
        language="php"
      />

      <ListCommand
        title="Penjelasan"
        descriptionList={[
          <>Semua route di dalam group ini akan memiliki prefix /admin.</>,
          <>
            <span className="command-action">admin/dashboard</span> akan menampilkan <span className="command-action">"Dashboard Admin"</span>
          </>,
          <>
            <span className="command-action">admin/users</span> akan menampilkan <span className="command-action">"Kelola User"</span>
          </>,
        ]}
      />

      <h2>7. Middleware</h2>
      <p>Middleware digunakan untuk membatasi atau memfilter akses ke route tertentu. Misalnya, hanya user yang sudah login yang boleh mengakses dashboard admin.</p>

      <CardCode
        code={`Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/admin/dashboard', function () {
        return "Dashboard Admin (Hanya bisa diakses oleh admin)";
    });
});
`}
        language="php"
      />

      <ListCommand 
        title="Penjelasan"
        descriptionList={[
          <>Semua route di dalam group ini akan memiliki middleware auth dan admin.</>,
          <>
            <span className="command-action">/admin/dashboard</span> akan menampilkan <span className="command-action">"Dashboard Admin (Hanya bisa diakses oleh admin)"</span>
          </>,
        ]}
      />
    </>
  );
}

export default Routing;
