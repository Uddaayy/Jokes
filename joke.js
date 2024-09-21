const url = "https://official-joke-api.appspot.com/jokes/random";
const joke = document.getElementById("joke");

async function doNetworkCall() {
    const response = await fetch(url);
    const data = await response.json();
    joke.innerHTML = `${data.setup} - ${data.punchline}`;
}