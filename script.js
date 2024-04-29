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

  avantages.forEach(element => {
    console.log(element)
    
  });



}