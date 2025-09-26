// === Inisialisasi EmailJS (jika digunakan) ===
if (typeof emailjs !== "undefined") {
  emailjs.init("S3WRBkUbDXMORd-ji"); // ganti dengan public key kamu
}

// === Event listener untuk login ===
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Login sederhana (hardcoded)
    if (email === "sinta@gmail.com" && password === "sinta123") {
      alert("Login berhasil!");
      localStorage.setItem("username", "Sinta");
      window.location.href = "home.html";
    } 
    else if (email === "admin@gmail.com" && password === "admin123") {
      alert("Login berhasil!");
      localStorage.setItem("username", "Admin");
      window.location.href = "home.html";
    }
    else {
      alert("Email atau password salah.");
    }
  });
}

// === Event listener untuk forgot password ===
const forgotPasswordBtn = document.getElementById("forgotPassword");
if (forgotPasswordBtn) {
  forgotPasswordBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const email = prompt("Masukkan email akun Anda:");

    if (email) {
      if (email === "yasintadestiy19@gmail.com" || email === "kasir@gmail.com") {
        const newPassword = "PassBaru123"; // bisa digenerate random kalau mau

        if (typeof emailjs !== "undefined") {
          // Kirim email pakai EmailJS
          emailjs.send("service_pa0kehr", "template_v2p4bv8", {
            to_email: email,
            to_name: email,
            new_password: newPassword
          })
          .then(function () {
            alert("Password baru telah dikirim ke email " + email + ".");
          })
          .catch(function (error) {
            alert("Gagal mengirim email: " + JSON.stringify(error));
          });
        } else {
          alert("EmailJS belum dimuat, tidak bisa kirim email.");
        }

      } else {
        const storedUser = JSON.parse(localStorage.getItem(email));

        if (storedUser) {
          alert("Password Anda: " + storedUser.password);
        } else {
          alert("Email tidak terdaftar.");
        }
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("messageForm");
  const dataBox = document.getElementById("dataBox");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const userMessage = document.getElementById("userMessage").value;

    const now = new Date();
    const currentTime = now.toLocaleString("id-ID", {
      dateStyle: "full",
      timeStyle: "medium"
    });

    // Isi ulang box (hapus yang lama, tampilkan yang baru)
    dataBox.innerHTML = `
      <div class="data-box">
        <h2><strong>Data Terkirim </strong> </h2>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Tanggal Lahir:</strong> ${dob}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Pesan:</strong> ${userMessage}</p>
        <p><em>Dikirim pada: ${currentTime}</em></p>
      </div>
    `;

    // Reset form setelah kirim
    form.reset();
  });
});

// Toggle mobile menu
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
