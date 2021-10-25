import * as chuck from './chuckjokes.js';

chuck.randomChuckJoke();

const randomJoke = document.getElementById('get-joke-btn');
randomJoke.addEventListener('click', async (e) => {
	e.preventDefault();
	const output = document.getElementById('output');
	output.innerHTML = await chuck.displayJoke();
});
