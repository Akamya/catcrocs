export function produitComponent(produit) {
  return `
    <div>

      <img src="${produit.img}"/>
      <div class="textProduits">
        <p>${produit.title}</p>
        <p>${produit.content}</p>
      </div>
      
      <a class ="buttonProduits" href="/produit/?id=${produit.id}">Cliquez ici pour voir plus</a>
    </div>
    `;
}
