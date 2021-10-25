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

export async function jokeCategories() {
	const response = await fetch(`http://api.icndb.com/categories`);
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

export async function userChuckJoke(firstName, lastName) {
	const response = await fetch(
		`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
	);
	const data = await response.json();
	return data;
}

export async function displayJoke() {
	const exclude = document.getElementById('explicitCheck').checked;
	let joke = exclude ? await randomNotExplicitJoke() : await randomChuckJoke();
	let output = document.getElementById('output');
	output = joke.value.joke;
	return output;
}
