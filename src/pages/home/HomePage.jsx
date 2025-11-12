import CardCode from "../../components/Cards/CardCode";
import DropDown from "../../components/Cards/DropDown";

function HomePage() {
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
        <a href="#home">Home</a> / <a href="#getting-started">Getting Started</a> / Introduction
      </nav>

      <h1>Introduction</h1>
      <p>
        Laravel adalah framework PHP yang elegan dan ekspresif, dirancang untuk memudahkan pengembangan aplikasi web modern. Framework ini menyediakan berbagai fitur bawaan seperti routing, autentikasi, sistem templating Blade, ORM
        Eloquent, migrasi database, serta dukungan ekosistem yang luas. Dengan dokumentasi ini, Anda akan dipandu untuk mempelajari konsep dasar hingga fitur lanjutan yang ditawarkan oleh Laravel.
      </p>
      <div className="alert alert-info">
        <strong>💡 Tip:</strong> Pastikan Anda sudah memiliki API key sebelum memulai. Lihat bagian{" "}
        <a href="#api-keys" style={{ color: "#93c5fd" }}>
          API Keys
        </a>{" "}
        untuk informasi lebih lanjut.
      </div>

      <h2>Quick Start</h2>
      <p>Berikut adalah contoh sederhana untuk memulai menggunakan API:</p>

      <CardCode
        code={`curl -X GET "https://api.example.com/v1/users" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Accept: application/json"`}
        language="bash"
        title="curl"
      />

      <DropDown code={JSON.stringify(responseExample, null, 2)} />

      <h2>Authentication</h2>
      <p>API kami menggunakan Bearer token untuk autentikasi. Sertakan token Anda di header Authorization:</p>
      <h3>Available Endpoints</h3>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Method</th>
              <th>Endpoint</th>
              <th>Description</th>
              <th>Auth Required</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className="badge badge-get">GET</span>
              </td>
              <td>
                <code>/v1/users</code>
              </td>
              <td>Get all users</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>
                <span className="badge badge-post">POST</span>
              </td>
              <td>
                <code>/v1/users</code>
              </td>
              <td>Create new user</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>
                <span className="badge badge-get">GET</span>
              </td>
              <td>
                <code>
                  /v1/users/{"{"}id{"}"}
                </code>
              </td>
              <td>Get user by ID</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>
                <span className="badge badge-put">PUT</span>
              </td>
              <td>
                <code>
                  /v1/users/{"{"}id{"}"}
                </code>
              </td>
              <td>Update user</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>
                <span className="badge badge-delete">DELETE</span>
              </td>
              <td>
                <code>
                  /v1/users/{"{"}id{"}"}
                </code>
              </td>
              <td>Delete user</td>
              <td>✅</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="alert alert-warning">
        <strong>⚠️ Important:</strong> Semua request harus menyertakan header <code>Accept: application/json</code> untuk mendapatkan response dalam format JSON.
      </div>
      <h2>Error Handling</h2>
      <p>API akan mengembalikan error code standar HTTP. Berikut adalah format response error:</p>
      <div className="alert alert-success">
        <strong>✅ Ready to start?</strong> Lanjutkan ke bagian{" "}
        <a href="#installation" style={{ color: "#86efac" }}>
          Installation
        </a>{" "}
        untuk setup awal.
      </div>
    </div>
  );
}

export default HomePage;
