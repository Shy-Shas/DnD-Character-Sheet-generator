const all_info = [
        //{id:"char_img"},
        {id:"char_namespace"},
        {id:"Class_namespace"},
        {id:"race_namespace"},
        {id:"player_name_namespace"},
        {id:"alingment_namespace"},
        {id:"background_namespace"}
];

const all_stats = [
    "strength", "dexterity", "constitution", "inteligence", "wisdom", "charisma"
];

// ---------------character info (name, class, ...)--------------- //
const char_info = document.getElementById("character_info")

all_info.forEach(info => {
    const information = JSON.parse(sessionStorage.getItem(info.id));

    let info_name = document.createElement("h2");
    info_name.textContent = information.attribute + ":";

    let info_value = document.createElement("h2");
    info_value.textContent = information.value

    const indv_div = document.createElement("div");
    indv_div.className = "atbt_div"
    indv_div.appendChild(info_name)
    indv_div.appendChild(info_value)


    char_info.appendChild(indv_div)
})

// ---------------stats (stat_box, saving throws, ...)--------------- //

import * as MNF from "./mathNfunctions.js";

all_stats.forEach(element => {
    const stat = JSON.parse(sessionStorage.getItem(element));

    //stat box
    document.getElementById("stat_container").appendChild(MNF.createStatBox({
        name:element,
        level:stat.level,
        bonus:stat.bonus
    }));

    //saving throws box
    document.getElementById("saving_throws_container").appendChild(MNF.createSaveBox({
        bonus:stat.bonus,
        name:element
    }));
})

const all_skills = {
        "Acrobatics": "dexterity",
        "Animal Handling": "wisdom",
        "Arcana": "inteligence",
        "Athletics": "strength",
        "Deception": "charisma",
        "History": "inteligence",
        "Insight": "wisdom",
        "Intimidation": "charisma",
        "Investigation": "inteligence",
        "Medicine": "wisdom",
        "Nature": "inteligence",
        "Perception": "wisdom",
        "Performance": "charisma",
        "Persuasion": "charisma",
        "Religion": "inteligence",
        "Sleight of Hand": "dexterity",
        "Stealth": "dexterity",
        "Survival": "wisdom"
    };

Object.entries(all_skills).forEach(([skillName, statName]) => {
    let stat_data = JSON.parse(sessionStorage.getItem(statName));

    document.getElementById("skills_container").appendChild(MNF.createSkillArea({
        bonus:stat_data.bonus,
        name: skillName,
        relStat: statName,
        className: JSON.parse(sessionStorage.getItem("Class_namespace")).value
    }));
})