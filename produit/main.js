// PRODUIT
import "/reset.css";
import "/style.css";
import { nav } from "/components/nav.js";
import { footer } from "../components/footer.js";

async function fetchPosts() {
  const id = new URL(window.location).searchParams.get("id");
  console.log(id);
  let url = new URL(import.meta.env.VITE_API_URL);
  url.pathname = `/minisite/api/produit.php`;
  url.searchParams.set("id", id);

  document.querySelector("#header").innerHTML = `
  ${nav}
  `;
  document.querySelector("#footer").innerHTML = `
  ${footer}
  `;

  try {
    const response = await fetch(url);
    const produit = await response.json();

    document.querySelector("#app").innerHTML = `
    <article class="modelsCrocs">
      <h2 class="titreAdulte">${produit.titleAdulte}</h2>
      <figure>
        <img src="${produit.img2}"</img>
      </figure>
      
    </article>
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

fetchPosts();
