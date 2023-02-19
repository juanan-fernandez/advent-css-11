const dom = {
	questionImage: document.getElementById('questionImage'),
	btnExpandCollapse: document.getElementsByClassName('btnExpandCollapse'),
};

function showHide() {
	const answerContainer = this.parentElement;
	const answer = this.nextElementSibling;
	answerContainer.classList.toggle('questionanswer__answer--expanded');
	answer.classList.toggle('questionanswer__answer__content--expanded');
	//answer.style.height = answer.scrollHeight + 'px';
	this.innerHTML =
		answer.classList.length > 1
			? '<img src="/images/close.png" />'
			: '<img src="/images/expand.png" />';

	//dom.questionImage.innerHTML = '<img src="/images/green_q.svg" />';
	//dom.btnExpandCollapse.innerHTML =
}

(function configButtons() {
	for (let i = 0; i < dom.btnExpandCollapse.length; i++) {
		dom.btnExpandCollapse[i].addEventListener('click', showHide);
	}
})();
