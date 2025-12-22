Webová sránka vytvořená ve druhém ročníku Univerzity Karlovy na Pedagogické fakultě do 
povinného předmětu Vývoj webových stránek (učitel PhDr. Josef Procházka, Ph.D)

Gamifikace Webu - Tajemný vzhled i příběh
Koncept: The GateKeeper (Aetheron), The Trial, The Sanctum
    Strážce času a prostoru, temných dat webového prostředí
    Návštěvník musí prokázat, že je hoden přístupu k datům/příběhu
Inspirace: Interstellar, Path of Exile

Struktura webu (Flow):

    Stránka 1: BRÁNA (index.html)
        Vizuál: Temný avatar nahoře (Strážce), digitální hodiny (odpočítávají čas do "resetu" nebo prostě běží).
        Lore (Příběh): Pod hodinami je text. ZAČÁTEK PŘÍBĚHU. Něco jako:
            "Stojíš před branou Aetheronu. Čas plyne a data jsou uzamčena v temnotě. Pouze ti, kdo znají Kód, mohou projít. Jsi hoden vstoupit?"
        Interakce:
            Jedno velké pole: "INSERT ACCESS CODE"
            Tlačítko: "DECRYPT" (Odemknout)
        Navigace: Pod tím malé, blikající tlačítko nebo text: "Neznáš kód? Podstoupit zkoušku." (Odkaz na kvíz).

    Stránka 2: ZKOUŠKA (trial.html / quiz.html)
        Vizuál: Strohý, terminálový vzhled.
        Obsah: 3-5 otázek (Využití Quiz.js). Mohou to být otázky o IT, o hrách, nebo hádanky.
        Mechanika:
            Návštěvník odpoví.
            Klikne na "Vyhodnotit".
            JavaScript logika: Pokud má vše dobře, JavaScript vypíše na obrazovku: "Zkouška splněna. Přístupový kód je: "kód" "."
            Pokud má chybu: "Chyba v matrixu. Zkus to znovu." / "Error 404 - Zkusit znovu"

    Stránka 3: Svatyně (sanctum.html / success.html) (Databáze Ztracených Dat)
        Kam se dostane, když na hlavní straně zadá heslo "kód".
        Zde může být gratulace o přístupu do Archivu vědomostí, pokračování příběhu jako v Subnautice v PDA o tom, co se stalo -> Záznam 001, 002 atd. + možná obrázky (černá díra, čtvrtá dimenze atd)

        Představa:
            Záznam 001 (Odemčeno): Úvodní zpráva od Aetherona (to co píšeme teď).

            Záznam 002 (Odemčeno): První zmínka o "Velkém Rozpadu".

            Záznam 003 (ZAMČENO - Corrupted Data): "Tento soubor vyžaduje vyšší úroveň oprávnění (Trial 2)."

            Záznam 004 (ZAMČENO): Zpráva od předchozího Cestovatele (něco jako: "Našel jsem je. Nejsou mrtví... oni jsou... invertovaní.").

            "Proč je to super: Když se budeš nudit, prostě napíšeš nový příběh, uložíš ho jako "Záznam 005" a na webu se objeví nové tlačítko. Nemusíš předělávat celý web."

Ten "Temný příběh" (Lore Text)
Aby to vypadalo "hacker/sci-fi", použít CSS animaci, aby se text vypisoval postupně (terminál/starwars effect???), nebo aby blikal.

    HTML: <p class="story-text">Stojíš před branou...</p>

    CSS: Nadpis: Interstellar Trip Font Family
         Text: -

DO BUDOUCNA:
    Možná rozšířit Trialy na Aetheron´s Trial 1, Aetheron´s Trial 2 atd jako v PoE Labyrinth.
    Rozšířit příběh skoro až na knihu
    Udělat hru jako hledačku dat po internetu???

    Gamifikace: PoE Labyrinth System
        Tohle je plán do budoucna pro JS schopnosti. Místo jednoho kvízu udělat Sérii Zkoušek (The Trials).
            Trial of Logic (Zkouška Logiky): Současný kvíz.
            Trial of Perception (Zkouška Vnímání): Hledání schovaného tlačítka nebo kódu přímo ve zdrojovém kódu stránky (F12).
            Trial of Endurance (Zkouška Vytrvalosti): Hádanka, kde musíš čekat, nebo klikat v určitém rytmu.
            The Eternal Labyrinth: Série stránek, které na sebe odkazují, a ty musíš projít správnými dveřmi, jinak tě to vrátí na začátek (tohle se dělá jen přes odkazy <a>, super jednoduché na kódování, ale těžké pro hráče).
