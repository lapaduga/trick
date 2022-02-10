const no = document.querySelector('.no');
const yes = document.querySelector('.yes');

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function trick(e) {
	e.target.style.top = `${getRandom(-200, 200)}px`;
	e.target.style.left = `${getRandom(-200, 200)}px`;
}

no.onmouseenter = trick;

yes.onclick = () => {
	document.querySelector('h1').textContent = 'Мы так и знали! Благодарим за лояльность нашему продукту!';
}
no.onclick = () => {
	document.querySelector('h1').textContent = 'Ладно, ты победил... Не буду устанавливать тебе ничего...';
}