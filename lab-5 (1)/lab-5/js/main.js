(function () {
  let videoGameForm = document.querySelector('#video-game-form');
  let allGameList = document.querySelector('.all-games');
  let allGameListItems = document.querySelectorAll('.all-games li');
  let myGameList = document.querySelector('.my-favourite-games');
  let myGames = [];

  // event listener for step 1
  videoGameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let platform = event.target.elements['platform-family'].value.toLowerCase();
    filterGames(platform);
  });

  // function to filter games based on platform
  function filterGames(platform) {
    allGameListItems.forEach((item) => {
      if (item.innerText.toLowerCase().includes(platform) || platform === '') {
        item.classList.remove('hidden-item');
      } else {
        item.classList.add('hidden-item');
      }
    });
  }

  // event listener for step 2
  allGameList.addEventListener('click', (event) => {
    let game = event.target.innerText;
    addToFavouriteGames(game);
  });

  // function to add a game to the favourites list
  function addToFavouriteGames(game) {
    myGames.push(game);
    renderFavouriteList();
  }

  // function to render the favourites list
  function renderFavouriteList() {
    myGameList.innerHTML = ''; // Clear the list first
    myGames.forEach((game) => {
      myGameList.innerHTML += `<li class="list-group-item">${game}</li>`;
    });
  }

  // event listener for step 3
  myGameList.addEventListener('click', (event) => {
    let favGame = event.target.innerText;
    removeFromFavouriteGames(favGame);
  });

  // function to remove a game from the favourites list
  function removeFromFavouriteGames(game) {
    let index = myGames.indexOf(game);
    if (index !== -1) {
      myGames.splice(index, 1);
      renderFavouriteList();
    }
  }

})();
