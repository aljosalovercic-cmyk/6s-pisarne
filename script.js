let stNeskladij = 0;
let odgovori = [];
let imePresojevalca = "";
let lokacijaPregleda = "";
const vprasanja = [

/* 04. SPLOŠNA UREJENOST */

{id:"04.1", kategorija:"SPLOŠNA UREJENOST", vprasanje:"V pisarni na mizah ni izdelkov brez statusa, hrane itd."},
{id:"04.2", kategorija:"SPLOŠNA UREJENOST", vprasanje:"Pod mizo ali okoli nje ali na omarah ni kartonastih ali drugih škatel."},
{id:"04.3", kategorija:"SPLOŠNA UREJENOST", vprasanje:"Nič ni prislonjeno k stenam ali stebrom."},
{id:"04.4", kategorija:"SPLOŠNA UREJENOST", vprasanje:"Na okenskih policah ni odloženih stvari."},
{id:"04.5", kategorija:"SPLOŠNA UREJENOST", vprasanje:"Pohištvo je vzdrževano in ni poškodovano."},
{id:"04.6", kategorija:"SPLOŠNA UREJENOST", vprasanje:"Vsebina v omarah je označena in lično urejena (omare so last podjetja in ne zaposlenih)."},
{id:"04.7", kategorija:"SPLOŠNA UREJENOST", vprasanje:"Odpravljena so odstopanja od prejšnjega ocenjevanja urejenosti."},
{id:"04.8", kategorija:"SPLOŠNA UREJENOST", vprasanje:"Splošna urejenost pisarne je ustrezna."},

/* 05. GARDEROBA */

{id:"05.1", kategorija:"GARDEROBA", vprasanje:"Obutev je shranjena na lovilcih ali v garderobnih omarah."},
{id:"05.2", kategorija:"GARDEROBA", vprasanje:"Oblačila so obešena na obešalniku in niso po stolih ali drugi opremi. Dežniki so postavljeni v posodah in ne visijo po drugi opremi."},

/* 06. RAČUNALNIŠKA OPREMA */

{id:"06.1", kategorija:"RAČUNALNIŠKA OPREMA", vprasanje:"Računalniška inštalacija je urejena in lično speta."},
{id:"06.2", kategorija:"RAČUNALNIŠKA OPREMA", vprasanje:"Slušalke so na nosilcu."},
{id:"06.3", kategorija:"RAČUNALNIŠKA OPREMA", vprasanje:"Pisarniške naprave (tiskalnik) niso polepljeni s selotejpom ali z drugimi na roke napisanimi obvestili."},
{id:"06.4", kategorija:"RAČUNALNIŠKA OPREMA", vprasanje:"Računalniški zaslon in druge komponente niso polepljene s samolepilnimi listki."},
{id:"06.5", kategorija:"RAČUNALNIŠKA OPREMA", vprasanje:"Stacionarni računalnik je na stojalu (ni na tleh)."},
{id:"06.6", kategorija:"RAČUNALNIŠKA OPREMA", vprasanje:"Računalniška oprema je redno vzdrževana."},

/* 07. MERILNA OPREMA */

{id:"07.1", kategorija:"MERILNA OPREMA", vprasanje:"Merilna oprema, kontrolniki, inštrumenti ali laboratorijska oprema je vzdrževana, urejena in pregledana."},

/* 08. SPLOŠNA VARNOST */

{id:"08.1", kategorija:"SPLOŠNA VARNOST", vprasanje:"Omarica za PP je ustrezno označena in s pravo vsebino. Rok uporabe ni pretečen."},
{id:"08.2", kategorija:"SPLOŠNA VARNOST", vprasanje:"Na omarici za PP mora biti objavljena lista usposobljenih oseb za izvajanje prve pomoči."},
{id:"08.3", kategorija:"SPLOŠNA VARNOST", vprasanje:"Elektro inštalacija je urejena."},
{id:"08.4", kategorija:"SPLOŠNA VARNOST", vprasanje:"Zaposleni med delom uporabljajo vsa zaščitna sredstva, ki so predpisana."},
{id:"08.5", kategorija:"SPLOŠNA VARNOST", vprasanje:"V pisarni so sredstva za dezinfekcijo rok in razkuževanje delovne opreme."},
{id:"08.6", kategorija:"SPLOŠNA VARNOST", vprasanje:"Gasilna oprema je dostopna in označena. Evakuacijske poti so proste."},

/* 09. TABLA, DOKUMENTACIJA */

{id:"09.1", kategorija:"TABLA IN DOKUMENTACIJA", vprasanje:"Table so magnetne in na njih ni ostankov lepila ali prilepljenih dokumentov."},
{id:"09.2", kategorija:"TABLA IN DOKUMENTACIJA", vprasanje:"Vsebina oglasnih tabel ustreza delovnemu procesu. Table oddelkov imajo tudi deklaracijsko tablo."},
{id:"09.3", kategorija:"TABLA IN DOKUMENTACIJA", vprasanje:"Na tabli ali drugem primernem mestu je objavljen ocenjevalni list prehodnega ocenjevanja."},
{id:"09.4", kategorija:"TABLA IN DOKUMENTACIJA", vprasanje:"Na tabli je nameščen standard samovzdrževanja urejenosti na obrazcu 198707 (izjema so pisarne, kjer je samo en uporabnik)."},
{id:"09.5", kategorija:"TABLA IN DOKUMENTACIJA", vprasanje:"Dokumenti so v čistih, nepoškodovanih mapah."},
{id:"09.6", kategorija:"TABLA IN DOKUMENTACIJA", vprasanje:"Dokumentacija, obvestila niso polepljena po stenah, omarah, mizah."},

/* 10. CELOSTNA GRAFIČNA PODOBA */

{id:"10.1", kategorija:"CGP", vprasanje:"Pisarna je označena skladno s CGP (identifikacijska tablica na vratih)."},
{id:"10.2", kategorija:"CGP", vprasanje:"Registratorji so označeni skladno s CGP."},
{id:"10.3", kategorija:"CGP", vprasanje:"Obrazci in dokumenti imajo ustrezen logotip podjetja Kolektor, ime in priimek izdajatelja, datum in ident dokumenta."},

/* 11. ODLAGALNA MESTA */

{id:"11.1", kategorija:"ODLAGALNA MESTA", vprasanje:"Oznake, odlagalna mesta so vzdrževana. Napisi so čitljivi in nepoškodovani."},
{id:"11.2", kategorija:"ODLAGALNA MESTA", vprasanje:"V pisarni se upošteva standard urejenosti."},
{id:"11.3", kategorija:"ODLAGALNA MESTA", vprasanje:"Odlagalno mesto za orodja in pripomočke so označeni z modro barvo."},
{id:"11.4", kategorija:"ODLAGALNA MESTA", vprasanje:"Odlagalno mesto za vzorce je označeno s predpisano barvo."},

/* 12. ČISTOČA */

{id:"12.1", kategorija:"ČISTOČA", vprasanje:"Pribor za čiščenje računalniške opreme je na voljo."},
{id:"12.2", kategorija:"ČISTOČA", vprasanje:"Vsak zaposleni skrbi za čistočo in urejenost svojega delovnega mesta."},
{id:"12.3", kategorija:"ČISTOČA", vprasanje:"Zidovi so čisti in nepoškodovani, brez prahu in pajčevine."},
{id:"12.4", kategorija:"ČISTOČA", vprasanje:"Stropovi so čisti, nepoškodovani in brez pajčevine."},
{id:"12.5", kategorija:"ČISTOČA", vprasanje:"Steklene površine in police so čiste in nepoškodovane."},
{id:"12.6", kategorija:"ČISTOČA", vprasanje:"Tla so čista, ni nevarnosti zdrsa, niso poškodovana."},

/* 13. ERGONOMIJA */

{id:"13.1", kategorija:"ERGONOMIJA", vprasanje:"Osvetlitev pisarne je primerna."},
{id:"13.2", kategorija:"ERGONOMIJA", vprasanje:"Temperatura v pisarni se giblje znotraj predpisanega razpona (20° do 22°)."},
{id:"13.3", kategorija:"ERGONOMIJA", vprasanje:"Prezračevanje pisarne je zagotovljeno (klima ali okno)."},
{id:"13.4", kategorija:"ERGONOMIJA", vprasanje:"Ergonomska oprema v pisarni (višina zaslona, miška)."},
{id:"13.5", kategorija:"ERGONOMIJA", vprasanje:"Zaposleni uporabljajo ergonomske stole."},

/* 14. EKOLOGIJA */

{id:"14.1", kategorija:"EKOLOGIJA", vprasanje:"Odpadke se ločuje in ustrezno odlaga."},
{id:"14.2", kategorija:"EKOLOGIJA", vprasanje:"Zabojniki za smeti so pravilno označeni."},
{id:"14.3", kategorija:"EKOLOGIJA", vprasanje:"Zabojniki za smeti niso poškodovani."},
{id:"14.4", kategorija:"EKOLOGIJA", vprasanje:"Tekočine v omarah so na lovilcu."}

];
let trenutno = 0;

function zacetekPregleda(event) {
    event.preventDefault();

    imePresojevalca =
        document.getElementById("imePresojevalca").value.trim();
    lokacijaPregleda =
        document.getElementById("lokacijaPregleda").value.trim();

    if (!imePresojevalca || !lokacijaPregleda) {
        alert("Vnesi ime presojevalca in lokacijo presoje.");
        return;
    }

    document.getElementById("zacetniPodatki").style.display = "none";
    document.getElementById("aplikacija").style.display = "block";
    prikazi();
}

function prikazi() {

    document.getElementById("kategorija").innerHTML =
        vprasanja[trenutno].kategorija;

    document.getElementById("vprasanje").innerHTML =
        vprasanja[trenutno].vprasanje;

    const procent =
        ((trenutno + 1) / vprasanja.length) * 100;

    document.getElementById("napredek").innerHTML =
        "Vprašanje " +
        (trenutno + 1) +
        " od " +
        vprasanja.length +
        " (" +
        Math.round(procent) +
        "%)";

    document.getElementById("progressFill").style.width =
        procent + "%";

    document.getElementById("komentarPolje").style.display =
    "none";

document.getElementById("komentar").value = "";
document.getElementById("slika").value = "";
document.getElementById("potrdiNe").style.display =
"none";
}

function da() {

    odgovori.push({
        id: vprasanja[trenutno].id,
        kategorija: vprasanja[trenutno].kategorija,
        vprasanje: vprasanja[trenutno].vprasanje,
        odgovor: "DA",
        komentar: document.getElementById("komentar").value
    });

    document.getElementById("komentar").value = "";

    trenutno++;

    if (trenutno < vprasanja.length) {
        prikazi();
    } else {
        konec();
    }
}

function ne() {
const komentar =
    document.getElementById("komentar").value;

if (komentar.trim() === "") {
    alert("Pri neskladju vnesi komentar.");
    return;
}
const slika =
    document.getElementById("slika").files[0];

odgovori.push({
    id: vprasanja[trenutno].id,
    kategorija: vprasanja[trenutno].kategorija,
    vprasanje: vprasanja[trenutno].vprasanje,
    odgovor: "NE",
    komentar: komentar,
    slikaIme: slika ? slika.name : ""
});

stNeskladij =
    odgovori.filter(o => o.odgovor === "NE").length;
document.getElementById("neskladja").innerHTML =
    "Neskladja: " + stNeskladij;

    document.getElementById("komentar").value = "";

    trenutno++;

    if (trenutno < vprasanja.length) {
        prikazi();
    } else {
        konec();
    }
}


function konec() {

    let html = `
        <h1>Pregled zaključen</h1>
        <p><b>Presojevalec:</b> ${pobegniHtml(imePresojevalca)}</p>
        <p><b>Lokacija presoje:</b> ${pobegniHtml(lokacijaPregleda)}</p>
    `;

    odgovori.forEach(o => {

        html += `
        <div style="border:1px solid #ccc;
                    margin:10px;
                    padding:10px">

            <b>${o.vprasanje}</b><br>
            Odgovor: ${o.odgovor}<br>
            Komentar: ${o.komentar}
        </div>
        `;
    });
html += `
<br><br>

<button onclick="shraniRezultate()">
Shrani rezultate
</button>
`;

document.body.innerHTML = html;
    
}

function pobegniHtml(vrednost) {
    return vrednost.replace(/[&<>"']/g, znak => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[znak]);
}

function nazaj() {

    if (trenutno > 0) {

        trenutno--;

        odgovori.pop();
        stNeskladij =
            odgovori.filter(o => o.odgovor === "NE").length;
        document.getElementById("neskladja").innerHTML =
            "Neskladja: " + stNeskladij;

        prikazi();
    }

}
function shraniRezultate() {

    const napake =
        odgovori.filter(o => o.odgovor === "NE");

    const vrstice = [
        "6S PREGLED PISARN",
        "Datum pregleda: " + new Date().toLocaleString("sl-SI"),
        "Presojevalec: " + imePresojevalca,
        "Lokacija presoje: " + lokacijaPregleda,
        "Število pregledanih vprašanj: " + odgovori.length,
        "Število neskladij: " + napake.length,
        "",
        "VSI ODGOVORI"
    ];

    odgovori.forEach((o, index) => {
        vrstice.push(
            "",
            (index + 1) + ". [" + o.id + "] " + o.kategorija,
            "Vprašanje: " + o.vprasanje,
            "Odgovor: " + o.odgovor
        );

        if (o.odgovor === "NE") {
            vrstice.push(
                "Napaka / komentar: " + o.komentar,
                "Slika: " + (o.slikaIme || "Ni priložena")
            );
        } else if (o.komentar) {
            vrstice.push("Komentar: " + o.komentar);
        }
    });

    const podatki = "\uFEFF" + vrstice.join("\r\n");

    const blob = new Blob(
        [podatki],
        { type: "text/plain;charset=utf-8" }
    );

    const a =
        document.createElement("a");

    a.href =
        URL.createObjectURL(blob);

    a.download =
        "6S_Pregled.txt";

    a.click();
}
function pokaziKomentar() {

    document.getElementById("komentarPolje").style.display =
        "block";

    document.getElementById("potrdiNe").style.display =
        "inline-block";
}