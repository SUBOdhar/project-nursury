const tree = [
  {
    name: "Cycus",
    pic: "/assets/images/trees/1.jiff",
    price1: "Rs 500",
    price2: "Rs 10000",
  },
    {
    name: "Orange tree",
    pic: "/assets/images/trees/2.jiff",
    price1: "Rs 250",
    price2: "Rs 2500",
  },
];
const treeContainer = document.getElementById("tree-container");

tree.forEach((tree) => {
  if (tree.name === "") {
    return; // Skip iteration if name is empty
  }

  const treeDiv = document.createElement("div");
  treeDiv.classList.add("tree-item"); // optional styling class
  treeDiv.setAttribute("data-tree-name", tree.name);
  // Add tree details to the div
  treeDiv.innerHTML = `
        <img src='${tree.pic}' loading="lazy"></img>
        <p><strong> ${tree.name}</strong></p>
        <p> ${tree.price1}</p>
    `;
  if (tree.price2 != "") {
    treeDiv.innerHTML += `<p>${tree.price2}</p>`;
  }

  treeContainer.appendChild(treeDiv);
});
