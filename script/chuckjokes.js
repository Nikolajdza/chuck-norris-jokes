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
