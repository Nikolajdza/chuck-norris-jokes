export async function randomChuckJoke() {
	const response = await fetch('http://api.icndb.com/jokes/random');
	const data = await response.json();
	return data;
}

export async function randomChuckJokes(number) {
	const response = await fetch(`http://api.icndb.com/jokes/random/${number}`);
	const data = await response.json();
	return data;
}

export async function randomNotExplicitJokes(number) {
	const response = await fetch(
		`http://api.icndb.com/jokes/random/${number}?exclude=[nerdy]`
	);
	const data = await response.json();
	return data;
}

export async function randomNotExplicitJoke() {
	const response = await fetch(
		`http://api.icndb.com/jokes/random?limitTo=[nerdy] `
	);
	const data = await response.json();
	return data;
}

export async function displayMoreJokes(number) {
	const exclude = document.getElementById('explicitCheck').checked;
	let joke = exclude
		? await randomNotExplicitJokes(number)
		: await randomChuckJokes(number);
	let output = document.getElementById('output');
	const jokes = joke.value;
	const jokeList = jokes.map((joke) => {
		return `<p>${joke.joke}</p>`;
	});
	console.log(jokeList);
	output.innerHTML = jokeList.join('🌟');
	return output;
}

export async function jokeCategories() {
	const response = await fetch(`http://api.icndb.com/categories`);
	const data = await response.json();
	return data;
}

export async function userChuckJoke(firstName, lastName) {
	const response = await fetch(
		`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
	);
	const data = await response.json();
	return data;
}
export async function userChuckJokeNerdy(firstName, lastName) {
	const response = await fetch(
		`http://api.icndb.com/jokes/random?exclude=[nerdy]&firstName=${firstName}&lastName=${lastName}`
	);
	const data = await response.json();
	return data;
}

export async function displayRandomJoke() {
	const exclude = document.getElementById('explicitCheck').checked;
	let joke = exclude ? await randomNotExplicitJoke() : await randomChuckJoke();
	let output = document.getElementById('output');
	output = joke.value.joke;
	return output;
}

export async function displayUserJoke(firstName, lastName) {
	const exclude = document.getElementById('explicitCheck').checked;
	let joke = exclude
		? await userChuckJokeNerdy(firstName, lastName)
		: await userChuckJoke(firstName, lastName);
	let output = document.getElementById('output');
	output = joke.value.joke;
	return output;
}
