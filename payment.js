


document.querySelector(".pay-btn").addEventListener("click", () => {
  const booking = {
    seats: localStorage.getItem("selectedSeats"),
    boarding: localStorage.getItem("boardingPoint"),
    dropping: localStorage.getItem("droppingPoint"),
    fare: localStorage.getItem("totalFare"),
    date: new Date().toLocaleString()
  };

  let history = JSON.parse(localStorage.getItem("bookingHistory")) || [];
  history.push(booking);

  localStorage.setItem("bookingHistory", JSON.stringify(history));

  window.location.href = "booking-history.html";
});