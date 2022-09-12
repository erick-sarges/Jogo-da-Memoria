const front = "card-front";
const back = "card-back";


let techs = [

"botstrap",
"css",
"electron",
"firebase",
"html",
"javascript",
"jquery",
"mongo",
"node",
"react",
];

let cards = null;
startGame();

function startGame(){
let cards = createCardsFromTechs(techs);
shuffleCards(cards);

};


function shuffleCards(cards){
let currentIndex = cards.length;
let randomIndex = 0;

while(currentIndex !== 0){
    randomIndex = Math.floor(Math.random * currentIndex);
    currentIndex--;
    [cards[randomIndex], cards[currentIndex] = cards[currentIndex], cards[randomIndex]];
};

};

createCardsFromTechs(techs);
function createCardsFromTechs(){

    let cards = [];

    for(let tech of techs){
        cards.push(createPairFromTech(tech));

    }
return  cards.flatMap(pair => pair);
};

function createPairFromTech(tech){

    return [{

        id: createIdWithTech(tech),
        icon:tech,
        flipped: false,

    },{
        id: createIdWithTech(tech),
        icon:tech,
        flipped: false,
    }];
};

function createIdWithTech(tech){
    return tech + parseInt(Math.random() *100);
 
};