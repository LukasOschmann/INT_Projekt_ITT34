// Zentrale JS Datei

// Fragen-Pool
const fragenDB = [
    {
        frage: "Was ist MySQL?",
        antworten: ["Ein relationales Datenbankmanagementsystem", "Ein nicht relationales Datenbankmanagementsystem", "Eine Programmiersprache", "Ein Betriebssystem"],
        korrekteAntwort: "Ein relationales Datenbankmanagementsystem"
    },
    {
        frage: "Wie erstellt man eine neue Datenbank in MySQL?",
        antworten: ["CREATE DATABASE database_name", "NEW DATABASE database_name", "ADD DATABASE database_name", "MAKE DATABASE database_name"],
        korrekteAntwort: "CREATE DATABASE database_name"
    },
    {
        frage: "Wie löscht man eine Datenbank in MySQL?",
        antworten: ["DELETE DATABASE database_name", "REMOVE DATABASE database_name", "ERASE DATABASE database_name", "DROP DATABASE database_name"],
        korrekteAntwort: "DROP DATABASE database_name"
    },
    {
        frage: "Wie erstellt man eine neue Tabelle in MySQL?",
        antworten: ["CREATE TABLE table_name", "NEW TABLE table_name", "ADD TABLE table_name", "MAKE TABLE table_name"],
        korrekteAntwort: "CREATE TABLE table_name"
    },
    {
        frage: "Wie fügt man Daten in eine Tabelle in MySQL ein?",
        antworten: ["INSERT INTO table_name", "ADD INTO table_name", "UPDATE INTO table_name", "CREATE INTO table_name"],
        korrekteAntwort: "INSERT INTO table_name"
    },
    {
        frage: "Wie kann man Daten in einer Tabelle in MySQL aktualisieren?",
        antworten: ["UPDATE table_name", "MODIFY table_name", "CHANGE table_name", "ALTER table_name"],
        korrekteAntwort: "UPDATE table_name"
    },
    {
        frage: "Wie kann man Daten aus einer Tabelle in MySQL abfragen?",
        antworten: ["GET * FROM table_name", "SELECT * FROM table_name", "VIEW * FROM table_name", "DISPLAY * FROM table_name"],
        korrekteAntwort: "SELECT * FROM table_name"
    },
    {
        frage: "Wie kann man Daten aus einer Tabelle in MySQL sortieren?",
        antworten: ["ORDER BY column_name", "SORT BY column_name", "ARRANGE BY column_name", "GROUP BY column_name"],
        korrekteAntwort: "ORDER BY column_name"
    },
    {
        frage: "Wie kann man Daten aus mehreren Tabellen in MySQL verknüpfen?",
        antworten: ["CONNECT", "MERGE", "JOIN", "UNION"],
        korrekteAntwort: "JOIN"
    },
    {
        frage: "Wie kann man in MySQL eine Abfrage so schreiben, dass sie nur bestimmte Zeilen zurückgibt?",
        antworten: ["WHERE", "WHEN", "IF", "CASE"],
        korrekteAntwort: "WHERE"
    }
];

// Variablen
let aktuelleFrage = 0;
let korrekteAntworten = 0;

// Elemente auswählen
const frageElement = document.getElementById("frage");
const antwortenElement = document.getElementById("antworten");
const ueberspringenButton = document.getElementById("ueberspringen");
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
        alert("Richtig!");

        if (korrekteAntworten === fragenDB.length) {
            // Wird ausgeführt, wenn alle Fragen korrekt beantwortet wurden.
            frageElement.innerText = "Vielen Dank fürs Spielen";
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
        alert("Falsch! Bitte versuchen Sie es erneut.");
    }

}

// Ereignis-Listener hinzufügen, damit bei Klick auf die Buttons die Entsprechenden Funktionen aufgerufen werden
pruefenButton.addEventListener("click", ueberpruefeAntwort);
anzeigenButton.addEventListener("click", zeigeAntwort);

// Erste Frage anzeigen
zeigeFrage();