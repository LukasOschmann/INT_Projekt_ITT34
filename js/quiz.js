// Zentrale JS Datei

// Variablen
let aktuelleFrage = 0;
let korrekteAntworten = 0;
let importiert;

// Importiere den Fragenpool auf Basis der aufgerufenen Subseite (Entscheidung passiert im head) 
// Somit sparen wir uns die Verarbeitung von zu vielen Informationen
switch (document.head.querySelector('meta[name="inhalt"]').content) {
    case "mysql":
        // Importiert die Fragen von "fragen_mysql.js" in die Variable "importiert"
        importiert = await import('./fragenDB_mysql.js');
        break;
    case "css":
        // Importiert die Fragen von "fragen_css.js" in die Variable "importiert"
        importiert = await import('./fragenDB_css.js');
        break;
    case "html":
        // Importiert die Fragen von "fragen_html.js" in die Variable "importiert"
        importiert = await import('./fragenDB_html.js');
        break;
    case "javascript":
        // Importiert die Fragen von "fragen_js.js" in die Variable "importiert"
        importiert = await import('./fragenDB_js.js');
    default:
        // Fehlermeldung auf Console, falls kein passender Eintrag im <head>
        console.log("Es wurde kein passender Eintrag im <head> der html Seite gefunden.");
}

// Weißt das Objekt fragenDB aus der fragenDB_*.js Datei der hier im Dokument bekannten fragenDB zu 
const fragenDB = importiert.default;

// Elemente auswählen
const frageElement = document.getElementById("frage");
const antwortenElement = document.getElementById("antworten");
const pruefenButton = document.getElementById("pruefen");
const anzeigenButton = document.getElementById("anzeigen");

// Funktion um eine Frage anzeigen zu lassen
function zeigeFrage() {
    // Frage anzeigen
    frageElement.innerText = fragenDB[aktuelleFrage].frage;

    // Antworten anzeigen
    antwortenElement.innerHTML = "";
    for (let i = 0; i < fragenDB[aktuelleFrage].antworten.length; i++) {
        const antwortElement = document.createElement("div");
        antwortElement.innerHTML = `<label><input type="radio" name="antwort" value="${fragenDB[aktuelleFrage].antworten[i]}"> ${fragenDB[aktuelleFrage].antworten[i]}</label>`;
        antwortenElement.appendChild(antwortElement);
    }
}

// Soll die Antwort zur Frage anzeigen lassen
function zeigeAntwort() {
    // Wählt aus dem HTML Dokument das Element der richtigen Lösung der Frage aus und speichert diese in einer Variable
    const loesungFrage = document.querySelector(`input[value="${fragenDB[aktuelleFrage].korrekteAntwort}"]`);

    // Setzt die Lösung als checked im Dokument
    loesungFrage.checked = true;
}

function ueberpruefeAntwort() {
    // Ausgewählte Antwort abrufen
    const ausgewaehlteAntwort = document.querySelector('input[name="antwort"]:checked').value;

    // Antwort überprüfen
    if (ausgewaehlteAntwort === fragenDB[aktuelleFrage].korrekteAntwort) {
        // Erhöht den Zähler für korrekt beantwortete Fragen
        korrekteAntworten++;
        // Erhöht den Zähler für den Aktuelle Frage
        aktuelleFrage++;
        alert("Das ist die richtige Antwort. Gut gemacht! 👍");

        if (korrekteAntworten === fragenDB.length) {
            // Wird ausgeführt, wenn alle Fragen korrekt beantwortet wurden.
            frageElement.innerText = "Vielen Dank fürs Spielen 😊";
            antwortenElement.innerText = `Sie haben ${korrekteAntworten} von ${fragenDB.length} Fragen richtig beantwortet.`;

            // Deaktiviert die Spielbuttons
            pruefenButton.disabled = true;
            anzeigenButton.disabled = true;

            // Beendet die Ausführung der Funktion
            return;
        }

        //Lädt die nächste Frage
        zeigeFrage();
    }
    else {
        alert("Leider falsch! Bitte versuchen Sie es erneut. 🤔");
    }

}

// Ereignis-Listener hinzufügen, damit bei Klick auf die Buttons die Entsprechenden Funktionen aufgerufen werden
pruefenButton.addEventListener("click", ueberpruefeAntwort);
anzeigenButton.addEventListener("click", zeigeAntwort);

// Erste Frage anzeigen
zeigeFrage();