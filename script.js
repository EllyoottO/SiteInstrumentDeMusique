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
    addProducts(data);
  });
// Cette fonction prend les données JSON en entrée et effectue une action sur celles-ci
function addProducts(data) {
  // Affiche les données dans la console du navigateur
  console.log(data);}

  let avantage =""
  data.avantagesClients.forEach(element => {
    avantage = data.avantagesClients

    let Prod =""
    data.produits.forEach(element => {
        prod+=`<img src="${element.image}"> <p> ${element.nom}</p> <p>${element.description}</p> `
    });
  });

  document.querySelector("#content").innerHTML += avantage