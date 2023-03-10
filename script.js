export function displaySkills () { 
    const skillsData =   [
        {
            "name": "Javascript",
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
            "name": "SQL",
            "type": "language"
        },
        {
            "name": "React",
            "type": "framework"
        },
        {
            "name": "Node",
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
            "name": "Rendr",
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
}; 