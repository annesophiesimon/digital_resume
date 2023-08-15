export function script () { 
    const skillsData =   [
        {
            "name": "Javascript(ES6)",
            "type": "language"
        },
        {
            "name": "TypeScript",
            "type": "language"
        },
        {
            "name": "HTML",
            "type": "language"
        },
        {
            "name": "CSS",
            "type": "language"
        },
        {
            "name": "Java",
            "type": "language"
        },
        {
            "name": "MySQL",
            "type": "language"
        },
        {
            "name": "PostgreSQL",
            "type": "language"
        },
        {
            "name": "MongoDB",
            "type": "language"
        },
        {
            "name": "React",
            "type": "framework"
        },
        {
            "name": "ExpressJS",
            "type": "framework"
        },
        {
            "name": "GraphQL",
            "type": "framework"
        },
        {
            "name": "Tailwind",
            "type": "framework"
        },
        {
            "name": "BackboneJS",
            "type": "framework"
        },
        {
            "name": "Sencha",
            "type": "framework"
        },
        {
            "name": "Git",
            "type": "tools"
        },
        {
            "name": "Jest",
            "type": "tools"
        },
        {
            "name": "Mocha",
            "type": "tools"
        },
        {
            "name": "TestCafe",
            "type": "tools"
        },
        {
            "name": "Amplitude",
            "type": "tools"
        },
        {
            "name": "Splunk",
            "type": "tools"
        },
        {
            "name": "French - Native",
            "type": "other"
        },
        {
            "name": "English - Fluent",
            "type": "other"
        },
];
    const ulSkills = document.getElementById("skills");
    const displaySkills = (skillsData) => skillsData.map((skill) => {
        let listSkills = document.createElement("li");
        listSkills.innerHTML = skill.name;
        ulSkills.appendChild(listSkills);
    });


    const btnAll = document.getElementById("btn-all");
    const btnLanguage = document.getElementById("btn-language");
    const btnFramework = document.getElementById("btn-framework");
    const btnTools = document.getElementById("btn-tools");
    const btnOther = document.getElementById("btn-other");

     btnAll.addEventListener('click', () => {
        ulSkills.innerHTML = "";
        displaySkills(skillsData);
    });

    btnLanguage.addEventListener('click', () => {
        const val = skillsData.filter((skill) => skill.type === "language");
        ulSkills.innerHTML = "";
        displaySkills(val);
    });

    btnFramework.addEventListener('click', () => {
        const val = skillsData.filter((skill) => skill.type === "framework");
        ulSkills.innerHTML = "";
        displaySkills(val);
    });

    btnTools.addEventListener('click', () => {
        const val = skillsData.filter((skill) => skill.type === "tools");
        ulSkills.innerHTML = "";
        displaySkills(val);
    });

    btnOther.addEventListener('click', () => {
        const val = skillsData.filter((skill) => skill.type === "other");
        ulSkills.innerHTML = "";
        displaySkills(val);
    });

    displaySkills(skillsData);   
    
const themeClasses = ["theme-light", "theme-dark"]

document.getElementById("toggleTheme").addEventListener("change", function(e) {
    e.preventDefault();
    const app = document.getElementById("app");
    const isDarkMode = app.classList.contains("theme-dark");
    app.classList.remove(...themeClasses);
    if (isDarkMode) {
      app.classList.add("theme-light");
    } else {
      app.classList.add("theme-dark");
    }
  })
}; 