
const API_URL = 'https://ddragon.leagueoflegends.com/cdn/12.9.1/data/pt_BR/champion.json';
 


document.addEventListener('DOMContentLoaded', () => {
    fetchChampions();
});


function mostramagos(){

    document.addEventListener('DOMContentLoaded', () => {
        pegamagos();
    });
    }



async function fetchChampions() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        displayChampions(data.data);
    } catch (error) {
        console.error('Erro ao buscar dados dos campeões:', error);
    }
}



async function pegamagos() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        displaymagos(data.data);
    } catch (error) {
        console.error('Erro ao buscar dados dos campeões:', error);
    }
}



function displayChampions(champions) {
    const championsContainer = document.getElementById('champions');
    Object.keys(champions).forEach(key => {
        const champion = champions[key];
        const championElement = document.createElement('div');
        championElement.className = 'champion';

        const tags = champion.tags.join(', ');

        championElement.innerHTML = `
            <img src="http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/${champion.image.full}" alt="${champion.name}">
            <h2>${champion.name}</h2>
            <p>${champion.title}</p>
            <p><strong>Classes:</strong> ${tags}</p>
        `;

   
        championsContainer.appendChild(championElement);
        

    });
}



function displaymagos(champions) {
    const championsContainer = document.getElementById('champions');
    Object.keys(champions).forEach(key => {
        const champion = champions[key];
        const championElement = document.createElement('div');
        championElement.className = 'champion';

        const tags = champion.tags.join(', ');

        championElement.innerHTML = `
            <img src="http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/${champion.image.full}" alt="${champion.name}">
            <h2>${champion.name}</h2>
            <p>${champion.title}</p>
            <p><strong>Classes:</strong> ${tags}</p>
        `;

        if(champion.tags.indexOf('Mage') == 1){
            championsContainer.appendChild(championElement);
            }

    });
}
