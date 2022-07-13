
const input = document.querySelector('#films');
const button = document.querySelector('#tick');
const span = document.querySelector('.text');
const films = document.querySelector('.filmes');
const arr = [];


input.addEventListener('input', () => {
	if(input.value.length < 50) {
		span.innerHTML = `We did it ${input.value.length}`;
	} else if (input.value.length > 50) {
		span.innerHTML = `Вы ввели  ${input.value.length} символов, слишком длинное название`;
	}
	console.log(input.value.length)
	if(input.value.length < 1){
		span.innerHTML = '';
		films.remove();
}
})
button.addEventListener('click', () => {
	arr.push(input.value);
	console.log(arr);
		films.innerHTML = `<div class="filmes_item">Фильм ${arr} под номером </div>`;
})

