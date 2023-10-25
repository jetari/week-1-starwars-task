// function main() {}

// module.exports = { main }

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelectorAll(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

const nameOfCharacter = document.querySelector(".char-name");
const genderOfCharacter = document.querySelector(".char-gender");
const heightOfCharacter = document.querySelector(".char-height");

// fetching data from api
fetch("https://swapi.dev/api/people")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    let displayCharacters = data.results;

    // close modal function
    const closeModal = function () {
      modal.classList.add("hidden");
      overlay.classList.add("hidden");
    };

    closeModalBtn.addEventListener("click", closeModal);

    // open modal function
    function openModal(e) {
      let characterId = e.target.id;
      console.log("clicked");
      for (let i = 0; i < openModalBtn.length; i++) {
        nameOfCharacter.innerHTML = `Name: ${displayCharacters[characterId].name}`;
        genderOfCharacter.innerHTML = `Gender: ${displayCharacters[characterId].gender}`;
        heightOfCharacter.innerHTML = `Height: ${displayCharacters[characterId].height}`;
      }
      modal.classList.remove("hidden");
      overlay.classList.remove("hidden");
    }

    for (let i = 0; i < openModalBtn.length; i++) {
      const element = openModalBtn[i];

      // open modal event
      element.addEventListener("click", openModal);
    }
    // close the modal when the close button and overlay is clicked
    overlay.addEventListener("click", closeModal);
  });