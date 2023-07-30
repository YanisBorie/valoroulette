var allAgent = ["Jett","Phoenix","Yoru","Raze","Neon","Reyna","Breach","Fade","Kayo","Skye","Sova","Gekko","Brimstone","Viper","Astra","Harbor","Omen","Chamber","Cypher","Killjoy","Sage","Deadlock"];
var agentUnselected = [];
var agentSelected = ["Jett","Phoenix","Yoru","Raze","Neon","Reyna","Breach","Fade","Kayo","Skye","Sova","Gekko","Brimstone","Viper","Astra","Harbor","Omen","Chamber","Cypher","Killjoy","Sage","Deadlock"];

function random() {
    alert("Vous jouez " + agentSelected[Math.floor(Math.random() * agentSelected.length)]);
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
            for(let i = 0; i <= agentSelected.length; i++) {
                document.getElementById(agentSelected[i]).style.opacity = 1;
            }
            break;
        case "Duelist":
            agentSelected = ["Jett","Phoenix","Yoru","Raze","Neon","Reyna"];
            filterUnselect();
            break;
        case "Initiator":
            agentSelected = ["Breach","Fade","Kayo","Skye","Sova","Gekko"];
            filterUnselect();
            break;
        case "Controler":
            agentSelected = ["Brimstone","Viper","Astra","Harbor","Omen"];
            filterUnselect();
            break;
        case "Sentinel":
            agentSelected = ["Chamber","Cypher","Killjoy","Sage","Deadlock"];
            filterUnselect();
            break;
    }
}

function filterUnselect() {
    agentUnselected = allAgent;
    for(let i = 0; i <= agentSelected.length; i++) {
        agentUnselected = agentUnselected.filter((agentUnselected) => agentUnselected !== agentSelected[i]);
    }

    for(let i = 0; i <= agentUnselected.length; i++) {
        document.getElementById(agentUnselected[i]).style.opacity = 0.25;
    }
}
