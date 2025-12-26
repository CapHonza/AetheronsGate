const hodinyElement = document.querySelector('.clock');
if (hodinyElement) {

    function hodiny() {
        const ted = new Date()

        let hodina = ted.getHours();
        let minuta = ted.getMinutes();
        let sekunda = ted.getSeconds();

        hodina = (hodina < 10) ? "0" + hodina : hodina;
        minuta = (minuta < 10) ? "0" + minuta : minuta;
        sekunda = (sekunda < 10) ? "0" + sekunda : sekunda;

        let cas = hodina + ":" + minuta + ":" + sekunda

        hodinyElement.textContent = cas;
    }
    hodiny();
    setInterval(hodiny, 1000);
}

const quizButton = document.querySelector('#submit-quiz')
if (quizButton) {
    quizButton.addEventListener('click', vyhodnotitQuiz);
}

function vyhodnotitQuiz() {
    let o1 = document.querySelector('input[name="q1"]').value.trim().toLowerCase();
    // o2El atd používám jako schránku s tím, že se hledá zaškrtnuté kolečko (:checked). Pokud uživatel nic nezaškrtne, tak pc hlásí Null
    // o2 je jako čtení dopisu ze schránky. Kdyý budu chtít číst "Null" - "Nic", tak mi script spadne -> Použití ?
    // ? = Zkrácená podmínka -> je o#El skutečný? ANO -> čtu .value; NE -> dostavám prázdný text ""
    let o2El = document.querySelector('input[name="q2"]:checked'); // El používám jako označení Element
    let o2 = o2El ? o2El.value : "";
    let o3El = document.querySelector('input[name="q3"]:checked'); // El používám jako označení Element
    let o3 = o3El ? o3El.value : "";
    let o4El = document.querySelector('input[name="q4"]:checked'); // El používám jako označení Element
    let o4 = o4El ? o4El.value : "";
    let o5 = document.querySelector('input[name="q5"]').value.trim().toLowerCase();

    let skore = 0;
    if (o1 === "ram") {
        skore++;
    }
    if (o2 === "b") {
        skore++;
    }
    if (o3 === "a") {
        skore++;
    }
    if (o4 === "b") {
        skore++;
    }
    if (o5 === "tma") {
        skore++;
    }

    // Hledání Overlaye v HTML
    const overlay = document.querySelector('#overlay-container');
    const nadpis = document.querySelector('#overlay-nadpis');
    const text = document.querySelector('#overlay-text');
    const box = document.querySelector('.overlay-box');

    box.classList.remove('win', 'lose');

    // Nastavení textu podle výsledku
    // classList win/lose je v CSS u tlačítek. Odtud si bere barvu
    if (skore === 5) {
        box.classList.add('win');
        nadpis.innerText = "[ SYSTEM SYNC: 100% ]";
        text.innerText = `Analýza dokončena. Tvůj myšlenkový vzorec odpovídá frekvenci Nexu. Jsi ten, na kterého jsme čekali. Entropie ustupuje.
        
        Tvá mysl je klíčem.

        PŘÍSTUPOVÝ KÓD: ANDROMEDA

        (Vrať se k Bráně a zadej kód. Nezapomeň ho. V chaosu je paměť tvou jedinou zbraní.)`;

    }
    else {
        box.classList.add('lose');
        nadpis.innerText = "[ ERROR: SIGNAL LOST ]";
        text.innerText = `Detekována inkoherence. Tvá mysl je stále zastřena šumem vnějšího světa. Spojení s Nexem nelze navázat.

        Nezoufej, Poutníku. Čas je zde relativní.

        Zklidni svou mysl, přeformátuj své odpovědi a pokus se o synchronizaci znovu.`;
    }

    // Zobrazení Overlaye (přiřazení třídy active)
    overlay.classList.add('active');
}

// Funkce pro zavření Overlaye
function zavritOverlay() {
    document.querySelector('#overlay-container').classList.remove('active');
}

if (heslo === ANDROMEDA) {
    
}