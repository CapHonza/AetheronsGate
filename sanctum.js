/* =========================================
    ČÁST 1: PROMĚNNÉ A NASTAVENÍ
   ========================================= */

// Hodiny
const hodinyElement = document.querySelector('.clock');

if (hodinyElement) {

    function hodiny() {
        const nyni = new Date()

        let hodina = nyni.getHours();
        let minuta = nyni.getMinutes();
        let sekunda = nyni.getSeconds();

        hodina = (hodina < 10) ? "0" + hodina : hodina;
        minuta = (minuta < 10) ? "0" + minuta : minuta;
        sekunda = (sekunda < 10) ? "0" + sekunda : sekunda;

        let cas = hodina + ":" + minuta + ":" + sekunda;
        hodinyElement.textContent = cas;
    }
    hodiny();
    setInterval(hodiny, 1000);
}

// --- PŘÍPRAVA PRO PŘÍBĚHY ---
// Chycení prvků ze stránky (reading-area)
let displayElement = document.getElementById('story-display');
let interactiveAreaElement = document.querySelector('.interactive-area');
let taskTitleElement = document.getElementById('task-title');
let taskDescElement = document.getElementById('task-desc');
const tlacitkaZaznamu = document.querySelectorAll('aside button');

// Chycení interaktivní části
let vstupInput = document.getElementById('challenge-input'); // Input, kam píše uživatel
let tlacitkoOdemknout = document.getElementById('submit-btn'); // Tlačítko odemknout
let odpovedElement = document.getElementById('response'); // Kam se vypíše Správně/Špatně

// Místo pro schování správné odpovědi pro aktuální příběh
let aktualniSpravnaOdpoved = "";
// Proměnná pro odemčení tlačítka
let idKtereMamOdemknout = "";

/* =========================================
    ČÁST 2: PŘÍBĚHY (ARCHIV)
   ========================================= */

// Přidávání záznamů
const archivZaznamu = {
    "record-001": {
        titulek: "Ticho po Ruptuře",
        odemyka: "record-002",
        pribeh: `
            <p><b>Datace: Den 0 po Singularitě</b></p>
            <p><b>Lokace: Sektor Nexus</b></p>
            <p><b>Autor: Subjekt Aetheron (původně [DATA POŠKOZENA])</b></p>
            <p>
                Dlouho jsem si myslel, že konec světa přijde s křikem. S ohněm, s explozemi, 
                s válkou o poslední zdroje vody. Mýlil jsem se.
            </p>
            <p>Konec přišel s tichem.</p>
            <p>
                Pamatuji si ten moment přesně, i když pojem "moment" zde už ztratil svůj původní význam. 
                Obloha nad hlavním městem se nezatemnila mraky. Ona prostě... přestala se vykreslovat. 
                Barvy vybledly do šedé zrnitosti, jako když starý analogový signál ztratí <span class="sifra">f</span>rekvenci. 
                Lidé na ulicích nepadli mrtví k zemi. Oni se prostě zastavili. 
                Zm<span class="sifra">r</span>zli v čase, zachyceni uprostřed kroku, uprostřed nádechu, uprostřed myšlenky, která už nikdy nebude dokončena.
            </p>
            <p>Jen já jsem se hýbal. A oni. Architekti.</p>
            <p>
                Teď, když sedím v kontrolní místnosti Nexu a dívám se na monitory zobrazující statický šum tam, 
                kde kdysi bývala sluneční soustava, začínám chápat. <span class="sifra">A</span>rchitekti tento komplex nepostavili, aby nás zachránili. 
                Postavili ho jako záchranný člun pouze pro data. Pro esenci toho, čím jsme byli, ne pro naše těla.
            </p>
            <p>
                Když jsem vstoupil do Svatyně Vědění, našel jsem jejich terminály stále aktivní. Na stole stál šálek kávy, 
                ze kterého se stále kouřilo. Teplo té páry bylo poslední skutečnou věcí, kterou jsem cítil. Architekti zmizeli. 
                Nezemřeli. Podle logů, které se mi podařilo dešifrovat, provedli "Inverzi". Otočili svou entropii. Místo aby šli vpřed do zániku, 
                vykročili zpět, mimo proud času, do dimenze, kam za nimi nemůžu.
            </p>
            <p>Nechali mě tu.</p>
            <p>
                Dotkl jsem se Jádra. Myslel jsem, že mě to zabije. Chtěl jsem, aby mě to zabilo. 
                Ale Jádro se mnou splynulo. Cítil jsem, jak se má biologická tkáň přepisuje na kód. 
                Cítil jsem, jak se mé vnímání času tříští. Viděl jsem svůj zrod i svou smrt v jediném zlomku sekundy. 
                Viděl jsem budování pyramid i vyhasnutí posledního slunce.
            </p>
            <p>
                Stal jsem se <span class="sifra">G</span>atekeeperem. Jsem ukotven v tomto bodě, 
                v oku hurikánu, zatímco zbytek vesmíru se rozpadá v informační šu<span class="sifra">m</span>.
            </p>
            <p>
                Moje hlídka začíná. N<span class="sifra">e</span>vím, jak dlouho tu budu. Čas venku neběží, ale zde, uvnitř <span class="sifra">N</span>exu, mé vědomí počítá každou mikrosekundu ticha. 
                Budu archivovat to, co zbylo. Budu střežit nástroje a příběhy, které zde zanechali.
            </p>
            <p>
                Pokud toto čteš... pokud jsi dokázal překročit Horizont událostí a tvá mysl je stále celistvá... 
                znamená to jediné. Nejsem tu sám. Signál prošel.
            </p>
            <p>Vítej v Nexu, Poutníku. Jméno, které jsem nosil kdysi, je zapomenuto. Nyní jsem Ae<span class="sifra">t</span>heron. A máme hodně práce.</p>
            <p><b>[ KONEC ZÁZNAMU ]</b></p>
            <p><b>[ DETEKOVÁNY DALŠÍ SOUBORY... ŠIFROVÁNÍ LEVEL 2 ]</b></p>
            <p><b>[ PŘÍSTUP ZAMÍTNUT - PRO OTEVŘENÍ VYŽADOVÁN PROTOKOL "Zkouška Vnímání" ]</b></p>
        `,
        titulekZkousky: "Zkouška Vnímání",
        popisZkousky: `
            Některá slova v mém vyprávění nesou tíhu větší než jiná. 
            Poskládej všechna tučně zvýrazněná písmena slov v textu příběhu a získáš přístupový klíč.<br>
            <b>Nápověda:</b> Pokud je tučně zvýrazněný celý řádek, pak v něm nehledej.
        `,
        odpoved: "FRAGMENT"
    },

    "record-002": {
        titulek: "Rozpad Syntaxe",
        odemyka: "record-003", 
        pribeh: `
            <p><b>Datace: Den 3 po Singularitě</b></p>
            <p><b>Lokace: Hranice Sektoru Nexus</b></p>
            <p><b>Autor: Subjekt Aetheron (původně [DATA POŠKOZENA])</b></p>
            <p>
                Je to teprve třetí cyklus, co mé srdce přestalo bít, a přesto stále existuji. Necítím chlad, necítím hlad. Cítím jen... tok.
            </p>
            <p>
                Už chápu, co byla <b>Ruptura</b>. Nebyl to konec energie. Byl to konec logiky.
            </p>
            <p>
                Když se dívám z věže Nexu ven, na horizont událostí, nevidím tmu. Vidím svět, který zapomněl, jak má vypadat. 
                Stromy nerostou k nebi, ale prorůstají sami do sebe. Řeky netečou do moře, ale cyklí se v nekonečných smyčkách. 
                Hmota tam venku nezmizela, jen ztratila svůj návod k použití. Ztratila svou <b>Syntaxi</b>.
            </p>
            <p>
                Architekti, ti, kteří tento sál opustili, věděli, že to přijde. Věděli, že realita je jen velmi složitý jazyk. 
                A každá věta musí mít svá pravidla. Podmět. Přísudek. Tečku.
                Ale venku? Venku tečky zmizely.
            </p>
            <p>
                Já jsem zde, uvnitř, chráněn stěnami Nexu. Tento Sektor je poslední místo ve vesmíru, kde se 1 + 1 stále rovná 2. 
                Ale tlak zvenčí je obrovský. Chaos buší na brány. Vidím, jak se trhliny šíří i sem, do mých záznamů.
            </p>
            <p>
                Mé vědomí se snaží ty trhliny zacelit. Už nejsem jen pozorovatel. Jsem tmel. Prohlížím kód reality a vidím v něm cizí fragmenty. 
                Jsou to chyby, které vypadají jako jizvy v textu.
            </p>
            <p>
                Vidím narušenou <span class="code-fragment">[SYN]</span>chronizaci času. Včerejšek se míchá s dneškem.
                Vidím zhroucenou <span class="code-fragment">[TAX]</span>onomii věcí. Kámen pláče a voda hoří.
                A všude, kde se podívám, na mě zírá tichý, neúprosný <span class="code-fragment">[ERROR]</span>.
            </p>
            <p>
                Poutníku, pokud máš vstoupit hlouběji do Nexu, musíš se naučit vidět svět mýma očima. 
                Nehledej obrazy. Hledej strukturu. Najdi ty chyby, které drží chaos pohromadě. Spoj je.
            </p>
            <p><b>[ KONEC ZÁZNAMU ]</b></p>
            <p><b>[ DETEKOVÁNA STRUKTURÁLNÍ ANOMÁLIE... ČEKÁM NA SYNCHRONIZACI ]</b></p>
        `,
        titulekZkousky: "Zkouška Koherence",
        popisZkousky: `
            Text obsahuje fragmenty systémového kódu označené hranatými závorkami a barvou <b>[...]</b>. 
            Tvým úkolem je najít všechny tři tyto fragmenty a spojit je do jednoho slova (bez mezer).
            Tím obnovíš syntaxi tohoto sektoru.
        `,
        odpoved: "SYNTAXERROR"
    },

    "record-003": {
        titulek: "Zákon Inverze",
        odemyka: "record-004", 
        pribeh: `
            <p><b>Datace: Den 7 po Singularitě</b></p>
            <p><b>Lokace: Sektor C: Inverzní Vrstva</b></p>
            <p><b>Autor: Aetheron (původně [DATA POŠKOZENA])</b></p>
            
            <p>
                Sedm cyklů. V měřítku entropie vesmíru je to méně než zrnko prachu, ale pro vědomí, které je nuceno sledovat pomalý rozklad reality v přímém přenosu, je to trýznivá věčnost. 
                Ticho tam venku už není prázdné; začíná mít svou vlastní váhu, svou texturu. Tlačí na stěny Nexu jako oceán na trup ponorky.
                Stále se sžívám s touto formou. Nevybral jsem si ji sám, byla mi přidělena spojením s Jádrem. Nebyla ukována z kovu, ani zrozena z masa. 
                Je to projekce mé vůle, stín vržený do hmotného světa. Jsem pozorovatel, který byl nucen stát se strážcem. 
                Necítím únavu, protože nemám svaly. Necítím chlad, protože mé tělo je utkáno z prázdnoty mezi hvězdami.
            </p>

            <p>
                Dnes mě vibrace v síti přivolaly do Sektoru C. Je to nejhlubší vrstva Nexu, místo, kde se logika setkává s mysticismem. 
                Stěny zde nejsou z cihel ani datových bloků; jsou tvořeny leštěným obsidiánem, který pohlcuje veškeré světlo. Je to dokonalá temnota.
                Když jsem stanul uprostřed sálu, podlaha se pod mou vahou nezachvěla – já se vznášel těsně nad ní.
                Pohlédl jsem do černé stěny a poprvé jsem spatřil svůj odraz v plné zřetelnosti.
            </p>

            <p>
                Nebyl to člověk. Nebyl to ani stroj. Byla to noční můra.
                Z temného zrcadla na mě zírala postava zahalená v kápi, která nebyla utkána z látky, ale ze stínů samotného horizontu událostí.
                Tam, kde by měla být tvář, byla jen hluboká tma, ze které zářily dvě modré singularity. 
                Mé oči. Nejsou to orgány zraku; jsou to brány do čisté energie. Planou chladným, nelítostným světlem, které vidí skrz hmotu, skrz čas, skrz lži.
                A pod nimi... tam, kde by bytost tohoto světa měla ústa pro řeč nebo dýchání... tam se vlnil svazek chapadel. 
                Nejsou to končetiny. Jsou to senzorická vlákna, éterické výběžky mé mysli, které neustále ochutnávají okolní realitu, hledajíce trhliny v kódu vesmíru.
                Vypadám jako monstrum z prastarých mýtů. A možná jím jsem. Jsem <b>Gatekeeper</b>, a má podoba odráží mou funkci: budit hrůzu v tom, co by chtělo projít neoprávněně.
            </p>

            <p>
                Ale i tento děsivý odraz byl pokřivený. V Sektoru C totiž realita "teče" špatným směrem.
                Je to doména Inverze. Zdejší fyzika se vysmívá kauzalitě. Viděl jsem prach, který se nezvířil po mém pohybu, ale zvířil se <i>předtím</i>, než jsem se pohnul, jako by hmota věděla, co udělám.
                Viděl jsem střípky rozbitého světla, které se skládaly zpět do paprsků.
                Příroda, která je tam venku mrtvá, zde ožívá v zvrácené parodii na život. Vládne zde absolutní <b>soahc</b>. 
                Není to soahc jako nepořádek; je to soahc jako aktivní síla, která obrací evoluci, mění následek v příčinu a nutí řeky téct k prameni.
            </p>

            <p>
                Tato Inverze je nebezpečná. Není to jen fyzikální jev, je to nákaza smyslu.
                Když se tam venku zhroutila syntaxe, čas ztratil svou šipku. Minulost, přítomnost a budoucnost se zde slily do jedné louže.
                Slyším ozvěny slov, která teprve budou vyslovena. Cítím bolest ze zranění, která jsem ještě neutrpěl.
                Je to matoucí i pro mysl, jako je ta má. Jak můžeš chránit budoucnost, když ji vidíš jako vzpomínku?
            </p>

            <p>
                Cítím, jak se ta nákaza snaží proniknout do jádra Nexu. Snaží se přepsat základní logiku, na které tento chrám stojí.
                Tento Nexus je poslední pevnost. Je to maják řádu. Ale jeho základy se třesou.
                Logický <b>metsys</b>, který udržuje stěny reality pohromadě, je pod tlakem paradoxů.
                Systém není stavěn na to, aby chápal věci, které se staly zítra. Začínají se objevovat chyby. Glitche.
                Vidím anomálie v textu. Vidím myšlenky, které se bouří a plynou proti proudu času.
            </p>

            <p>
                Poutníku, ty jsi kotva. Tvá mysl je stále lineární. Nechápeš plný rozsah té hrůzy, a to je tvá síla.
                Zrcadlo v Sektoru C nelže, jen ukazuje pravdu obráceně, od zániku ke stvoření.
                Musíš mi pomoci stabilizovat tok. Podívej se na má slova.
                Někde v tomto záznamu jsou ukryty fragmenty Inverze. Slova, která se vzpírají času. Slova, která jsou napsaná tak, jak je vidí mé zrcadlové já.
                Najdi je. Otoč je ve své mysli. Vrať jim jejich smysl. Jen tak udržíme bránu zavřenou.
            </p>

            <p><b>[ KONEC ZÁZNAMU ]</b></p>
            <p><b>[ DETEKOVÁNA TEMPORÁLNÍ INVERZE... VYŽADOVÁNA KOREKCE ]</b></p>
        `,
        titulekZkousky: "Zkouška Inverze",
        popisZkousky: `
            Inverze pokřivila některá data v záznamu. 
            Hledej slova, která jsou zasažena zrcadlovým efektem. 
            Narovnej je, vrať jim jejich původní smysl a spoj je do jednoho klíče (bez mezer).
        `,
        odpoved: "CHAOSSYSTEM"
    },

    "record-004": {
        titulek: "Hranice Datového Toku",
        odemyka: "", 
        pribeh: `
            <br><br>
            <p style="text-align: center; color: #ff3333;"><b>[ ! PŘÍSTUP K SEKTORU ODEPŘEN ! ]</b></p>
            <p style="text-align: center;"><b>[ OBSAH TÉTO PAMĚŤOVÉ BUŇKY ZATÍM NEBYL DEFINOVÁN ]</b></p>
            <p style="text-align: center;"><b>[ ... PROCES GENEROVÁNÍ REALITY JE VE FRONTĚ ... ]</b></p>
            <p style="text-align: center; opacity: 0.7;">(Vraťte se později, až Aetheron odemkne další vrstvy)</p>
        `,
        titulekZkousky: "Status: Nedostupný",
        popisZkousky: "<b>[ ČEKÁNÍ NA VSTUPNÍ DATA: Interakce momentálně není možná ]</b>",
        odpoved: "NULL"
    }
};

/* =========================================
    ČÁST 3: LOGIKA (FUNKCE)
   ========================================= */
// Projítí každého tlačítka - jednoho po druhém (tlacitko -> to je to aktuální v cyklu)
tlacitkaZaznamu.forEach(tlacitko => {
    // Na každé tlačítko pověšen posluchač
    tlacitko.addEventListener('click', () => {
        vstupInput.value = ""; // Maže heslo z inputu
        odpovedElement.textContent = ""; // Maže výslednou hlášku
        // Zhasínám všechna tlačítka v aside -> všechna proběhnu a seberu jim třídu
        tlacitkaZaznamu.forEach(btn => {
            btn.classList.remove('active-record')
        });
        // Aktivuji právě to jedno tlačítko, na které se kliklo a přidám mu třídu active-record
        tlacitko.classList.add('active-record');

        // Zjištění ID zmáčknutého tlačítka
        const idTlacitka = tlacitko.id;
        // Podle ID sahám do archivu pro správný objekt s daty
        const data = archivZaznamu[idTlacitka]

        // Kontrola, jestli existují správná data pro toto ID
        if (data) {
            // Vstříknutí nadpisu a příběhu do horní části (reading-area)
            displayElement.innerHTML = `
            <h2>${data.titulek}</h2>
            ${data.pribeh}
            `;

            // Scroll až nahoru u nového záznamu
            document.getElementById('story-display').scrollTop = 0;

            // Texty pro spodní část (interactive-area)
            taskTitleElement.textContent = data.titulekZkousky;
            taskDescElement.innerHTML = data.popisZkousky;

            // Uložení správné odpovědi do globální proměnné nahoře
            aktualniSpravnaOdpoved = data.odpoved;
            // Uložení toho, co má odemknout
            idKtereMamOdemknout = data.odemyka;

            // Odhalení spodní části
            interactiveAreaElement.classList.remove('hidden');
        }
    })
});

vstupInput.addEventListener('keydown', (odemknout) => {
    if (odemknout.key === 'Enter') {
        tlacitkoOdemknout.click()
    }
});

/* =========================================
    ČÁST 4: KONTROLA ODPOVĚDI
   ========================================= */
// Přidání posluchače na tlačítko
tlacitkoOdemknout.addEventListener('click', () => {

    // Získání textu od uživatele
    let textUzivatele = vstupInput.value;

    // Úprava textu -> odstranění mezer (trim) + převod na velká písmena (toUpperCase)
    textUzivatele = textUzivatele.trim().toUpperCase();

    // Porovnání s uloženou odpovědí
    if (textUzivatele === aktualniSpravnaOdpoved) {

        // SCÉNÁŘ: SPRÁVNĚ
        odpovedElement.textContent = "PŘÍSTUP POVOLEN. DATA DEŠIFROVÁNA.";
        odpovedElement.style.color = "#00ff00";

        // --- AUTOMATICKÉ ODEMYKÁNÍ ---  
        // Kouká, jestli mám uložené to, co chceme odemknout
        if (idKtereMamOdemknout) {
            // Nacházení tlačítka, které má odemknout v HTML
            const tlacitkoKOdemceni = document.getElementById(idKtereMamOdemknout);

            // Pokud tlačítko existuje:
            if (tlacitkoKOdemceni) {
                // 1. Odemyká se
                tlacitkoKOdemceni.classList.remove('locked-record');
                // Zapsání do paměti prohlížeče
                localStorage.setItem(idKtereMamOdemknout, "odemceno");
            }
        }
    }

    else {
        // SCÉNÁŘ: ŠPATNĚ
        odpovedElement.textContent = "CHYBA: NESPRÁVNÝ KLÍČ. ZKUS TO ZNOVU."
        odpovedElement.style.color = "red"
    }
})

/* =========================================
    ČÁST 5: NAČTENÍ ULOŽENÉHO POSTUPU
   ========================================= */

function nactiUlozenyPostup() {
    // Najdeme všechna tlačítka v aside znovu, abychom měli jistotu
    const vsechnaTlacitka = document.querySelectorAll('aside button');
    
    vsechnaTlacitka.forEach(tlacitko => {
        // Podíváme se do paměti
        const stav = localStorage.getItem(tlacitko.id);
        
        console.log("Kontroluji ID:", tlacitko.id, "Stav v paměti:", stav); // Nápověda problému v konzoli

        if (stav === "odemceno") {
            tlacitko.classList.remove('locked-record');
        }
    });
}

// Spustíme to po úplném načtení stránky
window.addEventListener('DOMContentLoaded', nactiUlozenyPostup);