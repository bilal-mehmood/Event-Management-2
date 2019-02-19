const formEvent = document.getElementById('event-form');
let eventName = document.querySelector('input[ name="eventName" ]');
let dateOfEvent = document.querySelector('input[ name="dateOfEvent"]');
let organizer = document.querySelector('input[ name="organizer"]');
let placeOfEvent = document.querySelector('input[name="placeOfEvent"]');
let budget = document.querySelector('input[name="budget"]');
let status = document.querySelector('input[name="status"]');
let tableTbodyData = document.querySelector('#eventData').querySelector('tbody');

const selectTbody  = document.querySelector("tbody");

selectTbody.addEventListener("click", (event) => {
  if(confirm("Are you sure you want to delete this?") && event.target.tagName.toLowerCase() == 'button'){
    event.target.parentNode.parentNode.remove() == 'button';
  	// alert('ok');
  }
});

formEvent.addEventListener('submit', (event) => {
	event.preventDefault();

	eventName.value; 
	dateOfEvent.value; 
	organizer.value;
	placeOfEvent.value;
	budget.value;
	status.value;

	let tr = document.createElement('tr');
	let tdEventName = document.createElement('td');
	let tdDateOfEvent = document.createElement('td');
	let tdOrganizer = document.createElement('td');
	let tdPlaceOfEvent = document.createElement('td');
	let tdBudget = document.createElement('td');
	let tdStatus = document.createElement('td');
	let tdDel = document.createElement('td');
	let btnDel = document.createElement('button');
	btnDel.setAttribute('class', 'btn btn-danger');


	tdEventName.textContent = eventName.value;
	tdDateOfEvent.textContent = dateOfEvent.value;
	tdOrganizer.textContent = organizer.value;
	tdPlaceOfEvent.textContent = placeOfEvent.value;
	tdBudget.textContent = budget.value;
	tdStatus.textContent = status.value;
	btnDel.textContent = 'delete';

	tr.appendChild(tdEventName);
	tr.appendChild(tdDateOfEvent);
	tr.appendChild(tdOrganizer);
	tr.appendChild(tdPlaceOfEvent);
	tr.appendChild(tdBudget);
	tr.appendChild(tdStatus);
	tdDel.appendChild(btnDel);
	tr.appendChild(tdDel);
	tableTbodyData.appendChild(tr);
});



