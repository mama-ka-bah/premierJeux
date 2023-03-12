const prompt = require ( 'prompt-sync' ) ( ) ;

var puissance4 = [];
var nbColonne = 6;
var nbLigne = 7;
var joueur1Car = "x";
var joueur2Car = "o";

puissance4 = initialiserTableauVide(nbLigne, nbColonne, 0);

//console.log(puissance4);

initialiserTableauVide()
afficherPuissance4(puissance4, joueur1Car, joueur2Car);

while(true){

    if( jouerCase(1)){
        pasTermine = true;
        console.log("Le joueur 1 a gagné");
        return;
    }
    if(jouerCase(2)){
        pasTermine = true;
        console.log("Le joueur 2 a gagné");
        return;
    }
    
}

function jouerCase(joueur){
    var ligneVide = -1;
    var colonne = -1;
    while(ligneVide === -1 || colonne <= 0 || colonne > 7){
        console.log("Choisir une colonne à un emplacement vide");
        var colonne = saisirColonne();
        console.log("ttttttttt: " + colonne);
        //on recupere la ligne de la colonne choisie
        var ligneVide = retournerLigneCaseVideColonne(colonne);
    }
   
   //on met le joueur dans la colonne choisie
   puissance4[ligneVide][colonne-1] = joueur ;
   afficherPuissance4(puissance4, joueur1Car, joueur2Car);
   return verificationFinJeu();
}

/**
 * Fonction permettant de saisir une colonne
 * @returns int
 */
function saisirColonne(){
   
    return parseInt(prompt("Quelle colonne ? "));
   
}

/**
 * 
 * @returns int
 */
function retournerLigneCaseVideColonne(){
    return 5;
}

/**
 * 
 * @returns Boolen
 */
 function verificationFinJeu(){
    return true;
}


/**
 * permet d'initiliser un tableau à  multiple dimesnsion en fonction des parametre "nombre de ligne" et "nombre de colonne"
 * @param {number} nbLigne 
 * @param {number} nbColonne 
 * @param {*} car 
 * @returns 
 */
function initialiserTableauVide(nbLigne, nbColonne, car=''){
    var tab = [];

    for(var i  = 0; i<nbColonne; i++ ){
        var lignes = [];
        for(var j = 0; j<nbLigne; j++){
            lignes.push(car);
        }
        tab.push(lignes);
    }

    return tab;
}


/**
 * 
 * @param {Array<String>} tab 
 * @param {String} j1car le car de j1
 * @param {String} j2car le car de j2
 */
function afficherPuissance4(tab, j1car, j2car){
    for(var i = 0; i<tab.length; i++){
        var lignes = "";
        for(var j = 0; j<tab[i].length; j++){
            lignes += "| ";
            if(tab[i][j] === 0){
                lignes += "_";
            }else if(tab[i][j] === 1){
                lignes += j1car;
            }else if(tab[i][j] === 2){
                lignes += j2car;
            }
            lignes += " |";
        }
        console.log(lignes);
    }
}

