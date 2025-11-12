import React from "react";
import ListCommand from "../../components/Cards/ListCommand";
import CardCode from "../../components/Cards/CardCode";

function Models() {
  return (
    <>
      <nav className="breadcrumb">
        <a href="#home">Home</a> / Models
      </nav>

      <h1>Models</h1>
      <p>
        📖 Referensi Resmi: <a href="">Laravel Migration Documentation</a>
      </p>

      <h2>🔍 Apa Itu Model di Laravel?</h2>
      <p>
        Model adalah bagian dari pola MVC (Model-View-Controller) yang berfungsi untuk menghubungkan aplikasi dengan database. Dengan model, kita bisa mengelola data (baca, simpan, ubah, hapus) menggunakan Eloquent ORM tanpa harus menulis
        query SQL secara manual.
      </p>
      <p className="highlight">👉 Singkatnya, satu tabel database = satu model di Laravel.</p>

      <h2>1. Membuat Model</h2>
      <p>Untuk membuat model di Laravel, Anda bisa menggunakan perintah berikut:</p>

      <CardCode code={`php artisan make:model Post`} />
      <p>
        Ketika perintah diatas dijalankan, Laravel akan membuat file model baru di folder <span className="highlight">app/Models/Post.php</span>
      </p>

      <h2>2. Struktur Dasar Model</h2>
      <CardCode
        code={`namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'content'];
}
`}
        language="php"
      />

      <ListCommand
        title="Penjelasan"
        descriptionList={[
          <>
            <span className="command-action">namespace App\Models;</span> → lokasi file model.
          </>,
          <>
            <span className="command-action">use HasFactory;</span> → memudahkan pembuatan data dummy dengan factory.
          </>,
          <>
            <span className="command-action">extends Model</span> → berarti class ini adalah model Eloquent.
          </>,
          <>
            <span className="command-action">$fillable</span> → daftar kolom yang boleh diisi agar aman dari mass assignment.
          </>,
        ]}
      />

      <h2>3. Properti Penting dalam Model</h2>
      <h4>
        📌 <span className="highlight">$fillable</span> → daftar kolom yang bisa diisi
      </h4>
      <CardCode code={`protected  $fillable = ['title', 'content'];`} />

      <h4>
        📌 <span className="highlight">$guarded</span> → daftar kolom yang tidak bisa diisi
      </h4>
      <CardCode code={`protected  $guarded = ['id'];`} />
      <div className="alert alert-warning">
        <strong>⚠️ Best practice:</strong> pilih salah satu <code>{"($fillable atau $guarded)"}</code>, jangan keduanya.
      </div>

      <h4>
        📌 <span className="highlight">$table</span> → jika nama tabel berbeda dari default
      </h4>
      <CardCode code={`protected  $table = 'posts';`} />

      <h4>
        📌 <span className="highlight">$primaryKey</span> → jika nama primary key berbeda dari default
      </h4>
      <CardCode code={`protected  $primaryKey = 'post_id';`} />

      <h2>4. Studi Kasus: Model Artikel Blog</h2>

      <h3>Membuat Model + Migration</h3>
      <CardCode code={`php artisan make:model Post`} />

      <h3>Edit Model (app/Models/Post.php)</h3>
      <CardCode
        code={`namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $table = 'artikel';
    protected $primaryKey = 'post_id';
    public $timestamps = true;

    protected $fillable = ['title', 'content', 'is_published', 'published_at'];

    protected $casts = [
        'is_published' => 'boolean',
        'published_at' => 'datetime',
    ];

    protected $attributes = [
        'status' => 'draft',
    ];
}
`}
        language="php"
      />

      <p>🔥 Dengan memahami model, kita bisa membuat aplikasi Laravel lebih rapi, aman, dan scalable. Selanjutnya, model ini akan sering dipakai bersama Eloquent Relationship.</p>
    </>
  );
}

export default Models;
