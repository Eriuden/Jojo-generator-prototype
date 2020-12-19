const library = "https://raw.githubusercontent.com/Eriuden/Jojo-generator-prototype/main/jjbaquote-library.json?token=AQ6L4XAE7SC2X2GBI2GNMPK73ZD7A"; //les listes JSON s'écrivent ainsi, une liste d'objet entre [] , et chaque objet entre {} pour chacune des entrées de cet objet (ex: nom, âge, poids) balise et valeur sont chacune entre parenthèses, séparés par : et une virgule pour l'entrée suivante, ne pas en mettre à la dernière, mais pour mettre un prochain objet, mettre une virgule après la } terminant l'objet précédent

let btn = document.getElementById("btn");
let memegif = document.getElementById("meme-gif");
let quot = document.getElementById("quote");
let Charact = document.getElementById("Character");
let quotes = [];

btn.addEventListener("click", updatePage);

// faire la liste de jojorefs JSON, s'inspirer de la liste chez Graven, c'est long, chiant, mais simple
//pour récuperer les élements depuis le lien du JSON

fetch(library).then((data) => {
    data.json().then((data) => {
        quotes = data;
    });
});

function updatePage() {

    //la formule magique pour l'aléat
    let random = Math.floor(Math.random() * (quotes.length - 0));
    let randomQuotes = quotes[random];


    Character.innerHTML = randomQuotes["Character"];
    quote.innerHTML = randomQuotes["quote"]
    memegif.setAttribute("src", randomQuotes["meme-gif"]);
}
