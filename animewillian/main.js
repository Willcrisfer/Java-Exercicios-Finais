fetch('https://api.jikan.moe/v4/top/anime')
    .then(res => res.json())
    .then(data => {

        const listContainer = document.getElementById("anime-list");
        const sidebarContainer = document.getElementById("sidebar-container");
        const sidebar = document.getElementById("sidebar");

        data.data.forEach(anime => {
            if (anime.score > 9) {
                const animeCard = document.createElement("div");
                animeCard.classList.add("card-anime");

                const titleElement = document.createElement("div");
                titleElement.classList.add("title-anime");
                titleElement.textContent = anime.title;

                const rankingElement = document.createElement("div");
                rankingElement.classList.add("ranking-anime");
                rankingElement.textContent = `Ranking: ${anime.rank}`;

                const imgAnime = document.createElement("img");
                imgAnime.classList.add("img-anime");
                imgAnime.src = anime.images.jpg.image_url;
               
                // Declarando os Filhos
                animeCard.appendChild(titleElement);
                animeCard.appendChild(rankingElement);
                animeCard.appendChild(imgAnime);
                listContainer.appendChild(animeCard);

                // Evento do click na Div
                animeCard.addEventListener("click", () => detailsAnime(anime, sidebar, sidebarContainer));
            }
        });
    })
    .catch(error => console.error("Erro nos dados da API:", error));

function detailsAnime(anime, sidebar, sidebarContainer) {

    // Novo Card com o anime clicado. 
    sidebar.innerHTML = `
        <h2>${anime.title}</h2>
        <p>Rating: ${anime.score}</p>
        <p>Release Date: ${anime.aired.string}</p>
        <p>Genre: ${anime.genres.map(genre => genre.name).join(', ')}</p>
        <img src="${anime.images.jpg.image_url}" alt="${anime.title} Image">
    `;
  
}


