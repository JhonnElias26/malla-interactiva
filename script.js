function mostrarInfo(ramo) {
  const info = {
    "Mate I": "Contenido: Álgebra, límites, derivadas. Créditos: 5.",
    "Prog": "Contenido: Variables, condicionales, ciclos. Créditos: 4.",
    "Fisica": "Contenido: Cinemática, fuerzas, energía. Créditos: 5."
  };

  // Elimina clase activo
  document.querySelectorAll(".ramo").forEach(r => r.classList.remove("activo"));
  
  // Activa el ramo clickeado
  event.target.classList.add("activo");

  // Muestra la información
  document.getElementById("infoRamo").textContent = info[ramo] || "Ramo no encontrado";
}
