const apiUrl =
  "https://script.google.com/macros/s/AKfycbwFK5_EolFfB34107pJHG44KuhFQRyp_HP21aIiXTHkYIZC8yZiXG2Oz49KyvdPOqdr/exec";

async function loadData() {
  const output = document.getElementById("output");
  const loadingDiv = document.getElementById("loading");
  const errorDiv = document.getElementById("error");

  // Validasi elemen output
  if (!output || !loadingDiv || !errorDiv) {
    console.error("Elemen HTML tidak ditemukan");
    return;
  }

  try {
    loadingDiv.style.display = "block";
    errorDiv.style.display = "none";

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(
        `Gagal memuat data: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    if (!Array.isArray(data)) {
      throw new Error("Data bukan array: " + JSON.stringify(data));
    }

    output.innerHTML = ""; // Kosongkan daftar sebelum menambahkan data baru

    if (data.length === 0) {
      errorDiv.textContent = "Tidak ada data produk yang tersedia.";
      errorDiv.style.display = "block";
      return;
    }

    data.forEach((item) => {
      // Validasi properti
      const nama = item.nama || item.Nama || "Produk Tidak Diketahui";
      const harga = item.harga || item.Harga || 0;

      const li = document.createElement("li");
      li.textContent = `${sanitizeText(nama)} - Rp${Number(
        harga
      ).toLocaleString("id-ID")}`;
      output.appendChild(li);
    });
  } catch (error) {
    errorDiv.textContent = `Terjadi kesalahan: ${error.message}`;
    errorDiv.style.display = "block";
  } finally {
    loadingDiv.style.display = "none";
  }
}

// Fungsi untuk sanitasi teks
function sanitizeText(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.textContent;
}

// Panggil fungsi saat halaman dimuat
window.onload = loadData;
