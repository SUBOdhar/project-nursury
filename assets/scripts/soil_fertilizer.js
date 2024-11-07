const soils = [
 
  {
    name: "",
    pic: "",
    price1: "",
    price2: "",
  },
];

// Get the container where soils will be displayed
const soilContainer = document.getElementById("soil-container");

// Generate HTML for each soil and append it to the container
soils.forEach((item) => {
  if (item.name === "") {
    return; // Skip iteration if name is empty
  }

  const soilDiv = document.createElement("div");
  soilDiv.classList.add("soil-item"); // optional styling class
  soilDiv.setAttribute("data-soil-name", item.name);

  // Add soil details to the div
  soilDiv.innerHTML = `
        <img src="${item.pic}" alt="${item.name}" loading="lazy">
        <p><strong>${item.name}</strong></p>
        <p>Price 1: ${item.price1}</p>
    `;

  if (item.price2 !== "") {
    soilDiv.innerHTML += `<p>Price 2: ${item.price2}</p>`;
  }

  soilContainer.appendChild(soilDiv);
});
