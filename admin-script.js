document.addEventListener('DOMContentLoaded', () => {
  const addUserForm = document.getElementById('addUserForm');
  const existingUsersDiv = document.getElementById('existingUsers');
  let users = JSON.parse(localStorage.getItem('users')) || [];

  // Display existing users on page load
  displayExistingUsers();

  // Function to add a new user
  addUserForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    if (username !== '' && password !== '') {
      if (!isDuplicateUsername(username)) {
        const newUser = { username, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        displayExistingUsers();
        addUserForm.reset();
      } else {
        alert('Username already exists. Please choose a different username.');
      }
    } else {
      alert('Please enter both username and password.');
    }
  });

  // Function to check for duplicate usernames
  function isDuplicateUsername(username) {
    return users.some(user => user.username === username);
  }

  // Function to display existing users
  function displayExistingUsers() {
    existingUsersDiv.innerHTML = '';
    const uniqueUsernames = [...new Set(users.map(user => user.username))];
    uniqueUsernames.forEach(username => {
      const userDiv = document.createElement('div');
      userDiv.classList.add('user');
      userDiv.innerHTML = `<strong>Username:</strong> ${username}`;
      
      // Add delete button for each user
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('delete-btn');
      deleteButton.addEventListener('click', () => {
        deleteUser(username);
      });
      
      userDiv.appendChild(deleteButton);
      existingUsersDiv.appendChild(userDiv);
    });
  }

  // Function to delete a user
  function deleteUser(username) {
    users = users.filter(user => user.username !== username);
    localStorage.setItem('users', JSON.stringify(users));
    displayExistingUsers();
  }
});
