const toggleDark = document.getElementById('toggle');

toggleDark.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const location = document.getElementById('cityInput').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    
    const hotels = [
        { name: 'The Plaza Hotel', location: 'New York', price: 800, image: 'placeholder.jpg' },
        { name: 'The Savoy', location: 'London', price: 700, image: 'placeholder.jpg' },
        { name: 'Burj Al Arab', location: 'Dubai', price: 1800, image: 'placeholder.jpg' },
        { name: 'The Ritz Paris', location: 'Paris', price: 2000, image: 'placeholder.jpg' },
        { name: 'The Hilton', location: 'Paris', price: 700, image: 'placeholder.jpg' },
    ];

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    const filteredHotels = hotels.filter(hotel => 
        hotel.location.toLowerCase().trim() === location.toLowerCase().trim()
    );

    if (filteredHotels.length === 0) {
        resultsContainer.innerHTML = '<div class="alert">No hotels found for this location. Try "New York" or "London".</div>';
        return;
    }

    filteredHotels.forEach(hotel => {
        const hotelDiv = document.createElement('div');
        hotelDiv.className = 'card m-5 p-3 result';

        hotelDiv.innerHTML = `
            <h3>${hotel.name}</h3>
            <p><strong>Location:</strong> ${hotel.location}</p>
            <p><strong>Price per night:</strong> £${hotel.price}</p>
            <p><small>Dates: ${checkin} to ${checkout}</small></p>

            <img src="${hotel.image}" alt="${hotel.name}" style="width:50%; height:auto; object-fit:cover;">
            <button class="btn-primary" style"width:40%; height:20%>Book Now</button>
        `;
        resultsContainer.appendChild(hotelDiv);
    });
});

let adults = 1;
let children = 0;

const modal = document.getElementById("guestModal");
const input = document.getElementById("guestInput");

document.getElementById("guestInput").addEventListener("click", () => {
  modal.classList.remove("hidden");
});

function changeCount(type, value) {
  if (type === "adults") {
    adults = Math.max(1, adults + value);
    document.getElementById("adultsCount").textContent = adults;
  } else {
    children = Math.max(0, children + value);
    document.getElementById("childrenCount").textContent = children;
  }
}

function applyGuests() {
  input.value = `${adults} Adults, ${children} Children`;
  modal.classList.add("hidden");
}

// click outside modal to close
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
