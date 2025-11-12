import CardCode from "../../components/Cards/CardCode";
import DropDown from "../../components/Cards/DropDown";
import ListCommand from "../../components/Cards/ListCommand";

function ArtisanCommand() {
  return (
    <>
      <nav className="breadcrumb">
        <a href="#home">Home</a> / <a href="#getting-started">Getting Started</a> / Artisan Commands
      </nav>

      <h1>🛠️ Artisan Command (CLI) di Laravel</h1>
      <p>Laravel menyediakan berbagai perintah CLI yang memudahkan pengembangan aplikasi web Anda.</p>

      <div>
        <h2>Apa itu Artisan CLI?</h2>
        <p>
          Artisan adalah command-line interface (CLI) bawaan Laravel yang memudahkan developer dalam mengelola aplikasi. Dengan Artisan, kita bisa melakukan banyak hal seperti membuat model, controller, migration, seeder, hingga menjalankan
          server lokal hanya dengan satu baris perintah. Kehadiran Artisan membuat proses development lebih cepat dan efisien.
        </p>
      </div>

      <div>
        <h2>Cara Menggunakan Artisan</h2>
        <p>
          Artisan dijalankan melalui terminal atau command prompt. Sebelum menggunakan perintah Artisan, pastikan posisi direktori sudah berada di folder proyek Laravel. Jika menggunakan VS Code, terminal bisa dibuka dengan menekan shortcut
          Ctrl + ` pada keyboard.
        </p>

        <div className="image-result">
          <img src="assets/images/artisan-cli.png" />
        </div>
        <p>Perintah diatas akan menampilkan seluruh daftar perintah Artisan yang bisa digunakan.</p>
      </div>

      <div>
        <h2>Berikut perintah Artisan yang biasa digunakan</h2>
        <ListCommand code="php artisan serve" title="Menjalankan Server Lokal" description="Menjalankan server development Laravel di localhost:8000" />
        <ListCommand code="php artisan make:model NamaModel" title="Membuat Model" description="Membuat Model" />
        <ListCommand code="php artisan make:controller NamaController" title="Membuat Controller" description="Membuat Controller" />
        <ListCommand code="php artisan make:migration create_namatabel_table" title="Membuat Migration" description="Membuat Migration" />
        <ListCommand code="php artisan migrate" description="Menjalankan Migration" title="Menjalankan Migration" />
        <ListCommand code="php artisan make:seeder NamaSeeder" description="Membuat Seeder" title="Membuat Seeder" />
        <ListCommand code="php artisan db:seed --class=NamaSeeder" description="Menjalankan Seeder" title="Menjalankan Seeder" />

        <h2>Perintah Gabungan</h2>
        <p>Perintah gabungan digunakan untuk membuat model, controller, dan migration dengan satu perintah.</p>
        <ListCommand
          code="php artisan make:model Book -mcr"
          title="Perintah Gabungan"
          descriptionList={["m : Membuat migration", "c : Membuat controller", "r : membuat controller dengan resource method (index, create, store, show, edit, update, destroy)"]}
        />
      </div>

      <div>
        <h2>Contoh Kasus: Aplikasi Manajemen Buku</h2>
        <p>Dalam kasus ini, kita akan membuat aplikasi manajemen buku dengan menggunakan perintah Artisan.</p>

        <h5>1. Membuat Model, Migration dan Controller </h5>
        <CardCode language="bash" code="php artisan make:model Book -mcr" title="Membuat Model" />
        <ListCommand
          title="Penjelasan"
          description="Ini akan membuat :"
          descriptionList={[
            <span>
              Model Book di folder <span className="command-action">app/Models/Book.php</span>
            </span>,
            <span>
              Migration create_books_table di folder <span className="command-action">database/migrations</span>
            </span>,
            <span>
              Controller BookController di folder <span className="command-action">app/Http/Controllers/BookController.php</span>
            </span>,
          ]}
        />

        <h5>2. Edit Migration</h5>
        <p>Arahkan ke folder database/migrations dan buka file migration yang baru saja dibuat. Biasanya file tersebut memiliki nama serupa dengan 2025_10_01_000000_create_books_table.php.</p>
        <CardCode
          language="php"
          code={`public function up()
{
    Schema::create('books', function (Blueprint $table) {
        $table->id();
        $table->string('title');
        $table->string('author');
        $table->text('description')->nullable();
        $table->timestamps();
    });
}`}
          title="Edit Migration"
        />
        <ListCommand
          title="Penjelasan"
          descriptionList={[
            <span>
              <span className="command-action">Schema::create{"('books')"}</span> : Digunakan untuk membuat tabel baru bernama <span className="command-action">books</span>.
            </span>,
            <span>
              <span className="command-action">$table-{">id()"}</span> : Secara otomatis menambahkan kolom ID yang berfungsi sebagai primary key.
            </span>,
            <span>
              <span className="command-action">$table-{">string('title')"}</span> : Menambahkan kolom <span className="command-action">title</span> dengan tipe data string.
            </span>,
            <span>
              <span className="command-action">$table-{">text('description')"}</span> : Menyediakan kolom <span className="command-action">description</span> bertipe teks, yang sifatnya opsional karena bisa nullable.
            </span>,
            <span>
              <span className="command-action">$table-{">timestamps()"}</span> : Menyisipkan kolom <span className="command-action">created_at</span> dan <span className="command-action">updated_at</span> guna mencatat waktu pembuatan serta
              pembaruan data.
            </span>,
          ]}
        />

        <h5>3. Menjalankan Migration</h5>
        <CardCode code="php artisan migrate" title="Menjalankan Migration" />
        <ListCommand
          title="Penjelasan"
          description={
            <>
              Perintah ini digunakan untuk mengeksekusi seluruh migration yang belum dijalankan sebelumnya. Dengan begitu, tabel <span className="command-action">books</span> akan otomatis terbentuk di dalam database.
            </>
          }
        />

        <h5>4. Membuat Seeder</h5>
        <p>Seeder berfungsi untuk mengisi database dengan data contoh (dummy). Seeder dapat dibuat menggunakan perintah:</p>
        <CardCode code="php artisan make:seeder BookSeeder" title="Membuat Seeder" />
        <DropDown
          description={
            <>
              Perintah di atas akan menghasilkan sebuah file seeder bernama BookSeeder di dalam folder <span className="command-action">database/seeders</span>.
              <br />
              <br />
              Selanjutnya, buka file BookSeeder.php dan tambahkan data dummy seperti berikut:
            </>
          }
          descriptionList={[
            <>
              <span className="command-action">DB::table{`('books')`}</span> : Menunjuk tabel books di database.
            </>,
            <>
              <span className="command-action">insert{`([...])`}</span> : Menambahkan data baru.
            </>,
            <>
              Array berisi dua record buku, masing-masing dengan <span className="command-action">title</span>, <span className="command-action">author</span>, dan <span className="command-action">description</span>.
            </>,
          ]}
          language="php"
          title="Contoh Respon"
          code={String.raw`<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB; // tambahkan untuk import DB

class BookSeeder extends Seeder
{
    public function run()
    {
      DB::table('books')->insert([
        [
            'title' => 'Laravel Basics',
            'author' => 'John Doe',
            'description' => 'A beginner guide to Laravel.',
        ],
        [
            'title' => 'Advanced Laravel',
            'author' => 'Jane Doe',
            'description' => 'An advanced guide to Laravel.',
        ],
      ]);
    }
}`}
        />
        <h5>5. Menjalankan Seeder</h5>
        <p> Untuk menjalankan seeder, Anda dapat menggunakan perintah:</p>
        <CardCode code="php artisan db:seed --class=BookSeeder" title="Menjalankan Seeder" />
        <ListCommand title="Penjelasan" description={<>Perintah ini akan menjalankan semua seeder yang belum dijalankan sebelumnya. Dengan begitu, data dummy akan otomatis terisi di dalam database.</>} />

        <h5>6. Menjalankan Migrations dan Seeders secara bersamaan</h5>
        <p> Anda dapat menjalankan migration dan seeder secara bersamaan menggunakan perintah:</p>
        <CardCode code="php artisan migrate:fresh --seed" title="Migrasi dan Seeding" />

        <h5>7. Mengedit Controller</h5>
        <p>
          Buka file <span className="command-action">BookController.php</span> yang ada di direktori <span className="command-action">app/Http/Controllers</span>. Selanjutnya, ubah method index agar dapat menampilkan seluruh data buku:
        </p>
        <CardCode
          code={String.raw`<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::all();
        return view('books.index', compact('books'));
    }
}`}
          title="Mengedit Controller"
          language="php"
        />
        <ListCommand
          title="Penjelasan"
          descriptionList={[
            <>
              <span className="command-action">\App\Models\Book::all{"()"}</span> : Digunakan untuk mengambil semua record dari tabel books melalui model Book.
            </>,
            <>
              <span className="command-action">view{"('books.index', compact('books'))"}</span> : Mengarahkan ke file view <span className="command-action">books/index.blade.php</span> sekaligus membawa variabel{" "}
              <span className="command-action">$books</span> agar dapat ditampilkan di tampilan.
            </>,
          ]}
        />

        <h5>8. Membuat View</h5>
        <p>
          Selanjutnya kita perlu menyiapkan halaman tampilan (view) untuk menampilkan daftar buku.
          <br />
          Buat folder books di dalam direktori resources/views, lalu tambahkan file baru bernama index.blade.php.
          <br />
          Anda bisa membuat folder dan file secara manual di VS Code, atau menggunakan terminal:
        </p>

        <CardCode code="php artisan make:view books.index" title="Membuat View" />

        <DropDown
          title="Penjelasan"
          description={
            <>
              Perintah ini akan membuat file view bernama <span className="command-action">index.blade.php</span> di dalam folder <span className="command-action">resources/views/books</span>
              <br />
              Setelah file dibuat, isi index.blade.php dengan kode berikut:
            </>
          }
          code={`<!DOCTYPE html>
<html>
  <head>
    <title>Book Management</title>
  </head>
  <body>
    <h1>Books</h1>
    <ul>
      @foreach($books as $book)
        <li>{{ $book->title }} by {{ $book->author }}</li>
      @endforeach
    </ul>
  </body>
</html>`}
          language="html"
          descriptionList={[
            <>
              <span className="command-action">{"@foreach($books as $book)"}</span> : Digunakan untuk melakukan iterasi pada setiap data buku yang dikirim dari controller.
            </>,
            <>
              <span className="command-action">{"{{ $book->title }}"}</span> : Menampilkan judul buku dari database.
            </>,
            <>
              <span className="command-action">{"{{ $book->author }}"}</span> : Menampilkan penulis buku dari database.
            </>,
          ]}
        />

        <h5>9. Membuat Route</h5>
        <p>
          Agar data buku bisa diakses lewat browser, kita perlu menambahkan route baru. Buka file <span className="command-action">routes/web.php</span> lalu tambahkan kode berikut:
        </p>

        <CardCode
          code={String.raw`<?php 
            
use App\Http\Controllers\BookController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
  return view('welcome');
})

Route::get('/books', [BookController::class, 'index']); // <- tambahkan baris ini`}
          title="Membuat Route"
          language="php"
        />

        <ListCommand
          title="Penjelasan"
          descriptionList={[
            <>
              <span className="command-action">{"Route::get('/books', [BookController::class, 'index']);"}</span> : Mendefinisikan sebuah route HTTP GET dengan URL /books. Jika route ini diakses, maka Laravel akan memanggil method index
              pada BookController.
            </>,
            <>
              <span className="command-action">{"BookController::class"}</span> : Menunjuk ke class BookController yang berada di namespace App\Http\Controllers.
            </>,
            <>
              <span className="command-action">{"'index'"}</span> : Menentukan method di dalam controller yang akan dijalankan, yaitu index.
            </>,
          ]}
        />

        <h5>10. Menjalankan Server</h5>
        <p>
          Langkah terakhir adalah menjalankan server Laravel agar aplikasi bisa diakses lewat browser. <br /> Di terminal, jalankan perintah:
        </p>

        <CardCode code="php artisan serve" title="Menjalankan Server" />

        <p>
          Kemudian buka browser dan buka alamat <span className="command-action">http://localhost:8000/books</span>
        </p>
        <p>Jika semua langkah sebelumnya berhasil, maka akan tampil halaman sederhana yang menampilkan daftar buku, contohnya:</p>
        <div className="image-result">
          <img src="assets/images/artisan.png" />
        </div>
      </div>
    </>
  );
}

export default ArtisanCommand;
