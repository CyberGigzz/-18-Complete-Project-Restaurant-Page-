function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const khachapuriImage = document.createElement("img");
  khachapuriImage.src = "img/khachapuri.jpg";
  khachapuriImage.alt = "khachapuri";

  home.appendChild(createParagraph("Best khachapuri you could eat"));
  home.appendChild(createParagraph("Made with passion since 1998"));
  home.appendChild(khachapuriImage);
  home.appendChild(createParagraph("Order online or visit us!"));

  return home;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;
