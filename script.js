// Envoie une requête GET à l'URL de l'api pour récupérer des données
fetch("instrumentsMusiques.json")
  // Une fois que la réponse est reçue
  .then(rep => {
    // transforme la reponse obtenu en JSON 
    return rep.json();
  })
  // Une fois que les données JSON sont extraites avec succès, jeles transmet à une fonction pour l'utiliser plus tard
  .then(data => {
    // Appelle la fonction addProducts() avec les données JSON en entrée
    addContent(data);
  });




// Cette fonction prend les données JSON en entrée et effectue une action sur celles-ci
function addContent(data) {
  
  // Affiche les données dans la console du navigateur
    console.log(data)
    console.log(data.entreprise.nomCommercial);
    console.log(data.entreprise.phraseAccroche)
    console.log(data.entreprise.texteAppelAction)
    console.log(data.entreprise.avantagesClients)

  // creation de variables pour avoir mon chemin j'usqu'à mes éléments 
  // test d'affichage dans ma console
    let nom = data.entreprise.nomCommercial;
    let phraseAccroche=data.entreprise.phraseAccroche;
    let appelAction = data.entreprise.texteAppelAction;
    let avantages = data.entreprise.avantagesClients;
    let produits = data.entreprise.produits;
    let services = data.entreprise.services;
    let temoignages = data.entreprise.temoignages;

  //tableau pictogramme avantages



  //lien pour importer le JS dans l'HTML
  document.querySelector("#nom").innerHTML = nom
  document.querySelector("#PhraseAccr").innerHTML = phraseAccroche
  document.querySelector("#AplAAction").innerHTML = appelAction
  

// tableau pour les AVANTAGES
  avantages.forEach(element => {
    console.log(element)

    document.querySelector("#avant").innerHTML += 

    // code HTML dans le JS
    `<p class="brown fontSerif">${element.pictoAvant} ${element.phrAvant}</p>`
    
  });


  // tableau pour les PRODUITS
  produits.forEach(element => {
    console.log(element)

    document.querySelector("#produits").innerHTML +=

    // code HTML dans le JS
    `
    <div class="Carteproduit">
                <img src="${element.image}" alt="">
                <div id="carteContent">
                    <p>${element.nom}</p>
                    <p>${element.description}</p>
                </div>
                <a href="" class="acheter brown">
                    <i class="fa-solid fa-basket-shopping"></i> Acheter
                </a>
            </div>
    `
    
  });


  // tableau pour les SERVICES
  services.forEach(element => {
    console.log(element)
    
    document.querySelector("#serv").innerHTML += 

    // code HTML dans le JS
    `
    <div class="txtService">
       <h3 class="white">${element.nom}</h3>
       <p class="white">${element.description}</p>
    </div>
    `
  });


  // tableau pour les TEMOIGNAGES
  temoignages.forEach(element => {
    console.log(element)
    
    document.querySelector("#temoignage").innerHTML +=

    // code HTML dans le JS
    `
  <div class="temContour">

    <div class="infoClients">
        <p class="avatar">${element.prenom[0]}</p>
        <div class="prenomTitre">
            <p class="white fontSerif">${element.prenom}</p>
            <p class="white fontSerif">${element.typeExperience}</p>
        </div>

        <ul class="NombreEtoile">
                    <li><i class="fa-regular fa-star fa-flip-horizontal" style="color: #cc9e00;"></i></li>
                    <li><i class="fa-regular fa-star fa-flip-horizontal" style="color: #cc9e00;"></i></li>
                    <li><i class="fa-regular fa-star fa-flip-horizontal" style="color: #cc9e00;"></i></li>
                    <li><i class="fa-regular fa-star fa-flip-horizontal" style="color: #cc9e00;"></i></li>
                    <li><i class="fa-regular fa-star fa-flip-horizontal" style="color: #cc9e00;"></i></li>
        </ul>
            
    </div>
        <p class="Commentaire">${element.commentaire}</p>

  </div>
    `
  });

  //map du footer
  var map = L.map('map').setView([45.43204, 4.39482], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([45.43204, 4.39482]).addTo(map)
    .bindPopup('Rejoignez nous.<br> 8 Pl. Villebœuf, 42100 Saint-Etienne.')
    .openPopup();
}

