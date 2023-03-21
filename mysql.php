<!DOCTYPE html>

<html>
    <head>
        <!-- Metadaten der Webseite.-->

        <!-- Titel, der im Tab angezeigt wird -->
        <title> Fragehomepage Mysql</title>
        <!-- Autoren der Webseite-->
        <meta name="author" content="Benedikt Meissner, Lukas Oschmann, Tony Beyermann">
        <!-- Keywords. Werden für Suchmaschinen verwendet-->
        <meta name="keywords" content="HTML, ...">
        <!-- Festlegung des Chrsets der Webseite-->
        <meta charset="UTF-8">
        <!-- Link zum zentralen CSS -->
        <!-- <link rel="stylesheet" href="css/stylesheet.css"> -->
    </head>
    <body>
        <h1>Fragen zu Mysql</h1>

        <!-- Kurze Beschreibung was hier zu finden ist -->
        <p>
            Auf dieser Seite werden Ihre Kenntnisse über SQL und speziell über MySQL gefordert. 
            Sie werden verschiedene Fragen beantworten müssen, sowie sich in kleinen Übungsaufgaben beweisen.
        </p>

        <h2>Hier kommen die Fragen:</h2>

        <div class="mysql-spielfeld">
            
            <p>Was ist deine Lieblingssprache im Web?</p>
            <form>
                <input type="radio" id="htmlöl" name="fav_language" value="HTML">
                <label for="htmlöl">HTML</label><br>
                <input type="radio" id="css" name="fav_language" value="CSS">
                <label for="css">CSS</label><br>
                <input type="radio" id="javascript" name="fav_language" value="JavaScript">
                <label for="javascript">JavaScript</label>

                <input type="submit" value="Ok" />
                <input type="button" value="Hilfe!" />
            </form>

        </div>
    
    </body>
</html>