// Sabor Chileno - interacciones solicitadas

// Al presionar la estrella, aumenta en uno la puntuación de esa receta.
document.querySelectorAll(".star-button").forEach((button) => {
  button.addEventListener("click", () => {
    const recipe = button.dataset.recipe;
    const score = document.getElementById(`score-${recipe}`);
    const currentScore = Number(score.textContent);
    score.textContent = currentScore + 1;
  });
});

// Al presionar "Cerrar anuncio", se oculta toda la sección de publicidad.
const closeAdButton = document.getElementById("close-ad");
const advertisement = document.getElementById("advertisement");

closeAdButton.addEventListener("click", () => {
  advertisement.hidden = true;
});

// Al buscar, aparece una alerta que incluye exactamente el texto ingresado.
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchText = searchInput.value.trim();

  if (searchText === "") {
    alert("Escribe una receta para buscar.");
    searchInput.focus();
    return;
  }

  alert(`Buscando recetas de: ${searchText}`);
});
