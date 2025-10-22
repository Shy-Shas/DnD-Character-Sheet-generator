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

const stat_box = document.getElementById("stat_box")
all_stats.forEach(element => {
    const stat = JSON.parse(sessionStorage.getItem(element));

    let stat_name = document.createElement("h3");
    stat_name.textContent = element;

    let stat_value = document.createElement("h2");
    stat_value.textContent = stat.level;

    let bonus_value = document.createElement("h4");
    if (stat.bonus < 10){
        bonus_value.textContent = "-" + stat.bonus;
    }
    else {
        bonus_value.textContent = "+" + stat.bonus;
    }

    const main_div = document.createElement("div");
    main_div.id = "stat_div";
    const bonus_div = document.createElement("div");
    bonus_div.id = "bonus_div";

    main_div.appendChild(stat_name);
    main_div.appendChild(stat_value);

    bonus_div.appendChild(bonus_value);
    main_div.appendChild(bonus_div);

    stat_box.appendChild(main_div);
})