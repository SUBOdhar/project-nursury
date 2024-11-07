const tree = [
  {
    name: "",
    pic: "",
    price1: "",
    price2: "",
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
