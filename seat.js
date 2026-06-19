document.addEventListener("DOMContentLoaded", () => {
  const seatModal = document.getElementById("seatModal");
  const closeSeat = document.getElementById("closeSeat");
  const busLayout = document.getElementById("busLayout");
  const selectedSeatsText = document.getElementById("selectedSeats");
  const totalFare = document.getElementById("totalFare");

  let selectedSeats = [];
  const fare = 867;

  const counterSeats = ["01","02","03","04","05","06","07","47","48","49","50","51","52","53","54"];
  const bookedSeats = ["11","21"];

  const pattern = [
    "05","10","15","20","25","30","35","40","45","48","54",
    "04","09","14","19","24","29","34","39","44","47","53",
    "03","08","13","18","23","28","33","38","43","46","52",
    "x","x","x","x","x","x","x","x","x","x","51",
    "02","07","12","17","22","27","32","37","42","x","50",
    "01","06","11","16","21","26","31","36","41","x","49"
  ];

  pattern.forEach(no => {
    const seat = document.createElement("div");

    if(no === "x"){
      seat.className = "seat empty";
      busLayout.appendChild(seat);
      return;
    }

    seat.className = "seat";
    seat.innerHTML = `${no}<span class="handle"></span>`;

    if(counterSeats.includes(no)){
      seat.classList.add("counter");
    }

    if(bookedSeats.includes(no)){
      seat.classList.add("booked");
    }

    seat.addEventListener("click", () => {
      if(seat.classList.contains("booked")) return;

      seat.classList.toggle("processing");

      if(selectedSeats.includes(no)){
        selectedSeats = selectedSeats.filter(s => s !== no);
      }else{
        selectedSeats.push(no);
      }

      selectedSeatsText.textContent = `[ ${selectedSeats.join(", ")} ]`;
      totalFare.textContent = selectedSeats.length * fare;
    });

    busLayout.appendChild(seat);
  });

  document.querySelectorAll(".book-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      seatModal.classList.add("show");
    });
  });

  closeSeat.addEventListener("click", () => {
    seatModal.classList.remove("show");
  });
});



const proceedBtn = document.getElementById("proceedBtn");

if(proceedBtn){
  proceedBtn.addEventListener("click", () => {
    window.location.href = "booking-details.html";
  });
}