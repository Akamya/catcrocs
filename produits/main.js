// PRODUITS

import { nav } from "../components/nav.js";
import { footer } from "../components/footer.js";
import { produitComponent } from "../components/produit.js";

async function fetchProduits() {
  let urlPage = window.location.href;
  console.log(urlPage);

  let url = new URL("http://minisite.elolan.ovh/");
  url.pathname = "api/produits.php";

  document.querySelector("#header").innerHTML = `
  ${nav}`;
  document.querySelector("#footer").innerHTML = `
  ${footer}`;

  try {
    const response = await fetch(url);
    const produits = await response.json();

    document.querySelector("#app").innerHTML = `
    <div class="sectionEquipe">
      <h2>Nos Crocs</h2>
      <ul class="profils">
      ${produits
        .map(
          (produit) => `
          <li class="profil">
            ${produitComponent(produit)}
          </li>`
        )
        .join("")}
      </ul>
    </div>
    `;
  } catch (error) {
    console.log(error);
    document.querySelector("#app").innerHTML = `
    <div>
      <p>Oops..! Il y a eu une erreur</p>
    </div>
    `;
  }
}

fetchProduits();
