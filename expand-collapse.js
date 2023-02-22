const dom = {
	questionImage: document.getElementsByClassName(
		'questionanswer__question__imgcontainer'
	),
	btnExpandCollapse: document.getElementsByClassName('btnExpandCollapse'),
};

function showHide(i) {
	const answerContainer = this.parentElement;
	const questionContainer = answerContainer.parentElement;
	const answer = this.nextElementSibling;

	answerContainer.classList.toggle('questionanswer__answer--expanded');
	answer.classList.toggle('questionanswer__answer__content--expanded');
	questionContainer.style.zIndex = questionContainer.style.zIndex ? null : 10;
	dom.questionImage[i].innerHTML = questionContainer.style.zIndex
		? '<img src="/images/green_q.svg" />'
		: '<img src="/images/yellow_q.svg" />';
	this.innerHTML =
		answer.classList.length > 1
			? '<img src="/images/close.png" />'
			: '<img src="/images/expand.png" />';
}

(function configButtons() {
	for (let i = 0; i < dom.btnExpandCollapse.length; i++) {
		dom.btnExpandCollapse[i].addEventListener(
			'click',
			showHide.bind(dom.btnExpandCollapse[i], i)
		);
	}
})();
