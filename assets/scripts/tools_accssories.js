const tools = [
  {
    name: "",
    pic: "",
    price1: "",
    price2: "",
  },
];

// Get the container where tools will be displayed
const toolContainer = document.getElementById("tool-container");

// Generate HTML for each tool and append it to the container
tools.forEach((item) => {
  if (item.name === "") {
    return; // Skip iteration if name is empty
  }

  const toolDiv = document.createElement("div");
  toolDiv.classList.add("tool-item"); // optional styling class
  toolDiv.setAttribute("data-tool-name", item.name);

  // Add tool details to the div
  toolDiv.innerHTML = `
        <img src="${item.pic}" alt="${item.name}" loading="lazy">
        <p><strong>${item.name}</strong></p>
        <p>Price 1: ${item.price1}</p>
    `;

  if (item.price2 !== "") {
    toolDiv.innerHTML += `<p>Price 2: ${item.price2}</p>`;
  }

  toolContainer.appendChild(toolDiv);
});
