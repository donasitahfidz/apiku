const url = "https://script.google.com/macros/s/AKfycbw123xyz/exec"; // Ganti dengan URL Web App kamu

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("output").textContent = JSON.stringify(
      data,
      null,
      2
    );
  })
  .catch((error) => {
    document.getElementById("output").textContent = "Error: " + error;
  });
