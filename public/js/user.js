document.getElementById('sign-upForm').addEventListener('submitButton', async (event) => {
    event.preventDefault(); // Prevent the default form submission
    
    // Collect form data
    const first_name = document.getElementById('firstName').value;
    const last_name = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirm_password = document.getElementById('confirm').value;

    if (password !== confirm_password) {
        alert('Passwords do not match!');
        return;
      }

    // Create an object to hold the form data
    const signupData = {
      first_name,
      last_name,
      age,
      weight,
      email,
      password
    };
  
    try {
      // Send a POST request to the backend
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('User created successfully:', result);
        window.location.href = '/overview';
      } else {
        const error = await response.json();
        console.error('Error:', error.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });

  document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission
    
    // Collect form data
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Create an object to hold the form data
    const loginData = {
      email,
      password
    };
  
    try {
      // Send a POST request to the backend
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData)
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Login successful:', result);
        window.location.href = '/overview';
      } else {
        const error = await response.json();
        alert('Error: ' + error.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An unexpected error occurred.');
    }
  });
  