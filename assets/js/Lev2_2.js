/* 
Aufgabenstellung

Wir haben in unserem HTML ein Inputfeld, in dem der User eine Zahl eingeben soll.
Schreibe eine Funktion, mit der du am Ende in deinem HTML das Wort “Loop” ausgibst.
Die Anzahl der Buchstaben “o” variiert durch die Eingabe des Users.


Hinweise

Du wirst mit einem Array arbeiten müssen.
Nutze einen Loop und eine Array Methode, um an einer bestimmten Stelle das neue Element hinzuzufügen.
Wandle das Array am Ende in einen String um.
*/



function result() {
    let num = document.getElementById("number").value
    let loop = document.getElementById("resultLoop");
    let str = ""
    for (let i = 0; i < num; i++) {
        str += "o"
    }
    loop.innerHTML = str;
}

function result2() {
    let num = document.getElementById("number").value
    let loop = document.getElementById("resultLoop");
    let yolo = []
    for (let i = 0; i < num; i++) {
        yolo.push("o")
    }
    loop.innerHTML = yolo.join();
}

/*
function result() {

    let num = Number(document.getElementById("number").value);

    // at least a number greater than 0...
    if (num == 0) {
        document.getElementById("resultLoop").innerHTML = "Number must be greater as 0!"
        return;
    }
    let str = "Lp".split("");
    for (let i = 0; i < num; i++) {
        str.splice(1, 0, 'o');
    }
    document.getElementById("resultLoop").innerHTML = str.join("");
} */