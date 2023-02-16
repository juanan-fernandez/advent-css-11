const dom = {
	questionImage: document.getElementById('questionImage'),
};

const showHide = () => {
	alert('en la b');
	console.log(dom.questionImage.innerHTML);
	dom.questionImage.innerHTML = '<img src="/images/green_q.svg" />';
};
