// ACCUEIL
import "/reset.css";
import "/style.css";
import { nav } from "/components/nav.js";
import { footer } from "./components/footer.js";

function fetchProduits() {
  document.querySelector("#header").innerHTML = `
    
    ${nav}
    <div class="gallery">
        <figure class="gallery-item">
          <img src="public/images/catModels/collage.jpg" alt="" />
        </figure>
        <div class="textHeader">
          <h1>Cat</h1>
          <h1>Crocs</h1>
          <p>Rendez vos chats super craquants avec nos crocs spécialement réalisées pour vos matous.</p>
          <div class="boutonHeader">
            <a href="/produits/">Découvrir</a>
          </div>
          
        </div>
        
    </div>

    `;
  document.querySelector("#footer").innerHTML = `
  ${footer}`;
  // document.querySelector("#app").innerHTML = `
  // <h1>Page d'accueil</h1>
  //   `;
}

fetchProduits();
