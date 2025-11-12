import React from "react";
import ListCommand from "../../components/Cards/ListCommand";
import CardCode from "../../components/Cards/CardCode";

function Relationship() {
  return (
    <>
      <nav className="breadcrumb">
        <a href="#home">Home</a> / Relationship
      </nav>

      <h1>Relationship</h1>
      <p>
        📖 Referensi Resmi: <a href="">Laravel Migration Documentation</a>
      </p>

      <h2>🔍 Apa Itu Eloquent Relationship?</h2>
      <p>
        Eloquent Relationships adalah fitur Laravel yang memungkinkan kita untuk mendefinisikan hubungan antar tabel database melalui model. Dengan fitur ini, kita dapat mengakses data dari tabel lain dengan cara yang lebih efisien dan
        mudah dibaca, tanpa perlu menulis query SQL manual.
      </p>

      <h2>Jenis-Jenis Relationship : </h2>

      <h3>1. {"One-to-One (1:1)"}</h3>
      <p>Hubungan satu ke satu terjadi ketika satu entitas di tabel A hanya berhubungan dengan satu entitas di tabel B.</p>
      <h3>📌 Contoh Kasus:</h3>
      <p>Setiap User hanya memiliki satu Profile.</p>

      <h5>Membuat Model & Migration</h5>
      <CardCode code={`php artisan make:model Profile -m`} />

      <h5>
        Edit Migration <span className="highlight">{"(database/migrations/xxxx_create_profiles_table.php)"}</span>
      </h5>

      <CardCode
        code={`Schema::create('profiles', function (Blueprint $table) {
    $table->id();
    $table->foreignId('user_id')->constrained()->onDelete('cascade');
    $table->string('address');
    $table->string('phone');
    $table->timestamps();
});
`}
      />

      <ListCommand
        title="Penjelasan"
        descriptionList={[
          <>
            <span className="command-action">user_id</span> → berfungsi sebagai foreign key untuk tabel users.
          </>,
          <>
            <span className="command-action">onDelete{"('cascade')"}</span> → ketika User dihapus, maka Profile juga ikut terhapus.
          </>,
        ]}
      />

      <h5>Definisikan Relasi di Model</h5>

      <CardCode
        title="User.php"
        language="php"
        code={`class User extends Model
{
    public function profile()
    {
        return $this->hasOne(Profile::class);
    }
}
`}
      />
      <CardCode
        title="Profile.php"
        language="php"
        code={`class Profile extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
`}
      />

      <ListCommand
        title="Penjelasan"
        descriptionList={[
          <>
            <span className="command-action">{"hasOne(Profile::class)"}</span> → berarti User memiliki satu Profile.
          </>,
          <>
            <span className="command-action">{"belongsTo(User::class)"}</span> → berarti Profile dimiliki oleh User.
          </>,
        ]}
      />

      <h5>Contoh Penggunaan</h5>
      <CardCode
        language="php"
        code={`$user = User::find(1);
$profile = $user->profile; // ambil profile milik user
`}
      ></CardCode>

      <div className="alert alert-success">
        <strong>✅ Tips</strong> {"Gunakan foreignId()->constrained() untuk menjaga integritas data antar tabel."}
      </div>

      <h3>2. {"One-to-Many (1:N)"}</h3>
      <p>Relasi satu ke banyak digunakan ketika satu data pada tabel A dapat memiliki banyak data terkait pada tabel B.</p>

      <h3>📌 Contoh Kasus:</h3>
      <p>Satu User dapat memiliki banyak Post.</p>

      <h4>🛠 Langkah Implementasi</h4>

      <h5>Membuat Model & Migration</h5>
      <CardCode code={`php artisan make:model Post -m`} />

      <h5>Edit Migration (database/migrations/xxxx_create_posts_table.php)</h5>

      <CardCode
        code={`Schema::create('posts', function (Blueprint $table) {
    $table->id();
    $table->foreignId('user_id')->constrained()->onDelete('cascade');
    $table->string('title');
    $table->text('content');
    $table->timestamps();
});
`}
      />

      <ListCommand
        title="Penjelasan"
        descriptionList={[
          <>
            <span className="command-action">user_id</span> → berfungsi sebagai foreign key untuk tabel users.
          </>,
          <>
            <span className="command-action">onDelete{"('cascade')"}</span> → ketika User dihapus, maka Post juga ikut terhapus.
          </>,
        ]}
      />

      <h5>Definisikan Relasi di Model</h5>

      <CardCode
        title="User.php"
        language="php"
        code={`class User extends Model
{
    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}
`}
      />
      <CardCode
        title="Post.php"
        language="php"
        code={`class Post extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
`}
      />

      <ListCommand
        title="Penjelasan"
        descriptionList={[
          <>
            <span className="command-action">{"hasMany(Post::class)"}</span> → berarti User memiliki banyak Post.
          </>,
          <>
            <span className="command-action">{"belongsTo(User::class)"}</span> → berarti Post dimiliki oleh User.
          </>,
        ]}
      />

      <h5>Contoh Penggunaan</h5>
      <CardCode
        language="php"
        code={`$user = User::find(1);
$posts = $user->posts; // ambil post milik user

$post = Post::find(1);
$user = $post->user; // ambil user dari post
`}
      ></CardCode>

      <div className="alert alert-success">
        <strong>✅ Tips</strong> {"Gunakan Eager Loading agar lebih efisien dan menghindari masalah N+1 query."}
      </div>

      <CardCode language="php" code={`$users = User::with('posts')->get();`} />
    </>
  );
}

export default Relationship;
