var canele = 0;
var four = 1;

function AddCanele() {
    canele += four;
    let paragraphe = "Vous avez " + canele.toString() + " canelés";
    document.getElementById("canelé").innerHTML = paragraphe;
}

function AddFour() {
    if(canele >= 25) {
        canele -= 25;
        four += 1;
        let paragraphe = "Vous avez " + canele.toString() + " canelé";
        document.getElementById("canelé").innerHTML = paragraphe;
        alert("Vous avez un nouveau Four !");
    }
    else {
        alert("Vous n'avez pas assez de canelé !");
    }
}
