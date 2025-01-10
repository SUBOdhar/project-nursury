const flowers = [
  {
    name: "Aralia",
    pic: "/assets/images/flower/1.jpg",
    price1: "Rs 250",
    price2: "",
  },
  {
    name: "Table Kamini",
    pic: "/assets/images/flower/2.jpg",
    price1: "Small: Rs 250",
    price2: "Big: Rs 450",
  },

  {
    name: "Hibisucs",
    pic: "/assets/images/flower/3.jpg",
    price1: "Small: Rs 250",
    price2: "Big: Rs 550",
  },
  {
    name: "Schefflera Brassia",
    pic: "/assets/images/flower/6.jpg",
    price1: "Small: Rs 350",
    price2: "Big: Rs 750",
  },
  {
    name: "Radermachera Sinica",
    pic: "/assets/images/flower/7.jpg",
    price1: "Small: Rs 550",
    price2: "Big: RS 1050",
  },
  {
    name: "Snake Plant",
    pic: "/assets/images/flower/9.jpg",
    price1: "Small: Rs 450",
    price2: "Big: Rs 1050",
  },
  {
    name: "Dieffenbachia",
    pic: "/assets/images/flower/10.jpg",
    price1: "Small: Rs 450",
    price2: "Big: Rs 850",
  },
  {
    name: "Azalea",
    pic: "/assets/images/flower/11.jpg",
    price1: "Rs 350",
    price2: "",
  },
  {
    name: "snake Palnt(Green)",
    pic: "/assets/images/flower/13.jpg",
    price1: "Small: Rs 450",
    price2: "Big: Rs 1050",
  },
  {
    name: "Begonia",
    pic: "/assets/images/flower/15.jpg",
    price1: "Rs 550",
    price2: "",
  },
  {
    name: "Begonia",
    pic: "/assets/images/flower/16.jpg",
    price1: "Rs 550",
    price2: "",
  },
  {
    name: "Begonia",
    pic: "/assets/images/flower/17.jpg",
    price1: "Rs 550",
    price2: "",
  },
  {
    name: "Money Tree",
    pic: "/assets/images/flower/19.jpg",
    price1: "Rs 1050",
    price2: "",
  },
  {
    name: "Peace Lily",
    pic: "/assets/images/flower/20.jpg",
    price1: "Rs 1050",
    price2: "",
  },
  {
    name: "Orchid Plant",
    pic: "/assets/images/flower/21.jpg",
    price1: "Rs 1850",
    price2: "",
  },
  {
    name: "Anthurium",
    pic: "/assets/images/flower/22.jpg",
    price1: "Rs 1850",
    price2: "",
  },
  {
    name: "Giraniam",
    pic: "assets/images/flowers/1.jfif",
    price1: "RS 250",
    price2: "RS 850",
  },
    {
    name: "Lalupate",
    pic: "assets/images/flowers/4.jfif",
    price1: "RS 250",
    price2: "RS 850",
  },
  {
    name: "Godawori",
    pic: "assets/images/flowers/5.jfif",
    price1: "RS 75",
    price2: "RS 350",
  },
  {
    name: "Christmas Cactus",
    pic: "assets/images/flowers/6.jfif",
    price1: "RS 450",
  },
  {
    name: "Vervina",
    pic: "assets/images/flowers/7.jfif",
    price1: "RS 75",
  },
  {
    name: "Gloxinia",
    pic: "assets/images/flowers/8.jfif",
    price1: "RS 550",
  },
  {
    name: "Adenium",
    pic: "assets/images/flowers/13.jfif",
    price1: "RS 1250",
  },
  {
    name: "Dieffenbacia ",
    pic: "assets/images/flowers/16.jfif",
    price1: "RS 250",
    price2: "RS 850",
  },
  {
    name: "Philodendron",
    pic: "assets/images/flowers/15.jfif",
    price1: "RS 1250",
  },
  {
    name: "Lotus",
    pic: "assets/images/flowers/17.jfif",
    price1: "RS 750",
  },

];

// Get the container where flowers will be displayed
const flowerContainer = document.getElementById("flower-container");

// Generate HTML for each flower and append it to the container
flowers.forEach((flower) => {
  if (flower.name === "") {
    return; // Skip iteration if name is empty
  }

  const flowerDiv = document.createElement("div");
  flowerDiv.classList.add("flower-item"); // optional styling class
  flowerDiv.setAttribute("data-flwr-name", flower.name);
  // Add flower details to the div
  flowerDiv.innerHTML = `
        <img src='${flower.pic}' loading="lazy" alt="${flower.name}"></img>
        <p><strong> ${flower.name}</strong></p>
        <p> ${flower.price1}</p>
    `;
  if (flower.price2 != "") {
    flowerDiv.innerHTML += `<p>${flower.price2}</p>`;
  }

  flowerContainer.appendChild(flowerDiv);
});
