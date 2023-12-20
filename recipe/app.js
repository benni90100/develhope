async function pokemonApi() {
    try {
        const response = await fetch("https://ringsdb.com/api/public/card/01001.json")
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
pokemonApi()

