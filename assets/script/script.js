var allAgent = ["Jett","Phoenix","Yoru","Raze","Neon","Reyna","Breach","Fade","Kayo","Skye","Sova","Gekko","Brimstone","Viper","Astra","Harbor","Omen","Chamber","Cypher","Killjoy","Sage","Deadlock"];
var agentUnselected = [];
var agentSelected = ["Jett","Phoenix","Yoru","Raze","Neon","Reyna","Breach","Fade","Kayo","Skye","Sova","Gekko","Brimstone","Viper","Astra","Harbor","Omen","Chamber","Cypher","Killjoy","Sage","Deadlock"];
var myInterval;
var counter = 25;

function random() {
    counter = 25;
    document.getElementById('popupbackground').style.animation = '0.5s fondu both';
    document.getElementById("popupbackground").style.display = "flex";
    document.getElementById("popup").style.display = "flex";
    let audio = new Audio("./assets/images/valorant-ranked.mp3");
    audio.play();
    myInterval = setInterval(roulette, 150);
}

function roulette() {
    counter--;
    
    if(counter == 0) {
        clearInterval(myInterval);
        let audio = new Audio("./assets/images/valorant-ace.mp3");
        audio.play();
        document.getElementById("backButton").style.animation = '1s fondu both';
        document.getElementById("backButton").style.display = "block";
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
    switch(filter) {
        case "All":
            agentSelected = ["Jett","Phoenix","Yoru","Raze","Neon","Reyna","Breach","Fade","Kayo","Skye","Sova","Gekko","Brimstone","Viper","Astra","Harbor","Omen","Chamber","Cypher","Killjoy","Sage","Deadlock"];
            for(let i = 0; i < agentSelected.length; i++) {
                document.getElementById(agentSelected[i]).style.opacity = 1;
            }
            break;
        case "Duelist":
            filterSelect("All");
            agentSelected = ["Jett","Phoenix","Yoru","Raze","Neon","Reyna"];
            filterUnselect();
            break;
        case "Initiator":
            filterSelect("All");
            agentSelected = ["Breach","Fade","Kayo","Skye","Sova","Gekko"];
            filterUnselect();
            break;
        case "Controler":
            filterSelect("All");
            agentSelected = ["Brimstone","Viper","Astra","Harbor","Omen"];
            filterUnselect();
            break;
        case "Sentinel":
            filterSelect("All");
            agentSelected = ["Chamber","Cypher","Killjoy","Sage","Deadlock"];
            filterUnselect();
            break;
    }
}

function filterUnselect() {
    agentUnselected = allAgent;
    for(let i = 0; i < agentSelected.length; i++) {
        agentUnselected = agentUnselected.filter((agentUnselected) => agentUnselected !== agentSelected[i]);
    }

    for(let i = 0; i < agentUnselected.length; i++) {
        document.getElementById(agentUnselected[i]).style.opacity = 0.25;
    }
}
