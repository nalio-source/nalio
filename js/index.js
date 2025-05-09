const gameList = {
    "egg_condition": {
        "name": "Egg Condition",
        "relaseDate": "2022-10-24",
        "embed": "https://itch.io/embed/1747499",
        "link": "https://nalio.itch.io/egg-condition"
    },
    "egg_condition_unblinded": {
        "name": "Egg Condition: Unblinded",
        "relaseDate": "2023-02-24",
        "embed": "https://itch.io/embed/1941394",
        "link": "https://nalio.itch.io/egg-condition-unblinded"
    },
    "3gg_condition": {
        "name": "3gg Condition",
        "relaseDate": "2023-11-24",
        "embed": "https://itch.io/embed/2383523",
        "link": "https://nalio.itch.io/3gg-condition"
    },
    "pioneering": {
        "name": "Pioneering",
        "relaseDate": "2024-12-31",
        "embed": "https://itch.io/embed/3206947",
        "link": "https://nalio.itch.io/pioneering"
    }
}

function loadGameList(order="descending") {
    let games = Object.values(gameList)
    let i = (order == "descending" ? -1 : 1)
    games.sort((a, b) => {
        return Date.parse(a.relaseDate)>Date.parse(b.relaseDate) ? 1*i : -1*i
    })
    
    document.getElementById("gameList").innerHTML = ""
    games.forEach((e) => {
        let gameFrame = `<iframe class="centered" frameborder="0" src="${e.embed}" width="50%" height="167"><a href="${e.link}">${e.name} by NALIo</a></iframe> <br>`;
        document.getElementById("gameList").innerHTML += gameFrame
    })
}
