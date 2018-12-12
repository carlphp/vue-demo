import _ from 'lodash';
import './style.css';
import avator from './avator.jpg';


function component() {
	let el = document.createElement('div');

	el.innerHTML = _.join(['hello', 'world'], ' ');

	el.classList.add('red');

	var myAvator = new Image();

	myAvator.src = avator;

	el.appendChild(myAvator)


	return el;
}

document.body.appendChild(component());