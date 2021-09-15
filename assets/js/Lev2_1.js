/* 
Aufgabenstellung


Nehmen wir an, wir haben 100 Bilder in unserem Ordner.
Wir wollen ein Array von Bildern erstellen und die Dateinamen standardisieren. 
Gib in der Konsole image_001.jpg bis image_100.jpg aus.
Deklariere die Function imageArray2.
In Funktionskörper deklariere die Variable retArray2 als leeres Array.
Schreibe eine for-Schleife.
Nutze push() und Conditionals Statements (if, else if, else).
Vergiss nicht den Return-Befehl.
Lass dir retArray2 in der Konsole ausgeben.

*/

function imageArray2(){
    let retArray2 = [];
    for (let i = 1; i < 101; i++) {
        retArray2.push("image_" + i +".jpg")
    }
    
}

console.log( imageArray2())
