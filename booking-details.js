document.addEventListener("DOMContentLoaded", () => {

  const paymentBtn = document.getElementById("paymentBtn");

  paymentBtn.addEventListener("click", () => {
    window.location.href = "payment.html";
  });

});