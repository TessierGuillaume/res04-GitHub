   // Liste des couleurs de l'arc-en-ciel
   const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

   // Récupération de l'élément conteneur
   const container = document.getElementById("container");

   // Fonction pour afficher progressivement les cases
   function showSquares() {
     let delay = 0;
     rainbowColors.forEach(color => {
       const square = document.createElement("div");
       square.className = "square";
       square.style.backgroundColor = color;
       square.style.opacity = "0";
       container.appendChild(square);

       setTimeout(() => {
         square.style.opacity = "1";
       }, delay);
       
       delay += 500; // Délai d'affichage en millisecondes
     });
   }

   // Appel de la fonction pour afficher les cases progressivement
   showSquares();