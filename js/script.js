function affichage() {
    var el = document.getElementById("menubourgour");
    el.style.display = "flex";
    el.style.justifyContent = "space-around";
    el.style.alignItems = "center";
    el.style.animation = "fadeUp 0.5s ease-in-out";

    var il = document.getElementById("svgmenu");
    il.style.display = "none";
    var ol = document.getElementById("svgannuler");
    ol.style.display = "block";
}

function annuler() {
    var el = document.getElementById("menubourgour");
    el.style.animation = "fadeUpOut 0.5s ease-in-out";


    var il = document.getElementById("svgmenu");
    il.style.display = "block";
    var ol = document.getElementById("svgannuler");
    ol.style.display = "none";

    // Utiliser setTimeout pour définir display: none après la fin de l'animation
    setTimeout(function () {
        el.style.display = "none";
    }, 500); // La durée de l'animation en millisecondes
}

function affichageproj() {
    var el = document.getElementById("menubourgourproj");
    el.style.display = "flex";
    el.style.justifyContent = "space-around";
    el.style.alignItems = "center";
    el.style.animation = "fadeUp 0.5s ease-in-out";

    var il = document.getElementById("svgmenu");
    il.style.display = "none";
    var ol = document.getElementById("svgannuler");
    ol.style.display = "block";
}

function annulerproj() {
    var el = document.getElementById("menubourgourproj");
    el.style.animation = "fadeUpOut 0.5s ease-in-out";


    var il = document.getElementById("svgmenu");
    il.style.display = "block";
    var ol = document.getElementById("svgannuler");
    ol.style.display = "none";

    // Utiliser setTimeout pour définir display: none après la fin de l'animation
    setTimeout(function () {
        el.style.display = "none";
    }, 500); // La durée de l'animation en millisecondes
}


function copierAdresseEmail() {
    // Création d'un élément temporaire (input) pour stocker l'adresse e-mail
    var inputTemporaire = document.createElement("input");
    // Définition de la valeur de l'adresse e-mail
    inputTemporaire.setAttribute("value", "robin.kilbertus@gmail.com");
    // Ajout de l'élément temporaire au corps de la page
    document.body.appendChild(inputTemporaire);
    // Sélection de la valeur de l'élément temporaire
    inputTemporaire.select();
    // Copie de la valeur de l'élément temporaire dans le presse-papiers
    document.execCommand("copy");
    // Suppression de l'élément temporaire
    document.body.removeChild(inputTemporaire);
    // Redirection vers la section #contak
    window.location.href = "#contak";
    // Affichage d'un message de confirmation
    alert("L'adresse e-mail a été copiée");
}