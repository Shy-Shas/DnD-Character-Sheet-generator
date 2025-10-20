const all_stats = [
        //{id:"char_img"},
        {id:"char_namespace"},
        {id:"Class_namespace"},
        {id:"race_namespace"},
        {id:"player_name_namespace"},
        {id:"alingment_namespace"},
        {id:"background_namespace"}
];

const char_info = document.getElementById("character_info")

all_stats.forEach(stat => {
    const info = JSON.parse(sessionStorage.getItem(stat.id));

    const info_name = document.createElement("h2");
    info_name.textContent = info.attribute + ":";

    const info_value = document.createElement("h2");
    info_value.textContent = info.value

    const indv_div = document.createElement("div");
    indv_div.className = "atbt_div"
    indv_div.appendChild(info_name)
    indv_div.appendChild(info_value)


    char_info.appendChild(indv_div)
})