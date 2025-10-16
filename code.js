var char_img_path;

var name;
var Class;
var race;

var player_name;
var alingment;
var background;
var experience_points = 0;

class Stat{
    constructor(stat_name, level, bonus) {
        this.stat_name = stat_name
        this.level = level
        this.bonus = bonus
    }
}

var stenght = new Stat("stenght",10,0);
var dexterity = new Stat("dexterity",10,0);
var constitution = new Stat("constitution",10,0);
var inteligence = new Stat("inteligence",10,0);
var wisdom = new Stat("wisdom",10,0);
var charisma = new Stat("charisma",10,0);

let points_to_stats = 9

document.getElementById("submit_button").addEventListener("click", function() {
    name = document.getElementById("char_namespace").value
    Class = document.getElementById("Class_namespace").value
    race = document.getElementById("race_namespace").value
    alert(`Hello ${name}, ${Class}, ${race}`)
})