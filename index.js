// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Priorités en CSS : ! important (ou dans CSS #exempleID.classAjoutéeParJS) > id > classe > baliseHtml

const sidebar = document.getElementById("side-bar");
const content = document.querySelector(".content");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

content.addEventListener("click", () => {
  sidebar.classList.remove("open");
});
