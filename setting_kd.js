document.getElementById("char_img").addEventListener("change", function(event) { //user pressed to change the img
    const file = event.target.files[0]; //gets the first file the user sent
    if (file) { //guarantees that the file exists
        const reader = new FileReader; //creates a reader to read images
        reader.onload = function(e) { //when reader loads, reads the image
            document.getElementById("img_prev").src = e.target.result; //changes the image source to the new one
        };
        reader.readAsDataURL(file); // changes image base64, so it can be read on the web
    }
})

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
        if(stat.level > 10) {
            stat.bonus = Math.floor((stat.level - 10) / 2); //adds +1 for every even number above 10
            stt_bon.textContent = "+" + stat.bonus;
        }
        
        if(stat.level < 10) {
            stat.bonus = ((9 - stat.level) / 2) + 1; //adds -1 for every odd number below 10
            stat.bonus = Math.floor(stat.bonus)
            stt_bon.textContent = "-" + stat.bonus;
        }

        if(stat.level === 10) { //if the stat is 10 the bonus is 0
            stat.bonus = 0;
            stt_bon.textContent = "+" + stat.bonus;
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

    if (all_filled) {window.location.href = "../Final_sheet/final_sheet.html";} //goes to the sheet page

}
