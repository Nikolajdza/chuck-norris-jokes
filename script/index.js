import * as chuck from './chuckjokes.js';

chuck.randomChuckJoke();

const randomJoke = document.getElementById('get-joke-btn');
randomJoke.addEventListener('click', async (e) => {
	e.preventDefault();
	const output = document.getElementById('output');
	output.style.display = 'block';
	output.innerHTML = await chuck.displayRandomJoke();
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
		output.innerHTML = await chuck.displayUserJoke(firstName, lastName);
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
		await chuck.displayMoreJokes(jokeCount);
	} else {
		output.innerHTML = 'Better tell Chuck how many 😉';
	}
});
