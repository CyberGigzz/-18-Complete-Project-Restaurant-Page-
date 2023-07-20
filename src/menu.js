function createMenu() {
  const menuItemsData = [
    {
      name: "Imeretian",
      description:
        "Khachapuri dough, Warm water, All purpose flour, eggs, butter, Cheese, Olive oil",
    },
    {
      name: "Adjarian",
      description:
        "Khachapuri dough, Warm water, All purpose flour, eggs, butter, Cheese Olive oil",
    },
    {
      name: "Mengrelian",
      description:
        "Khachapuri dough, Warm water, All purpose flour, eggs, butter, Cheese Olive oil",
    },
    {
      name: "Gurian",
      description:
        "Khachapuri dough, Warm water, All purpose flour, eggs, butter, Cheese Olive oil",
    },
    {
      name: "Rachuli",
      description:
        "Khachapuri dough, Warm water, All purpose flour, eggs, butter, Cheese Olive oil",
    },
    {
      name: "Penovani",
      description:
        "Khachapuri dough, Warm water, All purpose flour, eggs, butter, Cheese Olive oil",
    },
  ];

  const menu = document.createElement("div");
  menu.classList.add("menu");

  menuItemsData.map((item) => {
    menu.appendChild(createMenuItem(item));
  });

  return menu;
}

function createMenuItem({ name, description }) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodName = document.createElement("h2");
  foodName.textContent = name;

  const foodDescription = document.createElement("p");
  foodDescription.textContent = description;

  const foodImage = document.createElement("img");
  foodImage.src = `img/${name.toLowerCase()}.jpg`;
  foodImage.alt = name;

  menuItem.append(foodImage, foodName, foodDescription);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;
