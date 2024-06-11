const table = document.querySelector("#tableauSites");

var site1 = {
  url: "https://ekosavannah.com/",
  client: "Eko Savannah",
};

var site2 = {
  url: "https://www.les-lataniers.com/",
  client: "Les Lataniers",
};

var tousLesSites = [site1, site2];
console.log(tousLesSites);

afficherSites();

function afficherSites() {
  var tableauSites = document.querySelector("#tableauSites tbody");
  var sites = "";
  for (i = 0; i <= tousLesSites.length - 1; i++) {
    sites += ` 
        <tr>
        <td>${tousLesSites[i].url}</td>
        <td>${tousLesSites[i].client}</td>
        <tr/>
        `;
  }
  tableauSites.innerHTML = sites;
}
