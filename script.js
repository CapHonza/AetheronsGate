/* =========================================
    ČÁST 1: HLAVNÍ BRÁNA (Index.html)
   ========================================= */

// Hodiny na index.html
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

// Heslo do SANCTUM
const tlacitkoBrana = document.querySelector('.code-box button')
if (tlacitkoBrana) {
    tlacitkoBrana.addEventListener('click', sanctumSwitch);
    function sanctumSwitch() {
        const vstup = document.querySelector('.code-box input').value.toUpperCase()
        if (vstup === "ANDROMEDA") {
            window.location.href = "sanctum.html";
        }
        else {
            tlacitkoBrana.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
            tlacitkoBrana.style.borderColor = "red";
            tlacitkoBrana.style.boxShadow = "0 0 20px red";
            tlacitkoBrana.style.color = "red";

            tlacitkoBrana.innerText = "CHYBA";

            setTimeout(function () {
                tlacitkoBrana.style.backgroundColor = ""; // Vymazání = návrat k CSS
                tlacitkoBrana.style.borderColor = "";
                tlacitkoBrana.style.boxShadow = "";
                tlacitkoBrana.style.color = "";
                tlacitkoBrana.innerText = "ODEMKNOUT"; // Návrat textu
            }, 1500);
        }
    }
};

// Tlačítko reagující na Enter
const vstupniInput = document.querySelector('.code-box input');
if (vstupniInput) {
    vstupniInput.addEventListener('keydown', (odemknout) => {
        if (odemknout.key === 'Enter') {
            tlacitkoBrana.click()
        }
    })
};

/* =========================================
    ČÁST 2: ZKOUŠKA (Quiz.html)
   ========================================= */

// Vyhodnocování kvízu na quiz.html
const quizButton = document.querySelector('#submit-quiz')

if (quizButton) {
    quizButton.addEventListener('click', vyhodnotitQuiz);

    // Zavření Overlaye
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', zavritOverlay);
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
}
