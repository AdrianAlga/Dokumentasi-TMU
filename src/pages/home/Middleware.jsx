import React from "react";
import ListCommand from "../../components/Cards/ListCommand";
import CardCode from "../../components/Cards/CardCode";

function Middleware() {
  return (
    <>
      <nav className="breadcrumb">
        <a href="#home">Home</a> / Routing
      </nav>

      <h1>Middleware di Laravel</h1>
      <p>
        📖 Referensi Resmi:{" "}
        <a href="https://laravel.com/docs/10.x/middleware#main-content" target="_blank">
          Laravel Middleware Documentation
        </a>
      </p>

      <p>
        Middleware merupakan salah satu komponen penting di Laravel yang berfungsi sebagai lapisan penghubung antara request HTTP yang masuk dan response yang akan dikirimkan ke pengguna. Dengan middleware, kita bisa memvalidasi, memfilter,
        atau memodifikasi request dan response sebelum diteruskan ke controller maupun view.
      </p>

      <ListCommand
        title="Contoh penggunaan middleware dalam Laravel :"
        descriptionList={[
          <>Mengecek autentikasi pengguna sebelum mengakses halaman tertentu.</>,
          <>Membatasi akses berdasarkan role {"(admin, user, dll)"}.</>,
          <>Melakukan logging request untuk debugging.</>,
          <>Memvalidasi atau memodifikasi request sebelum diproses lebih lanjut.</>,
          <>Menambahkan header khusus pada response, seperti konfigurasi CORS.</>,
        ]}
        language="php"
      />

      <h2>1. Cara Kerja Middleware</h2>
      <p>Secara sederhana, middleware bertugas menyaring request sebelum mencapai controller. Jika request tidak sesuai aturan, proses dapat dihentikan dan langsung mengembalikan response tertentu.</p>

      <CardCode title="Alur kerja dasar middleware :" btnCopy={false} code={`Request -> Middleware -> Controller -> Response`} language="bash" />
      <CardCode title="Jika request ditolak oleh middleware :" btnCopy={false} code={`Request -> Middleware (Ditolak) -> Response (Error)`} language="bash" />

      <h2>2. Membuat Middleware Baru</h2>
      <p>Gunakan perintah Artisan berikut untuk membuat middleware baru:</p>
      <CardCode title="Membuat middleware" code={"php artisan make:middleware CheckAdmin"} />
      <p>
        👉 File baru akan dibuat di: <span className="command-action">app/Http/Middleware/CheckAdmin.php</span>
      </p>

      <h2>3. Contoh Middleware untuk Cek Admin</h2>
      <p>
        Edit file <span className="command-action">app/Http/Middleware/CheckAdmin.php</span> seperti berikut:
      </p>

      <CardCode
        code={`<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckAdmin
{
    public function handle(Request $request, Closure $next)
    {
        // Cek apakah user login dan memiliki role admin
        if (!Auth::check() || Auth::user()->role !== 'admin') {
            return redirect('/')->with('error', 'Akses ditolak! Anda bukan admin.');
        }

        return $next($request);
    }
}
`}
        language="php"
      />

      <ListCommand
        descriptionList={[
          <>
            Middleware menerima Request dan Closure <span className="command-action">{"$next"}</span> sebagai parameter.
          </>,
          <>
            <span className="command-action">{"Auth::check()"}</span> → Mengecek apakah user sudah login.
          </>,
          <>
            <span className="command-action">{"Auth::user()->role !== 'admin'"}</span> → Mengecek apakah role user bukan admin.
          </>,
          <>Jika bukan admin → redirect ke halaman / dengan pesan error.</>,
          <>
            Jika lolos pengecekan → request diteruskan ke controller dengan <span className="command-action">{"$next($request)"}</span>.
          </>,
        ]}
        title="Penjelasan"
      />

      <h3>4. Registrasi Middleware</h3>
      <p>
        Setelah dibuat, middleware perlu didaftarkan di <span className="command-action">app/Http/Kernel.php</span>.
      </p>
      <p>Tambahkan ke dalam properti routeMiddleware:</p>

      <CardCode
        code={`protected $routeMiddleware = [
    'auth' => \App\Http\Middleware\Authenticate::class,
    'admin' => \App\Http\Middleware\CheckAdmin::class, // Registrasi middleware admin
];
`}
        language="php"
      />
      <p>Setelah ini, middleware bisa langsung digunakan pada routing.</p>

      <h3>5. Menggunakan Middleware di Route</h3>
      <p>Setelah middleware CheckAdmin aktif, kita bisa memakainya di route tertentu.</p>

      <CardCode
        code={`Route::middleware(['admin'])->group(function () {
    Route::get('/admin/dashboard', function () {
        return "Selamat datang di Admin Dashboard!";
    });

    Route::get('/admin/users', function () {
        return "Manajemen User";
    });
});
`}
        language="php"
      />

      <ListCommand
        descriptionList={[
          <>
            Middleware admin diterapkan pada grup route <span className="command-action">/admin/....</span>
          </>,
          <>
            Halaman <span className="command-action">/admin/dashboard</span> hanya bisa diakses oleh admin saja.
          </>,
          <>
            Halaman <span className="command-action">/admin/users</span> hanya bisa diakses oleh admin saja.
          </>,
        ]}
        title="Penjelasan"
      />

      <h3>6. Middleware dengan Parameter</h3>
      <p>
        Laravel juga memungkinkan middleware menerima parameter. Contoh: membatasi akses berdasarkan role <span className="command-action">{"(admin, editor, user)"}</span>.
      </p>

      <CardCode
        code={`public function handle(Request $request, Closure $next, $role)
{
    if (!Auth::check() || Auth::user()->role !== $role) {
        return redirect('/')->with('error', 'Akses ditolak!');
    }

    return $next($request);
}
`}
        language="php"
        title="Contoh Middleware (CheckRole.php)"
      />

      <CardCode
        code={`Route::get('/admin', function () {
    return "Halaman Admin";
})->middleware('role:admin');

Route::get('/editor', function () {
    return "Halaman Editor";
})->middleware('role:editor');
`}
        language="php"
        title="Contoh Penggunaan pada Route"
      />

      <ListCommand
        descriptionList={[
          <>
            <span className="command-action">role:admin</span> hanya memperbolehkan admin.
          </>,
          <>
            <span className="command-action">role:editor</span> hanya untuk editor.
          </>,
        ]}
        title="Penjelasan"
      />

      <h3>7. Best Practices dalam Middleware</h3>
      <ul style={{ marginLeft: "20px", listStyle: "none" }}>
        <li>✅ Gunakan middleware hanya untuk filtering request, bukan business logic utama.</li>
        <li>✅ Kelompokkan middleware yang sering dipakai dalam grup {"(web, api)"}.</li>
        <li>✅ Gunakan nama alias {"(misalnya auth, admin)"} agar lebih ringkas saat dipanggil di route.</li>
        <li>✅ Manfaatkan middleware dengan parameter {"(role:admin)"} untuk fleksibilitas.</li>
        <li>✅ Terapkan middleware hanya pada route yang benar-benar membutuhkan agar tidak menambah overhead.</li>
        <li>✅ Pastikan response error jelas jika request ditolak.</li>
      </ul>
    </>
  );
}

export default Middleware;
