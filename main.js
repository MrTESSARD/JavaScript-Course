// EXERCICES SUR LES FUNCTIONS

function compteurVoyelles(string){
    // Initialiser mon compteur
    let compteur = 0;
    // DECLARER LES VOYELLES
    // let splitVoyelles = "aeiouy".split('');
    const voyelles = ["a","e","i","o","u","y"];
    // BOUCLE FOR POUR VERIFIER
    lowerString = string.toLowerCase();
    for (let carac of lowerString){
        if(voyelles.includes(carac)){
            //LA LETTRE EST UNE VOYELLE
            compteur++;
        }
    }
    return compteur;
};

function pairImpair(a){
    return !(a%2);
}

// ENONCE : A PARTIR DE L'ARRAY SUIVANT, FAIRE UNE FONCTION QUI CREE UNE SIMULATION DE COMBAT EN CHOISISSANT ALEATOIRE DEUX COMBATTANTS ET QUI RETOURNE UN PHRASE DU TYPE A vs B

function vs(){
    const fighter = ["Ryu", "Ken", "Chun-Li", "Goku", "Vegeta", "Beerus", "Heihachi","Jin","Connor McGregor", "Dhalsim", "Blanka", "Khabib", "John Cena", "The Rock"];


    function randomFighter(){
        return fighter[Math.floor(Math.random() * fighter.length)];
    }

    let fighter1 = randomFighter();
    let fighter2 = randomFighter();

    //let fighter1 = fighter[Math.floor(Math.random() * fighter.length)];
    //let fighter2 = fighter[Math.floor(Math.random() * fighter.length)];
    /*
    let fighter1 = fighter[random()];
    let fighter2 = fighter[random()];
    */
    return `Get ready for the next battle ! ${fighter1} VS ${fighter2}`;
}

function SFxTekkenxDBZ(){
    const sfPool = ["Ryu","Ken","Chun-li","Akuma","Gouken","Bison","Guile","Dhalsim","Seth","Vega","Balrog","Ibuki","Sagat","Cammy","Blanka","E.Honda","Karin","Sakura","Zangief","Rose"];
    const dbfzPool =  ["SS Goku","SS Vegeta", "GT Goku", "C-21", "C-18", "C-17","C-16", "Super Baby 2", "Janemba", "SSGSS Gogeta", "SSGSS Goku", "Beerus", "Ginyu", "Cell", "Frieza", "Cooler", "A.Gohan", "T.Gohan", "Zamasu Fused", "Goku Black", "Jiren", "Hit", "Kid Buu", "Majin Buu", "Tien" , "Yamcha", "Nappa", "Trunks", "Bardock", "Broly", "Broly (DBS)","Videl", "Kefla", "UI Goku", "Piccolo", "SSGSS Vegito"];
    const tekkenPool = ["Jin","Heihachi","Kazuya","Alisa","Leroy","Master Raven","Kuma","Panda","Akuma (Tekken)","Steve","Lee","Lei","Paul","Law","Nina","Yoshimitsu","Hwoarang","King","Armor King","Xiaoyu","Brian","Eddy","Anna","Asuka","Feng","Lili","Ganryu","Devil Jin","Bob","Leo","Miguel","Lars","Claudio","Katarina","Lucky Chloe","Shaheen","Josie","Gigas","Jack-7","Kazumi","Eliza","Marduk","Zafina","Kunimitsu","Negan (TWD)","Fahkumram","Geese","Noctis"];
    const fullPool = [sfPool,dbfzPool,tekkenPool];
    function randomTeam(){
        const team = [];
        for(let pool of fullPool){
            let char = pool[Math.floor(Math.random() * pool.length)];
            console.log(char);
            team.push(char)
        }
        console.log(team);
        return team.join("/");
    }
    return `Time for the big showdown ! Team 1 : ${randomTeam()} VS Team 2 : ${randomTeam()}`
}

console.log(vs());
console.log(SFxTekkenxDBZ());


console.log(pairImpair(2))

console.log(compteurVoyelles("pascal"));
console.log(compteurVoyelles("carolane"));
