var char_img_path;
var name;
var Class;
var race;

var player_name;
var alingment;
var background;
var experience_points = 0;

//
//document.getElementById("submit_button").addEventListener("click", function() {
    //let name = document.getElementById("char_namespace").value
// }


// Stats Handling
class Stat{
    constructor(stat_name, level, bonus) {
        this.stat_name = stat_name
        this.level = level
        this.bonus = bonus
    }
}

var strength = new Stat("strength",10,0);
var dexterity = new Stat("dexterity",10,0);
var constitution = new Stat("constitution",10,0);
var inteligence = new Stat("inteligence",10,0);
var wisdom = new Stat("wisdom",10,0);
var charisma = new Stat("charisma",10,0);

let stats = [strength, dexterity, constitution, inteligence, wisdom, charisma]
var points_to_stats = 9

const stats_sheet = document.getElementById("stats_sheet")

stats.forEach(stat => {
    const stt_n = document.createElement("h2");
    stt_n.textContent = stat.stat_name;

    const up_stt = document.createElement("button");
    up_stt.textContent = "+";
    up_stt.type = "button";

    const stt_lvl = document.createElement("h1");
    stt_lvl.textContent = stat.level;

    const down_stt = document.createElement("button");
    down_stt.textContent = "-";
    down_stt.type = "button";

    const stt_bon = document.createElement("h2");
    stt_bon.textContent = String(+ {stat.bonus});

    const stt_div = document.createElement("div");
    stt_div.className = "stat_container"

    stt_div.appendChild(stt_n);
    stt_div.appendChild(down_stt);
    stt_div.appendChild(stt_lvl);
    stt_div.appendChild(up_stt);
    stt_div.appendChild(stt_bon);

    stats_sheet.appendChild(stt_div)

    up_stt.addEventListener("click", () => {
        if(points_to_stats > 0){
            stat.level++;
            stt_lvl.textContent = stat.level;

            points_to_stats -= 1}
        });

  down_stt.addEventListener("click", () => {
    if (stat.level > 0) {
      stat.level--;
      stt_lvl.textContent = stat.level;
        }
    points_to_stats += 1
    })

    if(stat.level > 10 && stat.level % 2 ==0) {
        stat.bonus = 1 * ((stat.level - 10) / 2)
    }
})