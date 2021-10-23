export async function randomChuckJoke() {
	const response = await fetch('http://api.icndb.com/jokes/random');
	const data = await response.json();
	console.log(data);
	return data;
}

export async function randomChuckJokes(number) {
	const response = await fetch(`http://api.icndb.com/jokes/random/${number}`);
	const data = await response.json();
	console.log(data);
	return data;
}

export async function jokeCategories() {
	const response = await fetch(`http://api.icndb.com/categories`);
	const data = await response.json();
	console.log(data);
	return data;
}

export async function userChuckJoke(firstName, lastName) {
	const response = await fetch(
		`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
	);
	const data = await response.json();
	console.log(data);
	return data;
}
