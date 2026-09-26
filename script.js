// Récupère automatiquement l'année actuelle
const year = document.getElementById("year");

// L'affiche dans le pied de page
year.textContent = new Date().getFullYear();