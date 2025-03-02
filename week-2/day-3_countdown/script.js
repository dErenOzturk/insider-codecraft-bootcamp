let countdown;
let timeLeft;

// 'Başlat' butonuna tıklanma olayını dinle
document.getElementById("startButton").addEventListener("click", function () {
  const input = document.getElementById("countdownInput").value;
  timeLeft = parseInt(input);

  if (isNaN(timeLeft) || timeLeft <= 0) {
    alert("Lütfen geçerli bir süre girin.");
    return;
  }

  document.getElementById("countdownDisplay").textContent = `Süre: ${timeLeft}`;
  clearInterval(countdown);

  countdown = setInterval(function () {
    timeLeft--;

    document.getElementById(
      "countdownDisplay"
    ).textContent = `Süre: ${timeLeft}`;

    if (timeLeft <= 0) {
      clearInterval(countdown);
      document.getElementById("countdownDisplay").textContent = "Süre doldu!";
    }
  }, 1000);
});

document.getElementById("resetButton").addEventListener("click", function () {
  clearInterval(countdown);
  timeLeft = 0;
  document.getElementById("countdownDisplay").textContent = "Süre: 0";
  document.getElementById("countdownInput").value = "";
});
