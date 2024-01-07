const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h2);

const newHeader = document.createElement("h3");
newHeader.id = "header";
newHeader.innerHTML = "Testing";
document.body.append(newHeader);

