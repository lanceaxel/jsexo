var twoForm = 0;

function changeValue() {
    if ( twoForm == 0 ) {
        twoForm +=1;
    } else {
        twoForm -= 1;
    }
}

function MyMorpionXO1() {
    var createForme = document.createElement('img');
    if ( twoForm == 0) {
        createForme.src = 'croix.png';       
    } else { 
        createForme.src = 'cercle.png'; 
      }
    createForme.style.width = '100%';
    createForme.style.height = '100%';
    createForme.style.marginTop = '-100px';
    var sendImage = document.getElementById('th2')
    sendImage.setAttribute('name', twoForm);
    sendImage.appendChild(createForme);
    console.log(twoForm);
    window.addEventListener('click', changeValue());
}

function MyMorpionXO2() {
    var createForme = document.createElement('img');
    if ( twoForm == 0) {
        createForme.src = 'croix.png';       
    } else { 
        createForme.src = 'cercle.png'; 
      }
    createForme.style.width = '100%';
    createForme.style.height = '100%';
    createForme.style.marginTop = '-100px';
    var sendImage = document.getElementById('th3')
    sendImage.setAttribute('name', twoForm);
    sendImage.appendChild(createForme);
    console.log(twoForm);
    window.addEventListener('click', changeValue());
}

function MyMorpionXO3() {
    var createForme = document.createElement('img');
    if ( twoForm == 0) {
        createForme.src = 'croix.png';       
    } else { 
        createForme.src = 'cercle.png'; 
      }
    createForme.style.width = '100%';
    createForme.style.height = '100%';
    createForme.style.marginTop = '-100px';
    var sendImage = document.getElementById('th4')
    sendImage.setAttribute('name', twoForm);
    sendImage.appendChild(createForme);
    console.log(twoForm);
    window.addEventListener('click', changeValue());
}

function MyMorpionXO4() {
    var createForme = document.createElement('img');
    if ( twoForm == 0) {
        createForme.src = 'croix.png';       
    } else { 
        createForme.src = 'cercle.png'; 
      }
    createForme.style.width = '100%';
    createForme.style.height = '100%';
    createForme.style.marginTop = '-100px';
    var sendImage = document.getElementById('th6')
    sendImage.setAttribute('name', twoForm);
    sendImage.appendChild(createForme);
    console.log(twoForm);
    window.addEventListener('click', changeValue());
}

function MyMorpionXO5() {
    var createForme = document.createElement('img');
    if ( twoForm == 0) {
        createForme.src = 'croix.png';       
    } else { 
        createForme.src = 'cercle.png'; 
      }
    createForme.style.width = '100%';
    createForme.style.height = '100%';
    createForme.style.marginTop = '-100px';
    var sendImage = document.getElementById('th7')
    sendImage.setAttribute('name', twoForm);
    sendImage.appendChild(createForme);
    console.log(twoForm);
    window.addEventListener('click', changeValue());
}

function MyMorpionXO6() {
    var createForme = document.createElement('img');
    if ( twoForm == 0) {
        createForme.src = 'croix.png';       
    } else { 
        createForme.src = 'cercle.png'; 
      }
    createForme.style.width = '100%';
    createForme.style.height = '100%';
    createForme.style.marginTop = '-100px';
    var sendImage = document.getElementById('th8')
    sendImage.setAttribute('name', twoForm);
    sendImage.appendChild(createForme);
    console.log(twoForm);
    window.addEventListener('click', changeValue());
}

function MyMorpionXO7() {
    var createForme = document.createElement('img');
    if ( twoForm == 0) {
        createForme.src = 'croix.png';       
    } else { 
        createForme.src = 'cercle.png'; 
      }
    createForme.style.width = '100%';
    createForme.style.height = '100%';
    createForme.style.marginTop = '-100px';
    var sendImage = document.getElementById('th10')
    sendImage.setAttribute('name', twoForm);
    sendImage.appendChild(createForme);
    console.log(twoForm);
    window.addEventListener('click', changeValue());
}

function MyMorpionXO8() {
    var createForme = document.createElement('img');
    if ( twoForm == 0) {
        createForme.src = 'croix.png';       
    } else { 
        createForme.src = 'cercle.png'; 
      }
    createForme.style.width = '100%';
    createForme.style.height = '100%';
    createForme.style.marginTop = '-100px';
    var sendImage = document.getElementById('th11')
    sendImage.setAttribute('name', twoForm);
    sendImage.appendChild(createForme);
    console.log(twoForm);
    window.addEventListener('click', changeValue());
}

function MyMorpionXO9() {
    var createForme = document.createElement('img');
    if ( twoForm == 0) {
        createForme.src = 'croix.png';       
    } else { 
        createForme.src = 'cercle.png'; 
      }
    createForme.style.width = '100%';
    createForme.style.height = '100%';
    createForme.style.marginTop = '-100px';
    var sendImage = document.getElementById('th12')
    sendImage.setAttribute('name', twoForm);
    sendImage.appendChild(createForme);
    console.log(twoForm);
    window.addEventListener('click', changeValue());
    calculPoint()
}

// CALCUL DE LA VICTOIRE
function calculPoint() {
}




