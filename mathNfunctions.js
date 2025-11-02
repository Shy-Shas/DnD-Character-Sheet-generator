const classMod = {
  "artifice": {
    status: "",
    skills: ["Arcana", "History", "Investigation", "Medicine", "Nature", "Perception"]
  },
  "barbaro": {
    status: "",
    skills: ["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"]
  },
  "bardo": {
    status: "",
    skills: ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"]
  },
  "bruxo": {
    status: "",
    skills: ["Arcana", "Deception", "History", "Intimidation", "Investigation", "Nature", "Religion"]
  },
  "clerigo": {
    status: "",
    skills: ["History", "Insight", "Medicine", "Persuasion", "Religion"]
  },
  "druida": {
    status: "",
    skills: ["Arcana", "Animal Handling", "Insight", "Medicine", "Nature", "Perception", "Religion", "Survival"]
  },
  "feiticeiro": {
    status: "",
    skills: ["Arcana", "Deception", "Insight", "Intimidation", "Persuasion", "Religion"]
  },
  "guardiao": {
    status: "",
    skills: ["Animal Handling", "Athletics", "Insight", "Investigation", "Nature", "Perception", "Stealth", "Survival"]
  },
  "guerreiro": {
    status: "",
    skills: ["Acrobatics", "Animal Handling", "Athletics", "History", "Insight", "Intimidation", "Perception", "Survival"]
  },
  "ladino": {
    status: "",
    skills: ["Acrobatics", "Athletics", "Deception", "Insight", "Intimidation", "Investigation", "Perception", "Performance", "Persuasion", "Sleight of Hand", "Stealth"]
  },
  "mago": {
    status: "",
    skills: ["Arcana", "History", "Insight", "Investigation", "Medicine", "Religion"]
  },
  "monge": {
    status: "",
    skills: ["Acrobatics", "Athletics", "History", "Insight", "Religion", "Stealth"]
  },
  "paladino": {
    status: "",
    skills: ["Athletics", "Insight", "Intimidation", "Medicine", "Persuasion", "Religion"]
  }
}; //dictionary with all classes with their skill and saving modifiers

const circle = "\u25EF";     // ○ empty circle
const x_circle = "\u2297";   // ⊗ circle with a X
const empty_space = "\u00A0"; // " " space

// ----------------functions---------------- //

export function createStatBox ({name, level, bonus}) {
    let stat_name = document.createElement("h3");
    stat_name.textContent = name;

    let stat_value = document.createElement("h2");
    stat_value.textContent = level;

    let bonus_value = document.createElement("h4");
    if (bonus < 10){
        bonus_value.textContent = "-" + bonus;
    }
    else {
        bonus_value.textContent = "+" + bonus;
    }

    const main_div = document.createElement("div");
    main_div.id = "stat_div";
    const bonus_div = document.createElement("div");
    bonus_div.id = "bonus_div";

    main_div.appendChild(stat_name);
    main_div.appendChild(stat_value);

    bonus_div.appendChild(bonus_value);
    main_div.appendChild(bonus_div);

    return main_div
}

export function createSaveBox({bonus, name}) {

    let symbol = document.createElement("span");
    symbol.textContent = circle;

    let sav_value = document.createElement("h2");
    sav_value.textContent = empty_space + bonus + empty_space;
    sav_value.style.textDecoration = "underline";

    let sav_name = document.createElement("h3");
    sav_name.textContent = name;

    const sav_box = document.createElement("div");
    sav_box.id = "save_box";

    sav_box.appendChild(symbol);
    sav_box.appendChild(sav_value);
    sav_box.appendChild(sav_name);

    return sav_box
}

export function createSkillArea({bonus, name, relStat, className}) {
    let profSkills = classMod[className].skills;

    let symbol = document.createElement("span");
    symbol.textContent = profSkills.includes(name) ? x_circle : circle;

    let finalBonus = profSkills.includes(name) ? (bonus + 2) : bonus;

    let skill_value = document.createElement("h3");
    skill_value.textContent = empty_space + finalBonus + empty_space;
    skill_value.style.textDecoration = "underline";

    let skill_name = document.createElement("h4");
    skill_name.textContent = name;

    let skill_stat = document.createElement("h4");
    skill_stat.textContent = "(" + relStat + ")";
    skill_stat.style.color = "#808080";

    const skill_box = document.createElement("div");
    skill_box.id = "skill_box";

    skill_box.appendChild(symbol);
    skill_box.appendChild(skill_value);
    skill_box.appendChild(skill_name);
    skill_box.appendChild(skill_stat);

    return skill_box
}

