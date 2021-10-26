import * as chuck from './chuckjokes.js';

chuck.randomChuckJoke();

const randomJoke = document.getElementById('get-joke-btn');
randomJoke.addEventListener('click', async (e) => {
	e.preventDefault();
	const output = document.getElementById('output');
	output.style.display = 'block';
	output.innerHTML = await displayRandomJoke();
});

if (document.getElementById('output').innerHTML === '') {
	document.getElementById('output').style.display = 'none';
}

const usernameBtn = document.getElementById('usernameBtn');
usernameBtn.addEventListener('click', async (e) => {
	e.preventDefault();
	const firstName = document.getElementById('firstName').value;
	const lastName = document.getElementById('lastName').value;
	const output = document.getElementById('output');
	output.style.display = 'block';
	if (firstName && lastName) {
		output.innerHTML = await displayUserJoke(firstName, lastName);
	} else {
		output.innerHTML = 'Better tell Chuck your name 😉';
	}
});

const moreJokesBtn = document.getElementById('moreJokesBtn');
moreJokesBtn.addEventListener('click', async (e) => {
	e.preventDefault();
	const jokeCount = document.getElementById('moreJokesInput').value;
	const output = document.getElementById('output');
	output.style.display = 'block';
	if (jokeCount) {
		await displayMoreJokes(jokeCount);
	} else {
		output.innerHTML = 'Better tell Chuck how many 😉';
	}
});

async function displayMoreJokes(number) {
	const exclude = document.getElementById('explicitCheck').checked;
	let joke = exclude
		? await chuck.randomNotExplicitJokes(number)
		: await chuck.randomChuckJokes(number);
	let output = document.getElementById('output');
	const jokes = joke.value;
	const jokeList = jokes.map((joke) => {
		return `<p>${joke.joke}</p>`;
	});
	output.innerHTML = jokeList.join('🌟');
	return output;
}

async function displayRandomJoke() {
	const exclude = document.getElementById('explicitCheck').checked;
	let joke = exclude
		? await chuck.randomNotExplicitJoke()
		: await chuck.randomChuckJoke();
	let output = document.getElementById('output');
	output = joke.value.joke;
	return output;
}

async function displayUserJoke(firstName, lastName) {
	const exclude = document.getElementById('explicitCheck').checked;
	let joke = exclude
		? await chuck.userChuckJokeNerdy(firstName, lastName)
		: await chuck.userChuckJoke(firstName, lastName);
	let output = document.getElementById('output');
	output = joke.value.joke;
	return output;
}
