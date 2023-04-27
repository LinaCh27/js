console.log("Get Data");

let btnGetData = document.getElementById('get-data');

const getData = () => {

    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        .then(res => res.json())
        .then(data => {

            let pImie = document.createElement('div');
            let pNazwisko = document.createElement('div');
            let pZawod = document.createElement('div');
            let pFirma = document.createElement('div');
            let hr = document.createElement('hr');

            pImie.innerText = `Imie: ${data.imie}`;
            pNazwisko.innerText = `Nazwisko: ${data.nazwisko}`;
            pZawod.innerText = `Zawod: ${data.zawod}`;
            pFirma.innerText = `Firma: ${data.firma}`;


            document.body.appendChild(pImie);
            document.body.appendChild(pNazwisko);
            document.body.appendChild(pZawod);
            document.body.appendChild(pFirma);
            document.body.appendChild(hr);

            
        })
        .catch(error => {
            console.error(error);
        })
    
}

btnGetData.addEventListener('click', getData);