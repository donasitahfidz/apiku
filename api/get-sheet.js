const url =
  "https://script.google.com/macros/s/AKfycbwFK5_EolFfB34107pJHG44KuhFQRyp_HP21aIiXTHkYIZC8yZiXG2Oz49KyvdPOqdr/exec"; // Ganti dengan URL Web App kamu

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
