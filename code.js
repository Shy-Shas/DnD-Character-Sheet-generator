var char_img_path;
var name;
var Class;
var race;

var player_name;
var alingment;
var background;
var experience_points = 0;


// #######################################  Stat-Sheet Handling  ####################################### //

//creates a class for the stats
class Stat{
    constructor(stat_name, level, bonus) {
        this.stat_name = stat_name
        this.level = level
        this.bonus = bonus
    }
}

//sets the base stats as new objects
var strength = new Stat("strength",10,0);
var dexterity = new Stat("dexterity",10,0);
var constitution = new Stat("constitution",10,0);
var inteligence = new Stat("inteligence",10,0);
var wisdom = new Stat("wisdom",10,0);
var charisma = new Stat("charisma",10,0);

//stat array
let stats = [strength, dexterity, constitution, inteligence, wisdom, charisma]
//points to change the stats
var points_to_stats = 9


// // // // js --> html funções
const stats_sheet = document.getElementById("stats_sheet"); //gets the stat sheet div from html

//circles from every stat on the list and creates a div for it
stats.forEach(stat => {
    const stt_n = document.createElement("h2"); //name of the stat
    stt_n.textContent = stat.stat_name;

    const up_stt = document.createElement("button"); //up stat level button
    up_stt.textContent = "+";
    up_stt.type = "button";

    const stt_lvl = document.createElement("h1"); //stat level
    stt_lvl.textContent = stat.level;

    const down_stt = document.createElement("button"); //down stat level button
    down_stt.textContent = "-";
    down_stt.type = "button";

    const stt_bon = document.createElement("h2"); //text with the bonus of that the level gives
    stt_bon.textContent = "+" + stat.bonus;

    const stt_div = document.createElement("div"); //creates a div to hold these items
    stt_div.className = "stat_container";

    //adds the items to the div
    stt_div.appendChild(stt_n);
    stt_div.appendChild(down_stt);
    stt_div.appendChild(stt_lvl);
    stt_div.appendChild(up_stt);
    stt_div.appendChild(stt_bon);

    //put the div in the sheet
    stats_sheet.appendChild(stt_div);

    stat.stt_lvl = stt_lvl;
    stat.stt_bon = stt_bon;

    //atualiza o valor do bonus a partir do level do jogador
    function update_bonus_value() {
        if(stat.level > 10) {
            stat.bonus = Math.floor((stat.level - 10) / 2); //adiciona +1 a cada valor par a cima de 10
            stt_bon.textContent = "+" + stat.bonus;
        }
        
        if(stat.level < 10) {
            stat.bonus = ((9 - stat.level) / 2) + 1; //adiciona -1 a cada valor ímpar abaixo de 10
            stat.bonus = Math.floor(stat.bonus)
            stt_bon.textContent = "-" + stat.bonus;
        }

        if(stat.level === 10) { //caso o level for 10 (base), o bônus é zero
            stat.bonus = 0;
            stt_bon.textContent = "+" + stat.bonus;
        }
        
    }

    up_stt.addEventListener("click", () => { //função de aumentar o level ao pressionar o botão
        if(points_to_stats > 0){ //só funciona se tiver pontos pra isso
            stat.level++;
            stt_lvl.textContent = stat.level;

            points_to_stats -= 1} //retira pontos

            update_bonus_value() //atualiza o bonus a partir do valor atual
        });

    down_stt.addEventListener("click", () => { //função de aumentar o level ao pressionar o botão
        if (stat.level > 0) { //só funciona se o level for maior que zero, impedindo níveis negativos
        stat.level--;
        stt_lvl.textContent = stat.level;
        points_to_stats += 1} //adiciona pontos

        update_bonus_value() //atualiza o bonus a partir do valor atual
    })
    
})

// // // botão reset
const reset_sheet_btn = document.createElement("button"); //cria o botão reset
reset_sheet_btn.textContent = "reset"; //texto botão
reset_sheet_btn.type = "button"; //faz com que não resete a página ao ser pressionado

reset_sheet_btn.addEventListener("click", () => {
    stats.forEach(stat => { //vai por todos os status e reseta seus valores
        stat.level = 10;
        stat.bonus = 0;

        stat.stt_lvl.textContent = stat.level;
        stat.stt_bon.textContent = "+" + 0;
    })
    points_to_stats = 9; //reseta os pontos
})

stats_sheet.appendChild(reset_sheet_btn); //bota o botão dentro da sheet (para n precisar fazer style)