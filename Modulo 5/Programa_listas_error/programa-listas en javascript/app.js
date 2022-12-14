import { generateText, createElement, validateInput } from './util';

const initApp = () => {
  // Initializes the app, registers the button click listener
  const newUserButton = document.querySelector('#btnAddUser');
  newUserButton.addEventListener('click', addUser);
};

const addUser = () => {
  // Fetches the user input, creates a new HTML element based on it
  // and appends the element to the DOM
  const newUserNameInput = document.querySelectorById(`name`); 
  const newUserAgeInput = document.querySelectorById('age');
  
  if (
    !validateInput(newUserNameInput.value, true, false) ||
    !validateInput(newUserAgeInput.value, false, true)
    ) {
      return;
    }

  const userList = document.querySelector('.user-list');
  const outputText = generateText(
    newUserNameInput.value.split(' ',1),
    newUserAgeInput.value
  );
  const element = createElement('li', outputText, 'user-item');
  userList.appendChild(element);
};

// Start the app!
initApp();
