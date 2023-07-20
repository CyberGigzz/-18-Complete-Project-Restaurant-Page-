function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "📞 555 444 333";

  const address = document.createElement("p");
  address.textContent = "🏠 20 Gogebashvili St, Batumi 6010, Adjara, Georgia";

  const restaurantLocation = document.createElement("img");
  restaurantLocation.src = "img/restaurant-location.png";
  restaurantLocation.alt = "Mozzafiato restaurant location";

  contact.appendChild(phoneNumber);
  contact.appendChild(address);
  contact.appendChild(restaurantLocation);

  return contact;
}

function loadContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;
