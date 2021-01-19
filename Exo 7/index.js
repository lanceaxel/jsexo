let tabl = [];

function computeNotes() {
    var recupNumber = document.getElementById('number').value; // Permet de récupéré la valeur de l'input texte entrée par l'utilisateur
    var integer = parseInt(recupNumber, 10); // Transformation de la chaine de caractère en nombre. exemple -> '10' deviens 10

    tabl.push(integer);   // Ajout du nombre au tableau
    console.log(tabl);  // Vérification de l'ajout de la valeur dans le tableau tabl

    var calcul = (tabl[0] + tabl[1] + tabl[2] + tabl[3] + tabl[4]) / 5; // Calcul de la moyenne

    var sendMoyenne = document.getElementById('resultat'); // Selection de l'input qui recevra le résultat de la moyenne
    if (tabl.length < 5) {
        sendMoyenne.setAttribute('value', 'Pas assez de notes !');
    } else if (tabl.length > 5) {
        sendMoyenne.setAttribute('value', 'Trop de notes !');
    } else {
        sendMoyenne.setAttribute('value', calcul); // Attribution à l'input attribut 'valeur' du résultat
        console.log(calcul);
    }
}