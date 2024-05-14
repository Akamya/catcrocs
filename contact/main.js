// CONTACT

import { nav } from "/components/nav.js";
import { footer } from "../components/footer.js";

function createAndSubmitForm() {
  const formHtml = `
      <form id="contactForm">
      <label for="name">Nom :</label>
        <input type="text" class="input" name="name" size="30" placeholder="Votre nom" required />
        <p class="errors" id="errorsName"></p>
      <label for="email">Email :</label>
        <input type="email" class="input" name="email" size="30" placeholder="Votre email" required />
        <p class="errors" id="errorsEmail"></p>
      <label for="message">Message :</label>
        <textarea name="message" class="input" cols="30" rows="10" placeholder="Votre message" required></textarea>
        <p class="errors" id="errorsMessage"></p>
        <button class="buttonForm" type="submit">Envoyer</button>
      </form>
  `;

  document.querySelector("#header").innerHTML = `
  ${nav}`;
  document.querySelector("#app").innerHTML +=
    "<h1>Vous avez une question ou un problème avec un produit ?</h1><h1>Nous serons heureux de vous aider.</h1>";
  document.querySelector("#app").innerHTML += formHtml;
  document.querySelector("#footer").innerHTML = `
  ${footer}`;

  document
    .querySelector("#contactForm")
    .addEventListener("submit", async (e) => {
      document.querySelectorAll(".errors").forEach((element) => {
        element.innerHTML = "";
      });

      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());

      let url = new URL("http://minisite.elolan.ovh/");
      url.pathname = "api/submitContact.php";

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const responseJson = await response.json();
        console.log(responseJson);

        if (responseJson.success) {
          alert("Message envoyé !");
          e.target.reset();
        } else {
          if (responseJson.errors.name) {
            document.querySelector("#errorsName").innerHTML =
              responseJson.errors.name;
          }
          if (responseJson.errors.email) {
            document.querySelector("#errorsEmail").innerHTML =
              responseJson.errors.email;
          }
          if (responseJson.errors.message) {
            document.querySelector("#errorsMessage").innerHTML =
              responseJson.errors.message;
          }
        }
      } catch (error) {
        console.log(error);
        document.querySelector("#app").innerHTML = `
        <div>
          <p>Oops..! Il y a eu une erreur</p>
        </div>
        `;
      }
    });
}

createAndSubmitForm();
