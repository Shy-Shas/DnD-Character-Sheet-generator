
//user pressed to change the img
document.getElementById("char_img").addEventListener("change", function(event) {
    const file = event.target.files[0]; //gets the first file the user sent
    if (file) { //guarantees that the file exists
        const reader = new FileReader; //creates a reader to read images
        reader.onload = function(e) { //when reader loads, reads the image
            document.getElementById("img_prev").src = e.target.result; //changes the image source to the new one
        };
        reader.readAsDataURL(file); // changes image base64, so it can be read on the web
    }
})

//uptadetes the class and race modifiers description
function uptdClassMod() {
    const classMod = {
        "artifice": {
            status: ["Inteligence"],
            skills: ["Arcana", "History", "Investigation", "Medicine", "Nature", "Perception"]
        },
        "barbaro": {
            status: ["Strenght", "Constitution"],
            skills: ["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"]
        },
        "bardo": {
            status: ["Carisma"],
            skills: ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"]
        },
        "bruxo": {
            status: ["Carisma"],
            skills: ["Arcana", "Deception", "History", "Intimidation", "Investigation", "Nature", "Religion"]
        },
        "clerigo": {
            status: ["Wisdom"],
            skills: ["History", "Insight", "Medicine", "Persuasion", "Religion"]
        },
        "druida": {
            status: ["Wisdom"],
            skills: ["Arcana", "Animal Handling", "Insight", "Medicine", "Nature", "Perception", "Religion", "Survival"]
        },
        "feiticeiro": {
            status: ["Carisma"],
            skills: ["Arcana", "Deception", "Insight", "Intimidation", "Persuasion", "Religion"]
        },
        "guardiao": { // Ranger
            status: ["Dexterity","Wisdom"],
            skills: ["Animal Handling", "Athletics", "Insight", "Investigation", "Nature", "Perception", "Stealth", "Survival"]
        },
        "guerreiro": {
            status: ["Strenght", "Dexterity"],
            skills: ["Acrobatics", "Animal Handling", "Athletics", "History", "Insight", "Intimidation", "Perception", "Survival"]
        },
        "ladino": {
            status: ["Dexterity"],
            skills: ["Acrobatics", "Athletics", "Deception", "Insight", "Intimidation", "Investigation", "Perception", "Performance", "Persuasion", "Sleight of Hand", "Stealth"]
        },
        "mago": {
            status: ["Inteligence"],
            skills: ["Arcana", "History", "Insight", "Investigation", "Medicine", "Religion"]
        },
        "monge": {
            status: ["Dexterity", "Wisdom"],
            skills: ["Acrobatics", "Athletics", "History", "Insight", "Religion", "Stealth"]
        },
        "paladino": {
            status: ["Strenght", "Carisma"],
            skills: ["Athletics", "Insight", "Intimidation", "Medicine", "Persuasion", "Religion"]
        }
    }; //dictionary with all classes with their skill and saving modifiers
    
    let className = document.getElementById('Class_namespace').value;

    document.getElementById('className').textContent = className;
    document.getElementById('classModDiv').replaceChildren()
    
    for (let i = 0; i < classMod[className]['skills'].length; i++) {
        const x_circle = "\u2297";   // ⊗ circle with a X
        let modDiv = document.getElementById('classModDiv');

        let mod = document.createElement('h3');
        mod.textContent = x_circle + classMod[className]['skills'][i];

        modDiv.appendChild(mod);
    }

    for (let i = 0; i < classMod[className]['status'].length; i++) {
        const x_circle = "\u2297";   // ⊗ circle with a X
        let modDiv = document.getElementById('classModDiv');

        let mod = document.createElement('h3');
        mod.textContent =  x_circle + classMod[className]['status'][i] + '= +1';

        //statusName[i] -> goes to the status and gets the current name
        //statusIncrease[statusName[i]] -> gets the value of the current name

        modDiv.appendChild(mod);
    }

}

function uptdRaceMod() {
    const raceMod = {
        // Player's Handbook Races (and common variants)
        "aasimar": {
            status: {
                "Charisma": +2,
                "Wisdom": +1
            },
            skills: []
        },
        "dragonborn": {
            status: {
                "Strength": +2,
                "Charisma": +1
            },
            skills: []
        },
        "dwarf": { // Base Dwarf (often split into Hill/Mountain)
            status: {
                "Constitution": +2
            },
            skills: []
        },
        "elf": { // Base Elf (often split into High/Wood/Drow)
            status: {
                "Dexterity": +2
            },
            skills: ["Perception"]
        },
        "gnome": { // Base Gnome (often split into Forest/Rock)
            status: {
                "Intelligence": +2
            },
            skills: []
        },
        "half-elf": {
            status: {
                "Charisma": +2,
                "Other_1": +1, // Two attributes of player's choice
                "Other_2": +1
            },
            skills: []
        },
        "half-orc": {
            status: {
                "Strength": +2,
                "Constitution": +1
            },
            skills: ["Intimidation"]
        },
        "halfling": { // Base Halfling (often split into Lightfoot/Stout)
            status: {
                "Dexterity": +2
            },
            skills: []
        },
        "human": {
            status: {
                "Strength": +1,
                "Dexterity": +1,
                "Constitution": +1,
                "Intelligence": +1,
                "Wisdom": +1,
                "Charisma": +1
            },
            skills: []
        },
        "tiefling": {
            status: {
                "Charisma": +2,
                "Intelligence": +1
            },
            skills: []
        },
        
        // Additional Playable Races from Supplements
        "goliath": {
            status: {
                "Strength": +2,
                "Constitution": +1
            },
            skills: ["Athletics"]
        },
        "tabaxi": {
            status: {
                "Dexterity": +2,
                "Charisma": +1
            },
            skills: ["Perception", "Stealth"]
        },
        "triton": {
            status: {
                "Strength": +1,
                "Constitution": +1,
                "Charisma": +1
            },
            skills: []
        },
        "firbolg": {
            status: {
                "Wisdom": +2,
                "Strength": +1
            },
            skills: []
        },
        "kenku": {
            status: {
                "Dexterity": +2,
                "Wisdom": +1
            },
            skills: ["Acrobatics", "Deception", "Stealth", "Sleight of Hand"] // Choose two
        },
        "orc": { // Volo's Guide to Monsters Orc
            status: {
                "Strength": +2,
                "Constitution": +1
            },
            skills: ["Intimidation"]
        },
        "yuan-ti": { // Yuan-ti Pureblood
            status: {
                "Charisma": +2,
                "Intelligence": +1
            },
            skills: []
        },
        "genasi": { // Base Genasi
            status: {
                "Constitution": +2
            },
            skills: [] // Depends on subrace (Air, Earth, Fire, Water)
        },
        "kobold": { // Volo's Guide to Monsters Kobold
            status: {
                "Dexterity": +2
            },
            skills: []
        },
        "bugbear": {
            status: {
                "Strength": +2,
                "Dexterity": +1
            },
            skills: ["Stealth"]
        },
        "hobgoblin": {
            status: {
                "Constitution": +2,
                "Intelligence": +1
            },
            skills: []
        },
        "lizardfolk": {
            status: {
                "Constitution": +2,
                "Wisdom": +1
            },
            skills: ["Nature", "Survival"] // Choose one
        },
        "minotaur": { // Guildmaster's Guide to Ravnica Minotaur
            status: {
                "Strength": +2,
                "Constitution": +1
            },
            skills: []
        },
        "shifter": { // Base Shifter
            status: {
                "Dexterity": +1
            },
            skills: [] // Varies significantly by subrace
        },
        "warforged": {
            status: {
                "Constitution": +1,
            },
            skills: []
        }
    };

    let raceName = document.getElementById('race_namespace').value;
    document.getElementById('raceModDiv').replaceChildren()

    document.getElementById('raceName').textContent = raceName;

    if (raceMod[raceName]['skills'].length > 0) {
        for (let i = 0; i < raceMod[raceName]['skills'].length; i++) {
            const x_circle = "\u2297";   // ⊗ circle with a X
            let modDiv = document.getElementById('raceModDiv');

            let mod = document.createElement('h3');
            mod.textContent = x_circle + raceMod[raceName]['skills'][i];

            modDiv.appendChild(mod);
        }
    }

    let statusIncrease = raceMod[raceName]['status']; // Array de valores (ex: [1, 3])
    let statusName = Object.keys(statusIncrease); // Array de chaves (ex: ["Charisma", "Wisdom"])
    for (let i = 0; i < statusName.length; i++) {
        const x_circle = "\u2297";   // ⊗ circle with a X
        let modDiv = document.getElementById('raceModDiv');

        let mod = document.createElement('h3');
        mod.textContent =  x_circle + statusName[i] + '= +' + statusIncrease[statusName[i]];

        //statusName[i] -> goes to the status and gets the current name
        //statusIncrease[statusName[i]] -> gets the value of the current name

        modDiv.appendChild(mod);
    }
}

document.getElementById('Class_namespace').addEventListener('change', function() {
    uptdClassMod()
})
document.getElementById('race_namespace').addEventListener('change', function() {
    uptdRaceMod()
})

uptdClassMod()
uptdRaceMod()

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
var all_stats = [strength, dexterity, constitution, inteligence, wisdom, charisma]
//points to change the all_
var skill_points = 9


// // // // js --> html funções
const stats_sheet = document.getElementById("stats_sheet"); //gets the stat sheet div from html

//circles from every stat on the list and creates a div for it
all_stats.forEach(stat => {
    const stt_n = document.createElement("h2"); //name of the stat
    stt_n.textContent = stat.stat_name;

    const up_stt = document.createElement("button"); //up stat level button
    up_stt.textContent = "+";
    up_stt.type = "button";

    const stt_lvl = document.createElement("h1"); //stat level
    stt_lvl.textContent = stat.level;
    stt_lvl.id = stat.stat_name

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

    //updates de bonus of the stat based on the player level
    function update_bonus_value() {
        stat.bonus = Math.floor((stat.level - 10) / 2)
        if (stat.bonus >= 0) { //bonus is positive or 0
            stt_bon.textContent = "+" + stat.bonus;
        }
        else { //bonus is negative
            stt_bon.textContent = stat.bonus;
        }
    }

    function update_skill_points() {
        document.getElementById("skill_points").textContent = skill_points
    }

    update_skill_points()

    up_stt.addEventListener("click", () => { //function to increase the level on the button press
        if(skill_points > 0){ //only works if there's points for it
            stat.level++;
            stt_lvl.textContent = stat.level;

            skill_points -= 1} //take out points

            update_bonus_value() //calls the update bonus function
            update_skill_points()
        });

    down_stt.addEventListener("click", () => { //function to decrease the level on the button press
        if (stat.level > 0) { //only works if the level is above 0, to prevent negative numbers
        stat.level--;
        stt_lvl.textContent = stat.level;
        skill_points += 1} //adds points

        update_bonus_value() //calls the update bonus function
        update_skill_points()
    })
    
})

// // // reset button
const reset_sheet_btn = document.createElement("button"); //creates the reset button
reset_sheet_btn.textContent = "reset"; //button text
reset_sheet_btn.type = "button"; //prevents the entire page from reloading

reset_sheet_btn.addEventListener("click", () => {
    document.getElementById("img_prev").src = "ImageHolder.jpg"

    all_stats.forEach(stat => { //circles every stat and resets it's level and bonus
        stat.level = 10;
        stat.bonus = 0;

        stat.stt_lvl.textContent = stat.level;
        stat.stt_bon.textContent = "+" + 0;
    })
    skill_points = 9; //reset the points
})

stats_sheet.appendChild(reset_sheet_btn); //inserts the button on the stat sheet

// #######################################  Page Transition Handler  ####################################### //
let all_filled = true;

function store_info() {
    const all_info = [ //array to get all their ids in one for loop
        //{id:"char_img"},
        {id:"char_namespace", attribute:"Name"}, //attribute serves for the final sheet
        {id:"Class_namespace", attribute:"Class"},
        {id:"race_namespace", attribute:"Race"},
        {id:"player_name_namespace", attribute:"Player Name"},
        {id:"alingment_namespace", attribute:"Alingment"},
        {id:"background_namespace", attribute:"background"}
    ];

    for (let info of all_info) {
        let val = document.getElementById(info.id).value; //gets the value
        if (!val) { //if one of the fiels is empty, raises error
            document.getElementById("error_msg").textContent = "Not all fields were filled, please check again!";
            all_filled = false;
            break; //
        }
        else {
            all_filled = true;
            sessionStorage.setItem(info.id, JSON.stringify({value:val, attribute:info.attribute}))
        } /*Json.stringfy -> setItem only accepts strings as values, so we turn a JSON into a string
            to bring more than one value*/
    }
}

function store_stats() {
    for (let stat of all_stats) {
        sessionStorage.setItem(stat.stat_name, JSON.stringify({level:stat.level, bonus:stat.bonus}))
    }
}

function next_page() {
    store_info();
    store_stats();

    if (all_filled) {window.location.href = "../finalized_character_sheet/final_sheet.html";} //goes to the sheet page

}

