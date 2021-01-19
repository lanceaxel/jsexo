// FONCTION PRINCIPALE //

var generateId = 0;

function gridGenerator() {
    // Boucle permettant de générer 3 lignes, et donc d'appeler 3 fois la fonction addMatrices
    var i;
    for (i = 0; i < 5; i++) {
        addMatrices();
    }

};

function Color() {
    aColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    return aColor;
};


// FONCTIONS SECONDAIRE //

function addMatrices() {
    var i;

    // Variables permettant de générer un ID différents pour chaque TR
    generateId = generateId + 1;
    generatedColumnId = 'th' + generateId;
    generatedTableId = 'table' + generateId;

    // Creation de la nouvelle Table
    var newTable = document.createElement("table");
    newTable.setAttribute('id', generatedTableId);

    // Ajout de la nouvelle table au DOM
    var currentDiv = document.getElementById('div1');
    currentDiv.appendChild(newTable);

    // Création de nouvelles colonnes
    for (i = 0; i < 12; i++) {
        generateId += 1;
        generatedColumnId = 'th' + generateId;
        var newColumn = document.createElement('th');
        newColumn.setAttribute('id', generatedColumnId);

        // Ajout des nouvelles colonnes
        var currentTable = document.getElementById(generatedTableId);
        currentTable.appendChild(newColumn);

        // Ajout de couleur 
        var newColumnColor = document.getElementById(generatedColumnId);
        var test = newColumnColor.style.backgroundColor = Color();
        newColumnColor.style.backgroundColor = test;
        newColumnColor.style.width = '100px';
        newColumnColor.style.height = '110px';
    }
};


function automateColor() {
    // récupère tout les th, et les stocks dans le tableau colorie[]
    var browseId = 0
    var colorie = document.getElementsByTagName('TH');
    for (var i = 0; i < colorie.length + 5; i++) {
        browseId += 1;
        console.log(document.getElementById('th' + browseId));
        var takeId = document.getElementById('th' + browseId);
        if (takeId != null) {
            takeId.style.backgroundColor = Color();
        }

    }
};



function timeColor() {
    setInterval(automateColor, 1500);
}







