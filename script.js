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

  
  let nom = data.entreprise.nomCommercial;
  let phraseAccroche=data.entreprise.phraseAccroche;
  let appelAction = data.entreprise.texteAppelAction;
  let avantages = data.entreprise.avantagesClients;
  let produits = data.entreprise.produits;
  let services = data.entreprise.services;
  let temoignages = data.entreprise.temoignages;

  document.querySelector("#nom").innerHTML = nom
  document.querySelector("#PhraseAccr").innerHTML = phraseAccroche
  document.querySelector("#AplAAction").innerHTML = appelAction
  

  avantages.forEach(element => {
    console.log(element)

    document.querySelector("#avant").innerHTML += 
    `<p class="brown">${element}</p>`
    
  });

  produits.forEach(element => {
    console.log(element)

    document.querySelector("#produits").innerHTML +=
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

  services.forEach(element => {
    console.log(element)
    
    document.querySelector("#serv").innerHTML += 
    `
    <div class="txtService">
       <h3>${element.nom}</h3>
       <p class="brown">${element.description}</p>
    </div>
    `
  });

  temoignages.forEach(element => {
    console.log(element)
    
  });

}