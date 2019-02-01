// VARIJABLE 

const naslovPesme = document.getElementById('title');
const tekstPesme = document.getElementById('lyrics');
const forma = document.getElementById('forma');
const trazeniIzvodjac = document.getElementById('trazeni-izvodjac');
const trazenaPesma = document.getElementById('trazena-pesma');


//FUNKCIJE

function ucitajPodatke(){
    const izvodjac = trazeniIzvodjac.value;
    const pesma = trazenaPesma.value;
    naslovPesme.innerText = izvodjac + ' - ' + pesma;  
    const url = `https://api.lyrics.ovh/v1/${izvodjac}/${pesma}`;    
     
    fetch(url)
    .then(response => response.json())
    .then(objekat => {
        naslovPesme.innerText = izvodjac + ' - ' + pesma;
        tekstPesme.innerText = objekat.lyrics ? objekat.lyrics : "Ne postoji tekst za traženu pesmu. Pokušajte ponovo!"
    
});
}

forma.addEventListener('submit', function(event){
    event.preventDefault();
    ucitajPodatke();
});
const dugme = document.getElementById('dugme');
const trazeniPojam = document.getElementById('trazeni-izvodjac');
const drzacZaClanak = document.getElementById('drzac-za-clanak');
const naslov = document.getElementById('naslov');

function wikiTekst() {
    const trazenaRec = trazeniPojam.value;
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${trazenaRec}&prop=extracts|pageimages|info&pithumbsize=400&inprop=url&redirects=&format=json&origin=*`;
    drzacZaClanak.innerHTML = '';

    fetch(url)
        .then(response => response.json())
        .then(podatak => {
            const pages = podatak.query.pages;           
            const clanak = Object.values(pages)[0];
            naslov.innerText = clanak.title;
            const imgSrc = clanak.thumbnail.source;
            drzacZaClanak.innerHTML += `<img src="${imgSrc}" alt="${clanak.title}">`;
            drzacZaClanak.innerHTML += clanak.extract;
        })
}

dugme.addEventListener('click', wikiTekst);
