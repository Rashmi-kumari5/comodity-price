document.addEventListener('DOMContentLoaded', () => {
  const addUserForm = document.getElementById('addUserForm');
  const existingUsersDiv = document.getElementById('existingUsers');
  const usersSet = new Set(); // Use Set to store unique usernames

  // Function to add a new user
  addUserForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    if (username !== '' && !usersSet.has(username)) {
      // Add the user if the username is not empty and is unique
      const newUser = { username, password };
      addUser(newUser);
    } else {
      alert('Please enter a unique username.');
    }
  });

  // Function to add a user to the list
  function addUser(user) {
    usersSet.add(user.username); // Add username to the Set
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');
    userDiv.innerHTML = `<strong>Username:</strong> ${user.username}`;
    existingUsersDiv.appendChild(userDiv);
  }

  // Function to display existing users (if you have stored data in an array, replace this part)
  function displayExistingUsers() {
    // Simulated data for example purposes
    const existingUsers = [
      { username: 'admin', password: 'admin123' },
      // Add more users here
    ];

    existingUsers.forEach(user => {
      if (!usersSet.has(user.username)) {
        addUser(user);
      }
    });
  }

  // Call the function to display existing users on page load
  displayExistingUsers();
});



document.addEventListener('DOMContentLoaded', () => {
  const modelSelect = document.getElementById('modelNo');
  const addModelBtn = document.getElementById('addModelBtn');
  const deleteModelBtn = document.getElementById('deleteModelBtn');

  // Function to add a new model
  addModelBtn.addEventListener('click', () => {
    const newModelNumber = prompt('Enter the Model Number:');
    if (newModelNumber !== null && newModelNumber !== '') {
      const option = document.createElement('option');
      option.value = newModelNumber;
      option.textContent = `Model ${newModelNumber}`;
      modelSelect.appendChild(option);
    }
  });

  // Function to delete the selected model
  deleteModelBtn.addEventListener('click', () => {
    const selectedModel = modelSelect.value;
    if (selectedModel !== '') {
      const confirmation = confirm(`Are you sure you want to delete Model ${selectedModel}?`);
      if (confirmation) {
        const options = modelSelect.options;
        for (let i = 0; i < options.length; i++) {
          if (options[i].value === selectedModel) {
            modelSelect.removeChild(options[i]);
            break;
          }
        }
      }
    } else {
      alert('Please select a model to delete.');
    }
  });
});
