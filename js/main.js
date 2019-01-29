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
    // prvi nacin spajanja varijabli u link template string
    //const url='https://api.lyrics.ovh/v1/' + izvodjac + '/' + pesma;    
    //drugi nacin da se spoje varijable u link sa backtick apostorfima     
    const url = `https://api.lyrics.ovh/v1/${izvodjac}/${pesma}`;    
    //console.log(url);    
    fetch(url)
    // .then(function(response){
    //     return response.json();
    // });
    //arrow function strelica je skracenica za function i ne ide return jer je on implicitno sadrzan u arrow function
    .then(response => response.json())
    //.then(objekat => { //kada imamo vise linija izvrsavanja onda idu viticaste zagrade
        //console.log(objekat);
        //console.log(objekat.lyrics);
        // document.write('Tekst pesme je: <br>' + objekat.lyrics);
        // tekstPesme.innerHTML = objekat.lyrics;
        //tekstPesme.innerText = objekat.lyrics;
        // document.getElementById('lyrics').innerHTML = objekat.lyrics;
    .then(objekat => {
        naslovPesme.innerText = izvodjac + ' - ' + pesma;
        tekstPesme.innerText = objekat.lyrics ? objekat.lyrics : "Ne postoji tekst za traženu pesmu. Pokušajte ponovo!" //kada imamo samo jedno izvrsavanje onda moze bez viticastih zagrada
    
});
}

forma.addEventListener('submit', function(event){
    event.preventDefault(); // preventDefault - spreci podrazumevano ponasanje tj da se stranica ne osvezava sama
    ucitajPodatke();
});
