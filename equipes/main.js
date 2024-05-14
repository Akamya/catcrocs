// EQUIPES

import { nav } from "../components/nav.js";
import { footer } from "../components/footer.js";
import { equipeComponent } from "../components/equipe.js";

async function fetchEquipes() {
  let url = new URL("http://minisite.elolan.ovh/");
  url.pathname = "api/equipes.php";

  document.querySelector("#header").innerHTML = `
  ${nav}`;
  document.querySelector("#footer").innerHTML = `
  ${footer}`;

  try {
    const response = await fetch(url);
    const profils = await response.json();

    document.querySelector("#app").innerHTML = `
    <div class="sectionEquipe">
      <h2>Notre equipe</h2>
      <ul class="profils">
      ${profils
        .map(
          (profil) => `
            ${equipeComponent(profil)}
`
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

fetchEquipes();
