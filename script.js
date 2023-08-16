const nickname = document.createElement('input');
nickname.id = 'Name';
nickname.className = 'entry Name';
nickname.type = 'text'
nickname.placeholder = 'Name';
document.body.appendChild(nickname);

// Create the Start button element
const Start = document.createElement('button');
Start.id = 'Start';
Start.className = 'entry Start'; // Set the class name(s)

// Set the text content of the button
Start.textContent = 'Start';

// Add the button click event listener
Start.addEventListener('click', () => {
    const inputValue = nickname.value; // Get the value from the input field
    alert(`You submitted: ${inputValue}`);
    window.location.href = "pageuno.html"
});

// Append the button to the document body
document.body.appendChild(Start);

