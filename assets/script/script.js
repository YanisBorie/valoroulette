var allAgent = ["Astra", "Breach", "Brimstone", "Chamber", "Clove","Cypher", "Deadlock", "Fade", "Gekko", "Harbor", "Iso", "Jett", "Kayo", "Killjoy", "Neon", "Omen", "Phoenix", "Raze", "Reyna", "Sage", "Skye", "Sova", "Viper", "Vyse", "Yoru"];
var agentUnselected = [];
var randomAgent = allAgent;
var agentSelected = allAgent;
var myInterval;
var counter = 25;

function init() {
    for (let i = 0; i < allAgent.length; i++) {
        let agentGrid = document.createElement('div');
        agentGrid.setAttribute('id', allAgent[i]);
        agentGrid.setAttribute('onclick', "select('" + allAgent[i] + "')");
        document.getElementById("agentGrid").appendChild(agentGrid);
        let agentPicture = document.createElement('img');
        agentPicture.setAttribute("src", "./assets/images/" + allAgent[i].toLowerCase() + "_icon.webp");
        document.getElementById(allAgent[i]).appendChild(agentPicture);
    }
}

function random() {
    if (agentSelected.length < 2) {
        counter = 0;
        document.getElementById('popupbackground').style.animation = '0.5s fondu both';
        document.getElementById("popupbackground").style.display = "flex";
        document.getElementById("popupError").style.display = "flex";
        document.getElementById("backButtonError").style.display = "flex";
    } else {
        counter = 25;
        document.getElementById('popupbackground').style.animation = '0.5s fondu both';
        document.getElementById("popupbackground").style.display = "flex";
        document.getElementById("popup").style.display = "flex";
        let audio = new Audio("./assets/images/valorant-ranked.mp3");
        audio.play();
        myInterval = setInterval(roulette, 150);
    }
}

function roulette() {
    counter--;

    if (counter == 0) {
        clearInterval(myInterval);
        let audio = new Audio("./assets/images/valorant-ace.mp3");
        audio.play();
        document.getElementById("backButton").style.animation = '1s fondu both';
        document.getElementById("backButton").style.display = "flex";
    } else {
        let yourAgent = agentSelected[Math.floor(Math.random() * agentSelected.length)];
        document.getElementById("agentSelect").setAttribute("src", "./assets/images/" + yourAgent.toLowerCase() + "_icon.webp");
        document.getElementById("agentName").innerHTML = yourAgent;
    }

}

function unpopup() {
    document.getElementById("popupbackground").style.display = "none";
    document.getElementById("popup").style.display = "none";
    document.getElementById("backButton").style.display = "none";
    document.getElementById("popupError").style.display = "none";
    document.getElementById("backButtonError").style.display = "none";
    document.getElementById("popupCredit").style.display = "none";
    document.getElementById("backButtonCredit").style.display = "none";
}

function select(agent) {
    if (document.getElementById(agent).style.opacity == 0.25) {
        document.getElementById(agent).style.opacity = 1;
        agentSelected.push(agent);
    } else {
        document.getElementById(agent).style.opacity = 0.25;
        agentSelected = agentSelected.filter((agentSelected) => agentSelected !== agent);
    }
}

function filterSelect(filter) {
    switch (filter) {
        case "All/None":
            if (agentSelected.length == 0) {
                filterAllSelect();
            } else {
                agentSelected = [];
                for (let i = 0; i < allAgent.length; i++) {
                    document.getElementById(allAgent[i]).style.opacity = 0.25;
                }
            }
            break;
        case "Random":
            filterAllSelect();
            randomAgent = allAgent;
            agentSelected = [];
            for (let i = 0; i < 7; i++) {
                let agent = randomAgent[Math.floor(Math.random() * randomAgent.length)];
                agentSelected.push(agent);
                randomAgent = randomAgent.filter((randomAgent) => randomAgent !== agent);
            }
            filterUnselect();
            break;
        case "Duelist":
            filterAllSelect();
            agentSelected = ["Jett", "Phoenix", "Yoru", "Raze", "Neon", "Reyna", "Iso"];
            filterUnselect();
            break;
        case "Initiator":
            filterAllSelect();
            agentSelected = ["Breach", "Fade", "Kayo", "Skye", "Sova", "Gekko"];
            filterUnselect();
            break;
        case "Controler":
            filterAllSelect();
            agentSelected = ["Brimstone", "Clove","Viper", "Astra", "Harbor", "Omen"];
            filterUnselect();
            break;
        case "Sentinel":
            filterAllSelect();
            agentSelected = ["Chamber", "Cypher", "Killjoy", "Sage", "Deadlock", "Vyse"];
            filterUnselect();
            break;
    }
}

function filterUnselect() {
    agentUnselected = allAgent;
    for (let i = 0; i < agentSelected.length; i++) {
        agentUnselected = agentUnselected.filter((agentUnselected) => agentUnselected !== agentSelected[i]);
    }

    for (let i = 0; i < agentUnselected.length; i++) {
        document.getElementById(agentUnselected[i]).style.opacity = 0.25;
    }
}

function filterAllSelect() {
    agentSelected = allAgent;
    for (let i = 0; i < agentSelected.length; i++) {
        document.getElementById(agentSelected[i]).style.opacity = 1;
    }
}

function credit() {
    document.getElementById('popupbackground').style.animation = '0.5s fondu both';
    document.getElementById("popupbackground").style.display = "flex";
    document.getElementById("popupCredit").style.display = "flex";
    document.getElementById("backButtonCredit").style.display = "flex";
}
