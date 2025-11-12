import React from "react";
import ListCommand from "../../components/Cards/ListCommand";
import CardCode from "../../components/Cards/CardCode";

function Migration() {
  return (
    <>
      <nav className="breadcrumb">
        <a href="#home">Home</a> / Migration
      </nav>

      <h1>Migrations</h1>
      <p>
        📖 Referensi Resmi: <a href="">Laravel Migration Documentation</a>
      </p>

      <h2>🔍 Apa Itu Migration?</h2>
      <p>Migration adalah fitur Laravel yang berfungsi untuk mengatur struktur database menggunakan kode. Konsep ini mirip dengan version control, tetapi khusus untuk database.</p>

      <p>✨ Kegunaan Migration:</p>
      <ol>
        <li>✅ Membuat, mengubah, dan menghapus tabel database secara otomatis.</li>
        <li>✅ Memudahkan kerja tim agar tetap konsisten pada struktur database yang sama.</li>
        <li>✅ Melacak perubahan tanpa harus menulis query SQL manual.</li>
        <li>✅ Menjamin keseragaman struktur database di berbagai environment (development, staging, production).</li>
      </ol>

      <p>📌 Alur Kerja Migration</p>
      <ol>
        <li>Membuat file migration → Laravel men-generate file di folder database/migrations/.</li>
        <li>Menulis struktur tabel → Didefinisikan di dalam file migration.</li>
        <li>Menjalankan migration → Laravel akan mengonversi kode migration ke SQL.</li>
        <li>Rollback (opsional) → Mengembalikan database ke kondisi sebelumnya jika ada kesalahan.</li>
      </ol>

      <p>🔄 Ringkasnya:</p>
      <span>Migration File → Artisan Command → Database Schema</span>

      <h2>1. Membuat Migration</h2>
      <p>Gunakan perintah Artisan berikut:</p>

      <CardCode code={`php artisan make:migration create_users_table`} language="bash" />
      <ListCommand title="👉 Laravel akan membuat file baru di:" code={`database/migrations/2024_03_01_123456_create_users_table.php`} language="bash" />

      <h4>📌 Contoh struktur file migration:</h4>

      <CardCode
        code={`<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
`}
        language="php"
      />

      <ListCommand
        title="Penjelasan"
        descriptionList={[
          <>
            <span className="command-action">{"up()"}</span> → Mendefinisikan perubahan pada database {"(misalnya membuat tabel users)"}.
          </>,
          <>
            <span className="command-action">{"down()"}</span>→ Digunakan untuk rollback (menghapus tabel).
          </>,
          <>
            <span className="command-action">{"Schema::create()"}</span> → Membuat tabel baru.
          </>,
          <>
            <span className="command-action">{"$table->id()"}</span> → Primary key otomatis.
          </>,
          <>
            <span className="command-action">{"$table->timestamps()"}</span> → Menambahkan created_at dan updated_at.
          </>,
        ]}
      />

      <h2>2. Menjalankan Migration</h2>
      <p>Untuk menjalankan migration, jalankan perintah berikut:</p>
      <CardCode code={"php artisan migrate"} title="Artisan Command" language="bash" />

      <h2>3. Menghapus atau Mereset Migration</h2>
      <p>Jika perlu membatalkan migration, gunakan perintah:</p>

      <CardCode
        code={`php artisan migrate:rollback   # Membatalkan migration terakhir
php artisan migrate:reset      # Menghapus semua migration
php artisan migrate:refresh    # Reset dan jalankan ulang semua migration
php artisan migrate:fresh      # Hapus semua tabel lalu jalankan ulang migration
`}
      />

      <ListCommand
        descriptionList={[
          <>
            <span className="command-action">refresh</span> → Menjalankan ulang migration tanpa menghapus tabel lain.
          </>,
          <>
            <span className="command-action">fresh</span> → Menghapus seluruh tabel sebelum migration dijalankan ulang.
          </>,
        ]}
        title="📌 Perbedaan refresh dan fresh"
      />

      <h2>4. Rollback Migration</h2>
      <p>Untuk mengembalikan database ke kondisi sebelumnya jika ada kesalahan, gunakan perintah:</p>
      <CardCode code={"php artisan migrate:rollback"} title="Artisan Command" language="bash" />

      <h2>5. Melihat Daftar Migration</h2>
      <p>Untuk melihat daftar migration yang telah dijalankan, jalankan perintah:</p>
      <CardCode code={"php artisan migrate:status"} title="Artisan Command" language="bash" />

      <h2>6. Tipe Data dalam Migration</h2>
      <p>Laravel menyediakan berbagai metode untuk mendefinisikan kolom:</p>

      <ListCommand
        title="📌 Tipe Data"
        descriptionList={[
          <>
            <span className="command-action">{"$table->string('nama')"}</span> → Teks pendek (≤255 karakter).
          </>,
          <>
            <span className="command-action">{"$table->text('deskripsi')"}</span> → Teks panjang.
          </>,
          <>
            <span className="command-action">{"$table->integer('jumlah')"}</span> → Bilangan bulat.
          </>,
          <>
            <span className="command-action">{"$table->date('tanggal')"}</span> → Tanggal.
          </>,
          <>
            <span className="command-action">{"$table->time('waktu')"}</span> → Waktu.
          </>,
          <>
            <span className="command-action">{"$table->datetime('tanggal_waktu')"}</span> → Tanggal dan waktu.
          </>,
          <>
            <span className="command-action">{"$table->boolean('aktif')"}</span> → Boolean.
          </>,
          <>
            <span className="command-action">{"$table->float('harga')"}</span> → Angka desimal.
          </>,
        ]}
      />

      <h2>7. Best Practices</h2>
      <ul style={{ marginLeft: "20px", listStyle: "none" }}>
        <li>✅ Gunakan nama tabel jamak sesuai standar Laravel (users, posts).</li>
        <li>✅ Tambahkan nullable() untuk kolom opsional.</li>
        <li>✅ Jangan mengubah migration lama yang sudah dijalankan → buat migration baru.</li>
        <li>✅ Gunakan foreignId() untuk relasi tabel (lebih aman daripada integer manual).</li>
        <li>✅ Hati-hati dengan rollback/fresh di production karena bisa menghapus data penting.</li>
      </ul>
    </>
  );
}

export default Migration;
