export function equipeComponent(profil) {
  return `
    <div class="profil">
        
        <img src="${profil.img}"/>
        <h1>${profil.title}</h1>
        <p>${profil.content}</p>
    </div>
      `;
}
