const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      event.preventDefault();
      charactersAPI
        .getFullList()
        .then((characters) => {
          document.querySelector(".characters-container").innerHTML = "";

          characters.forEach((char) => {
            const charInfo = `
          <div class="character-info">
          <div class="id">Id: <span>${char.id}</span></div>
          <div class="name">Name: <span>${char.name}</span></div>
          <div class="occupation">Occupation: <span>${char.occupation}</span></div>
          <div class="cartoon">Is a Cartoon?: <span>${char.cartoon}</span></div>
          <div class="weapon">Weapon: <span>${char.weapon}</span></div>
          </div>`;
            document.querySelector(".characters-container").innerHTML +=
              charInfo;
            console.log(char);
          });
        })
        .catch((err) => console.log(err));
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const characterId = document.getElementById("fetchone").value;
      charactersAPI
        .getOneRegister(characterId)
        .then((char) => {
          document.querySelector(".characters-container").innerHTML = "";
          const charInfo = `
          <div class="character-info">
          <div class="id">Id: <span>${char.id}</span></div>
          <div class="name">Name: <span>${char.name}</span></div>
          <div class="occupation">Occupation: <span>${char.occupation}</span></div>
          <div class="cartoon">Is a Cartoon?: <span>${char.cartoon}</span></div>
          <div class="weapon">Weapon: <span>${char.weapon}</span></div>
          </div>`;
          document.querySelector(".characters-container").innerHTML += charInfo;
          console.log(char);
        })
        .catch((err) => console.log(err));
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const characterId = document.getElementById("deleteone").value;
      charactersAPI
        .deleteOneRegister(characterId)
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();
      const id = document.getElementById("editId").value;
      const name = document.getElementById("editName").value;
      const occupation = document.getElementById("editOccupation").value;
      const weapon = document.getElementById("editWpn").value;
      const cartoon = document.getElementById("editCartoon").checked;

      console.log(id, name, occupation, weapon, cartoon);

      const char = {
        name,
        occupation,
        weapon,
        cartoon,
      };
      try {
        await charactersAPI.updateOneRegister(char, id);
      } catch (err) {
        console.log(err);
      }
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();
      const name = document.getElementById("newName").value;
      const occupation = document.getElementById("newOccupation").value;
      const weapon = document.getElementById("newWpn").value;
      const cartoon = document.getElementById("newCartoon").checked;
      const newChar = { name, occupation, weapon, cartoon };

      try {
        await charactersAPI.createOneRegister(newChar);
      } catch (err) {
        console.log(err);
      }
    });
});
